'use strict';

/**
 * @desc Whether gulp is being run in production mode
 * @type {Boolean}
 */
global.isProd = false;

var fs = require('fs');
var del = require('del');
var gulp = require('gulp');
var browserify = require('browserify');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var runSequence = require('run-sequence');
var source = require('vinyl-source-stream');
var ngannotate = require('browserify-ngannotate');

/**
 * @desc Convert notes from markdown to HTML
 */
gulp.task('markdown', function() {
  return gulp.src(['notes/**/*.md'])
    .pipe($.marked())
    .pipe(gulp.dest('src/views/notes'));
});

/**
 * @desc Add .html files
 */
gulp.task('html', function() {
  // Process index.html file
  gulp.src(['src/index.html'])
    .pipe($.minifyHtml({empty: true}))
    .pipe(gulp.dest('dist'));

  gulp.src(['src/views/**/*.html'])
    .pipe(gulp.dest('dist/views'));

  // Process Angular templates
  return gulp.src(['src/views/**/*.html'])
    .pipe($.angularTemplatecache({
      standalone: true,
      module: 'devnotes.notes'
    }))
    .pipe(gulp.dest('src/js'));
});

/**
 * @desc Process .js files
 */
gulp.task('js', function() {
  return browserify({
      entries: ['./src/js/main.js'],
      debug: global.isProd ? false : true,
      insertGlobals: true,
      fullPaths: true,
      transform: ngannotate
    })
    .bundle()
    .pipe(source('main.js'))
    .pipe($.if(global.isProd, $.streamify($.uglify)))
    .pipe(gulp.dest('dist/js'));
});

/**
 * @desc Process .scss files
 */
gulp.task('css', function() {
  return gulp.src(['./src/scss/main.scss'])
  .pipe($.sass({
    sourceComments: global.isProd ? 'none' : 'map',
    sourceMap: 'sass',
    outputStyle: global.isProd ? 'compressed' : 'nested',
    precision: 10,
    onError: console.error.bind(console, 'Sass error:')
  }))
  .pipe($.autoprefixer())
  .pipe($.if(global.isProd, $.csso()))
  .pipe(gulp.dest('dist/css'))
  .pipe($.size({title: 'CSS'}));
});

// Optimize Images
gulp.task('images', function() {
  return gulp.src(['src/images/**/*'])
  //.pipe($.imagemin({
  //  progressive: true,
  //  interlaced: true
  //}))
  .pipe(gulp.dest('dist/images'))
  .pipe($.size({title: 'images'}));
});

gulp.task('vendor', function() {
  // Move highlightjs files to dist
  return gulp.src([
      'bower_components/highlightjs/styles/github.css',
      'bower_components/highlightjs/highlight.pack.js'
    ])
    .pipe(gulp.dest('dist/vendor/highlight'));
});

/**
 * @desc Task to start development server
 */
gulp.task('serve', function() {
  browserSync({
    notify: false,
    logPrefix: 'Facade',
    server: 'dist'
  });

  gulp.watch('notes/**/*.md', ['markdown', reload]);
  gulp.watch('src/**/*.html', ['html' , reload]);
  gulp.watch('src/scss/**/*.scss', ['css' , reload]);
  gulp.watch('src/js/**/*.js', ['js', reload]);
});

/**
 * @desc Clean dist directory
 */
gulp.task('clean', function(done) {
  return del(['dist/*'], done);
});

gulp.task('build', function() {
  return runSequence(
    'clean',
    'vendor',
    'images',
    'css',
    'markdown',
    'html',
    'js'
  );
});

gulp.task('build:prod', function() {
  global.isProd = true;
  return runSequence('build');
});

gulp.task('dev', function() {
  return runSequence('build', 'serve');
});
