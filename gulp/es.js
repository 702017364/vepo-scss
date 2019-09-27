import gulp from 'gulp';
import gulpif from 'gulp-if';
import uglify from 'gulp-uglify';
import plumber from './plumber';
import log from './log';
import cmd, { src, dist } from './option';
import { init, write } from './map';
import babel from './babel';

export default () => {
  log('开始编译脚本文件');
  return gulp
    .src(`${src}/**/*.js`)
    .pipe(plumber())
    .pipe(init())
    .pipe(babel())
    .pipe(uglify() |> gulpif(!cmd.dev, ?))
    .pipe(write())
    .pipe(dist |> gulp.dest);
};