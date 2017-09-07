/**
 * ** 開発開始手順
 *
 * $ npm i
 *
 * ** buildコマンド
 *
 * $ gulp
 *
 * ** dist、styleguideディレクトリ削除コマンド
 *
 * $ gulp clean
 *
 * ---------------------------------------------------------------------- */

/*
 * init package
 */
let gulp = require('gulp');
let runSequence = require('run-sequence');
let del = require('del');
let styleguide = require('gulp-aigis');


/*
 * task manage
 */
// default
gulp.task('default', function () {
  runSequence('styleguide');
});


/*
 * path
 */
const path = {
  src: 'src/',
  dist: 'dist/',
  styleguide: 'styleguide/'
};


/*
 * clean
 */
gulp.task('clean', function () {
  console.log('---------- clean ----------');
  del(path.dist);
  del(path.styleguide);
});


/*
 * styleguide
 */
gulp.task('styleguide', function () {
  console.log('---------- styleguide ----------');
  return gulp.src(path.src + 'aigis/config.yml')
    .pipe(styleguide());
});
