import gulp from 'gulp';
import gulpif from 'gulp-if';
import concat from 'gulp-concat';
import clean from 'gulp-clean-css';
import sass from './sass';
import { init, write } from './map';
import log from './log';
import cmd, { style, output, dist } from './option';

const entry = cmd.test ? 'test' : 'main';

export default () => {
  log('开始编译样式文件');
  return gulp
    .src(`${style}/${entry}.scss`)
    .pipe(init())
    .pipe(sass())
    .pipe(clean() |> gulpif(!cmd.dev, ?))
    .pipe(output |> concat)
    .pipe(write())
    .pipe(dist |> gulp.dest);
};