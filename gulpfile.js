var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

// Compile sass
gulp.task('sass', function() {
  return gulp.src('./static/sass/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./'));
});

// Concat js
gulp.task('js', function() {
  return gulp.src([ './static/js/jQuery.min.js',
                    './static/js/lib/*.js',
                    './static/js/scripts/*.js',
                    './static/js/functions.js'])
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./'));
});

// Gulp watch
gulp.task('watch', function() {
  gulp.watch(['./static/sass/*.scss', './static/sass/*/*.scss'], gulp.series('sass'));
  gulp.watch('./static/js/*.js', gulp.series('js'));
});
