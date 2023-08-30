var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var sass = require('gulp-sass')(require('sass'));
var uglify = require('gulp-uglify');
var inject = require('gulp-inject');
var babel = require('gulp-babel');
var clean = require('gulp-clean');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');

gulp.task('sass', () => {
    return gulp.src('./assets/styles.scss')
        .pipe(sass())
        .pipe(cssnano())
        .pipe(gulp.dest('./css'))
 });

gulp.task('js', function () {
    // set up the browserify instance on a task basis
    var b = browserify({
      entries: './assets/app.js',
      debug: true
      // defining transforms here will avoid crashing your stream
    });
  
    return b.bundle()
      .pipe(source('app.js'))
      .pipe(buffer())
      .pipe(babel())
      .pipe(uglify())
      .pipe(gulp.dest('./js'));
  });

gulp.task('watch', () => {
    gulp.watch('./assets/**/*.scss', gulp.series('sass'));
    gulp.watch(['./assets/js/*.js', './assets/app.js'], gulp.series('js'));
});

gulp.task('default', gulp.series('js', 'sass'));