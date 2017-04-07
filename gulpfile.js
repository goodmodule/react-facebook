import gulp from 'gulp';
import babel from 'gulp-babel';
import jsxCoverage from 'gulp-jsx-coverage';
import path from 'path';
import coveralls from 'gulp-coveralls';

gulp.task('test', jsxCoverage.createTask({
  src: ['./tests/**/*{.js,.jsx}'],
  istanbul: {
    preserveComments: true,
    coverageVariable: '__MY_TEST_COVERAGE__',
    exclude: /node_modules|test[0-9]/,
  },
  threshold: 50,
  thresholdType: 'lines',

  transpile: {
    babel: {
      include: /\.jsx?$/,
      exclude: /node_modules/,
      omitExt: false,
    },
  },
  coverage: {
    reporters: ['text-summary', 'json', 'lcov'],
    directory: 'coverage',
  },
  mocha: {
    reporter: 'spec',
  },
}));

gulp.task('build', () =>
  gulp.src('./src/**/*.{js,jsx}')
    .pipe(babel())
    .pipe(gulp.dest('./lib'))
);

gulp.task('coveralls', ['test'], () => {
  if (!process.env.CI) {
    return void 0;
  }

  return gulp.src(path.join(__dirname, 'coverage/lcov.info'))
    .pipe(coveralls());
});
