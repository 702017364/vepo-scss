import fs from 'fs';
import gulp from 'gulp';
import clean from 'gulp-clean';
import { dist } from './option';
import log from './log';

export default (cb) => {
  try{
    const stat =  fs.statSync(dist);
    if(!stat.isDirectory()) return;
    log('清理编译文件');
    return gulp
      .src(dist, {read: false})
      .pipe(clean());
  } catch{
    cb();
  }
};