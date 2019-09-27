import gulp from 'gulp';
import { test } from './option';
import { exec } from 'child_process';

let count = 0;

const compiler = (err, stdout, stderr) => {
  if(err){
    console.error(stderr);
  } else{
    console.log(stdout);
  }
  console.log(count++, Math.random());
};

let wait = false;
let queue = false;
let t1;

const task = () => {
  const t2 = new Date();
  if(t1){
    if(t2 - t1 < 500){
      t1 = t2;
      return;
    }
  }
  t1 = t2;
  if(wait) return queue = true;
  wait = true;
  new Promise((resolve) => exec('npm run test', (...list) => {
    compiler(...list);
    resolve();
  })).then(() => {
    wait = false;
    if(!queue) return;
    queue = false;
    task();
  });
};

export default () => {
  return gulp
    .watch(`${test}/**/*.scss`)
    .on('change', task);
};