import gulpif from 'gulp-if';
import sourcemaps from 'gulp-sourcemaps';
import cmd from './option';

const map = gulpif(cmd.map, ?);

export const init = () => sourcemaps.init() |> map;

export const write = () => sourcemaps.write('./') |> map;