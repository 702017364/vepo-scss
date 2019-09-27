import gulp from 'gulp';
import clean from './clean';
import assets from './assets';
import style from './style';
import es from './es';
import watch from './watch';

export default gulp.series(
  clean,
  assets,
  style,
  es,
  watch,
);