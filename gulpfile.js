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
var superstatic = require('superstatic');
var runSequence = require('run-sequence');
var source = require('vinyl-source-stream');
var ngannotate = require('browserify-ngannotate');

/**
 * @desc Convert notes from markdown to HTML
 */
gulp.task('markdown', function() {
  return gulp.src(['notes/**/*.md'])
    .pipe($.marked({}))
    .pipe(gulp.dest('src/views/notes'));
});

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
gulp.task('scripts', function() {
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
    .pipe(gulp.dest('public/scripts'));
});

/**
 * @desc Styles task
 */
gulp.task('styles', function() {
  return gulp.src('./src/styles/main.scss')
    .pipe($.sass())
    .pipe($.autoprefixer())
    .pipe($.if(global.isProd, $.concat('main.css')))
    .pipe(gulp.dest('public/styles'));
});

/**
 * @desc Watch task
 */
gulp.task('watch', function() {
  gulp.watch('notes/**/*.md', ['markdown']);
  gulp.watch('src/views/**/*.html', ['views']);
  gulp.watch('src/styles/**/*.scss', ['styles']);
  return gulp.watch('src/scripts/**/*.js', ['scripts']);
});

/**
 * @desc Task to start development server
 */
gulp.task('server', function(next) {
  var server = superstatic({
    logger: {
      info: function(msg) {
        console.log('Info:', msg);
      },
      error: function(msg) {
        console.error('Error:', msg);
      }
    },
    port: 3000,
    config: 'divshot.json'
  });
  server.listen(function() {
    console.log('Server running on port ' + server.port);
  });
  return next();
});

gulp.task('build', function() {
  return runSequence('styles', 'markdown', 'views', 'scripts');
});

gulp.task('build-prod', function() {
  global.isProd = true;
  return runSequence('build');
});

gulp.task('dev', function() {
  return runSequence('build', 'watch', 'server');
});
