/**
 *  *1・*2 gulp-csscombとgulp-sourcemaps は、gulp-csscombがgulp-sourcemapsに対応していないので、同時に動作することができません。
 *  gulp-csscombを動作させたい場合は、「*2」の記述をコメントアウトしてください。
 */
const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const path = require('path');
const cssnano = require('gulp-cssnano');
const watch = require('gulp-watch');
const autoprefixer = require('gulp-autoprefixer');
const csscomb = require('gulp-csscomb');
const replace = require('gulp-replace');
const package = require('./package.json');
const rootTheme = package.config.theme;

//テーマ
//SCSSファイルをCSSにコンパイルする
gulp.task('sass', ()=> {
 return gulp.src(['./src/scss/app.scss'])
    .pipe(sass({
      includePaths: ['node_modules']
    }))
    .pipe(autoprefixer())
    .pipe(csscomb())// *1
    .pipe(rename({
      basename: 'bundle'
    }))
    .pipe(gulp.dest(`dest`))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(cssnano({ safe: true }))
    .pipe(gulp.dest(`dest`));
});


gulp.task('project', () => {
 gulp.watch('./src/scss/**', gulp.task('sass'));
});



gulp.task('default', gulp.series(gulp.parallel('project')));
