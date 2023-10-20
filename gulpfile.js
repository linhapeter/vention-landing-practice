const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('watchStyle', () => {
  gulp.watch('src/sass/**/*.scss', () => {
    return gulp.src('src/sass/style.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('dist/css'));
  });
});

