import { join } from 'path';
import gulp from 'gulp';
import gulpclean from 'gulp-clean';
import { assets, dist } from './option';

const src = join(dist, assets);

export default () => {
  return gulp
    .src(`${assets}/**/*`)
    .pipe(src |> gulp.dest);
};

export const clean = () => {
  return gulp
    .src(src)
    .pipe(gulpclean());
};