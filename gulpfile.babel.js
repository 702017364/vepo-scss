import fs from 'fs';
import path from 'path';
import {exec} from 'child_process';
import gulp from 'gulp';
import LoadClass from 'gulp-load-plugins';
import BrowserSyncClass from 'browser-sync';
import sass from 'gulp-sass';
import NodeSass from 'node-sass';

import utils from './config/utils';

import {
  produce,
  defaultEnv,
  sourceMap,
  produceFn,
  rf,
} from './config/task/if-fn';

import {
  scssOptions,
  esOptions,
  syncs,
} from './config/gulp';

const plugins = LoadClass();
const browserSync = BrowserSyncClass.create();
sass.compiler = NodeSass;

const gulpSass = () => {
  console.log('开始编译 .scss 文件');
  return gulp
    .src(scssOptions.entry)
    .pipe(plugins.if(sourceMap, plugins.sourcemaps.init()))
    .pipe(sass({ 
        outputStyle: 'expanded',
      }).on('error', sass.logError))
    .pipe(plugins.if(produceFn, plugins.cleanCss()))
    .pipe(plugins.concat(scssOptions.name))
    .pipe(plugins.if(sourceMap, plugins.sourcemaps.write(scssOptions.sourcemap)))
    .pipe(gulp.dest(scssOptions.output));
};

const gulpECMA = () => {
  console.log('开始编译 .js 文件');
  return gulp
    .src(esOptions.entry)
    .pipe(plugins.plumber({
      errorHandler: plugins.notify.onError('ES6 Error: <%= error.message %>')
    }))
    .pipe(plugins.if(sourceMap, plugins.sourcemaps.init()))
    .pipe(plugins.babel({ 
      presets: ['@babel/env'],
    }))
    .pipe(plugins.if(produceFn, plugins.uglify()))
    .pipe(plugins.if(sourceMap, plugins.sourcemaps.write(esOptions.sourcemap)))
    .pipe(gulp.dest(esOptions.output));
};

const copyImages = () => { //拷贝图片目录
  const folderPath = `${scssOptions.output}images/`;
  return gulp
    .src('images/*')
    .pipe(gulp.dest(folderPath));
};

const watchSass = () => { //监听 scss 文件
  return gulp
    .watch(scssOptions.files, gulp.series(gulpSass))
    .on('change', () => utils.printDate('发现更改了 Scss 文件'));
};

const watchECMA = () => { //监听 js 文件
  return gulp
    .watch(esOptions.files, gulp.series(gulpECMA))
    .on('change', () => utils.printDate('发现更改了 Javascript 文件'));
};

const watchImage = () => { //监听 image 文件
  const cleanImages = () => gulp
    .src(`${scssOptions.output}images/`)
    .pipe(plugins.clean());
  return gulp
    .watch('images/*', gulp.series([
      cleanImages,
      copyImages,
    ]))
    .on('change', () => utils.printDate('发现 images 目录有文件变动'));
};

const refresh = () => { //监听文件变化并刷新浏览器
  const opt = defaultEnv.proxy
    ? { 
      proxy: opt.defaultEnv.proxy,
    }
    : {
      server: {
        baseDir: './',
      }
    };
  browserSync.init(opt);
  return gulp
    .watch(syncs)
    .on('change', () => {
      utils.printDate('文件有变化开始刷新');
      browserSync.reload();
    });
};

gulp.task('default', (() => { //默认（启动配置中的任务）
  const tasks = [];
  try{ //尝试清理编译目录
    const folder = fs.statSync(path.join(__dirname, scssOptions.output));
    if(folder.isDirectory()){
      tasks.push(() => { //清空发布目录
        console.log('清理编译文件');
        return gulp
          .src(scssOptions.output, { read: false })
          .pipe(plugins.clean());
      });
    }
  } catch{}
  tasks.push(gulp.parallel(
    gulpSass,
    gulpECMA,
    copyImages,
  ));
  const list = []; //启动监听任务
  rf && list.push(refresh);
  produce || list.push(watchSass, watchECMA, watchImage);
  list.length && tasks.push(gulp.parallel(...list));
  return gulp.series(tasks);
})());

gulp.task('mocha', () => { //启动测试开发
  let count = 0;
  return gulp
    .watch('test/**/*.scss', () => {})
    .on('change', () => exec('npm run test', (err, stdout, stderr) => {
      if(err){
        console.error(stderr);
      } else{
        console.log(stdout);
      }
      console.log(count++, Math.random());
    }));
});