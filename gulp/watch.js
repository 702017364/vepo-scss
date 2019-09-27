import gulp from 'gulp';
import cmd, { style as f1, src as f2, assets as f3 } from './option';
import style from './style';
import es from './es';
import assets, { clean } from './assets';
import browser from './http';

export default cmd.dev
  ? gulp.parallel([
      browser,
      () => gulp.watch(`${f1}/**/*.scss`, gulp.series(style)),
      () => gulp.watch(`${f2}/**/*.js`, gulp.series(es)),
      () => gulp.watch(`${f3}/**/*`, gulp.series(clean, assets)),
    ])
  : (cb) => cb();