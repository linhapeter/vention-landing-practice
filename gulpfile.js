const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('message', (done) => {
  console.log('Gulp is running...');
  done();
});

gulp.task('sass', (done) => {
  gulp.src('src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
  done();
});