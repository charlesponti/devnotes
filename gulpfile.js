'use strict';

/**
 * @desc Whether gulp is being run in production mode
 * @type {Boolean}
 */
global.isProd = false;

var fs = require('fs');
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
 * @desc Add views files to Angular templateCache
 */
gulp.task('views', function() {
  return gulp.src(['src/views/**/*.html'])
    .pipe($.angularTemplatecache({
      standalone: true,
      module: 'devnotes.notes'
    }))
    .pipe(gulp.dest('src/scripts'));
});

/**
 * @desc Create browserify bundle
 */
gulp.task('js', function() {
  return browserify({
      entries: ['./src/scripts/main.js'],
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
 * @desc Styles task
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
  .pipe($.if(global.isProd, $.rename('main.min.css')))
  .pipe(gulp.dest('dist/css'))
  .pipe($.size({title: 'CSS'}));
});

// Optimize Images
gulp.task('images', function() {
  return gulp.src(['src/images/**/*'])
  .pipe($.imagemin({
    progressive: true,
    interlaced: true
  }))
  .pipe(gulp.dest('dist/images'))
  .pipe($.size({title: 'images'}));
});

/**
 * @desc Task to start development server
 */
gulp.task('serve', function() {
  browserSync({
    notify: false,
    logPrefix: 'Facade',
    server: '.'
  });

  gulp.watch('notes/**/*.md', ['markdown', reload]);
  gulp.watch('src/views/**/*.html', ['views' , reload]);
  gulp.watch('src/scss/**/*.scss', ['css' , reload]);
  gulp.watch('src/scripts/**/*.js', ['js', reload]);
});

gulp.task('build', function() {
  return runSequence('css', 'markdown', 'views', 'js');
});

gulp.task('build:prod', function() {
  global.isProd = true;
  return runSequence('build');
});

gulp.task('dev', function() {
  return runSequence('build', 'serve');
});
