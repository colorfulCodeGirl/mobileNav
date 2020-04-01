/* eslint-disable linebreak-style */
const { series, watch, src, dest } = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

sass.compiler = require('node-sass');

function scss() {
  return src('./app/sass/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./app/css'))
    .pipe(browserSync.stream());
}

function serve() {
  browserSync.init({
    server: {
      baseDir: './app',
    },
  });

  watch('/app/sass/*.scss', scss).on('change', browserSync.reload);
  watch('/app/*.html').on('change', browserSync.reload);
}

exports.scss = scss;
exports.default = series(serve, sass);
