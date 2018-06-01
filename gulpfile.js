const gulp = require('gulp');
const minCss = require('gulp-clean-css');
const browserSync = require('browser-sync');
const reload = browserSync.reload;
const sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp
    .src('./app/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(minCss())
    .pipe(gulp.dest('./app/css'));
});

gulp.task(
  'serve',
  gulp.series('sass', () => {
    browserSync.init({
      server: {
        baseDir: './app'
      }
    });

    gulp.watch('app/scss/*.scss', gulp.series('sass')).on('change', reload);
    gulp.watch('app/*.html').on('change', reload);
  })
);

gulp.task('default', gulp.parallel('serve'));
