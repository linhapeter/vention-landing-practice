const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('watchStyle', () => {
  gulp.watch('src/sass/style.scss', () => {
    return gulp.src('src/sass/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('dist/css'));
  });
});

