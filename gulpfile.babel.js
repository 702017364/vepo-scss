import gulp from 'gulp';
import tasks from './gulp';
import mocha from './gulp/mocha';

gulp.task('default', tasks);

gulp.task('mocha', mocha);