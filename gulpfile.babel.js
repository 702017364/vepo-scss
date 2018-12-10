import fs from 'fs';
import {
  exec,
} from 'child_process';
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

//  task 命名规则
//  watch => watch + name
//  任务 => gulp + name

const gulpSass = () => { //编译 Scss 后发布 CSS
  console.log('开始编译 Scss 文件');
  return gulp
  .src(scssOptions.entry)
  .pipe(plugins.if(
    sourceMap, 
    plugins.sourcemaps.init()
  ))
  .pipe(sass(
      { 
        outputStyle: 'expanded' 
      }
    )
    .on('error', sass.logError)
  )
  .pipe(plugins.if(
    produceFn, 
    plugins.cleanCss())
  )
  .pipe(plugins.concat(scssOptions.name))
  .pipe(plugins.if(
    sourceMap, 
    plugins.sourcemaps.write(scssOptions.sourcemap)
  ))
  .pipe(gulp.dest(scssOptions.output));
};

const gulpECMA = () => { //编译 ES 后发布 JS
  console.log('开始编译 Javascript 文件');
  return gulp
    .src(esOptions.entry)
    .pipe(plugins.plumber(
      {
          errorHandler: plugins.notify.onError('ES6 Error: <%= error.message %>')
      }
    ))
    .pipe(plugins.if(
      sourceMap, 
      plugins.sourcemaps.init()
    ))
    .pipe(plugins.babel(
      { 
        presets: ['@babel/env'],
      }
    ))
    .pipe(plugins.if(
      produceFn, 
      plugins.uglify()
    ))
    .pipe(plugins.if(
      sourceMap, 
      plugins.sourcemaps.write(esOptions.sourcemap)
    ))
    .pipe(gulp.dest(esOptions.output));
};

const watchSass = () => { //监听 scss 文件
  return gulp
    .watch(scssOptions.files, gulp.series(gulpSass))
    .on('change', () => {
      utils.printDate('发现更改了 Scss 文件');
    });
};

const watchECMA = () => { //监听 js 文件
  return gulp
    .watch(esOptions.files, gulp.series(gulpECMA))
    .on('change', () => {
      utils.printDate('发现更改了 Javascript 文件');
    })
};

const refresh = () => { //监听文件变化并刷新浏览器
  const opt = defaultEnv.proxy ? 
    { proxy: opt.defaultEnv.proxy } : 
    { server:  {
      baseDir: './'
    }};
  browserSync.init(opt);
  return gulp
    .watch(syncs)
    .on('change', () => {
      utils.printDate('文件有变化开始刷新');
      browserSync.reload();
    });
};

gulp.task('default', (() => { //默认（启动配置中的任务）
  const tasks = [
    () => { //清空发布目录
      console.log('清理编译文件');
      return gulp
        .src(scssOptions.output, { read: false })
        .pipe(plugins.clean());
    },
    gulp.parallel(
      gulpSass,
      gulpECMA,
      () => { //拷贝图片目录
        return gulp
          .src('images/*')
          .pipe(gulp.dest(`${scssOptions.output}images/`))
      },
    ),
  ];
  const list = []; //启动监听任务
  rf && list.push(refresh);
  produce || list.push(watchSass, watchECMA);
  list.length && tasks.push(gulp.parallel(...list));
  return gulp.series(tasks);
})());

gulp.task('uninstall', () => { //卸载 package.json 中的 install
  const uninstall = (tasks, gulptask, i = 0) => {
    new Promise((resolve, reject) => {
      const task = tasks[i];
      console.log(`start uninstall ${task}`);
      exec(`npm uninstall ${task}`, (err, stdout, stderr) => {
        if(err){
          console.log(`uninstall ${task} failure`);
          reject(err);
        } else{
          console.log(`unistall ${task} success`);
          resolve(++i);
        }
      });
    })
      .then(i => {
        if(i < tasks.length){
          uninstall(tasks, gulptask, i);
        } else{
          gulptask.resolve();
        }
      })
      .catch(e => {
        console.log(e);
        gulptask.reject(new Error('fail'));
      });
  };
  return new Promise((resolve, reject) => {
    fs.readFile('package.json', 'utf8', (err, data) => {
      if(err) return console.log(err);
      const {
        dependencies,
        devDependencies
      } = JSON.parse(data);
      uninstall(Object.keys({
        ...dependencies,
        ...devDependencies
      }), {
        resolve,
        reject
      });
    });
  });
});

gulp.task('mocha', () => { //启动测试开发
  let count = 0;
  return gulp
    .watch('test/**/*.scss', () => {})
    .on('change', () => exec('npm run test', (err, stdout, stderr) => {
      console.log(count++, Math.random());
      if(err){
        console.error(stderr);
      } else{
        console.log(stdout);
      }
    }));
});

gulp.task('uncss', () => { //删除多余css
  return gulp
    .src(scssOptions.output + '/**/*.css')
    .pipe(plugins.uncss({
      html: syncs.slice(0, 2),
    }))
    .pipe(gulp.dest('uncss/'));
});

gulp.task('clean-all', () => { //清除 js、css 发布目录
  console.log('清理目录');
  return gulp
    .src(
      [
        sassWatch.output,
        esWatch.output
      ], 
      { read: false }
    )
    .pipe(plugins.clean());
});