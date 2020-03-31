/* eslint-disable linebreak-style */
/* eslint-disable func-names */
const { series, watch, src, dest } = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

sass.compiler = require('node-sass');

const scss = function() {
  return src('./app/sass/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./app/css'))
    .pipe(browserSync.reload({ stream: true }));
};

const serve = function() {
  browserSync.init({
    server: {
      baseDir: './app',
    },
  });

  watch('/app/sass/*.scss', scss);
  watch('/app/*.html').on('change', browserSync.reload);
};

exports.scss = scss;
exports.default = serve;
