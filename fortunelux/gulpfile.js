var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function () {
  return gulp.src('./src/sass/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./prod/css/'))
    .pipe(browserSync.stream());
});

gulp.task('server', ['sass'], function() {
    browserSync.init({
      server: "./prod/"
    });
    gulp.watch("./src/sass/*.sass", ['sass']);
    gulp.watch("./prod/*.html").on('change', browserSync.reload);
});

gulp.task('go', ['server']);
