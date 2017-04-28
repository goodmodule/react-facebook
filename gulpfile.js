import gulp from 'gulp';
import babel from 'gulp-babel';

gulp.task('build', () =>
  gulp.src('./src/**/*.{js,jsx}')
    .pipe(babel())
    .pipe(gulp.dest('./lib'))
);
