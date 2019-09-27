import gulp from 'gulp';
import browser from 'browser-sync';
import cmd, { output, dist } from './option';
import log from './log';

export const server = cmd.dev && browser.create();

const option = {
  server: {
    baseDir: './',
  },
};

const files = [
  'index.html',
  `${dist}/${output}`,
  `${dist}/**/*.js`,
];

export default (cb) => {
  if(cmd.dev){
    server.init(option);
    return gulp
      .watch(files)
      .on('change', () => {
        log('文件有变化开始刷新');
        server.reload();
      });
  } else{
    cb();
  }
};