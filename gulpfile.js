const fs = require('fs');
const {
  exec,
} = require('child_process');

const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
sass.compiler = require('node-sass');

const utils = require('./config/utils');
const {
  produce,
  defaultEnv,
  sourceMap,
  produceFn,
  rf
} = require('./config/task/if-fn');

const {
  scssOptions,
  esOptions,
  syncs,
} = require('./config/gulp');

//  task 命名规则
//  watch => watch + name
//  任务 => gulp + name

/// 编译 Scss 及发布 CSS
gulp.task('gulp-sass', () => {
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
});

/// 编译 ES 及发布 JS
gulp.task('gulp-es', () => {
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
});

/// 监听 scss 文件
gulp.task('watch-sass', () => {
  return gulp
    .watch(scssOptions.files, ['gulp-sass'])
    .on('change', () => {
      utils.printDate('发现更改了 Scss 文件');
    })
});

/// 监听 js 文件
gulp.task('watch-es', () => {
  return gulp
    .watch(esOptions.files, ['gulp-es'])
    .on('change', () => {
      utils.printDate('发现更改了 Javascript 文件');
    })
});

/// 清除发布目录下的发布的 js、css 文件
gulp.task('clean-jscss', () => {
  console.log('清理编译文件');
  return gulp
    .src(
      [
        `${scssOptions.output}${scssOptions.name}`,
        `${scssOptions.output}${scssOptions.sourcemap}${scssOptions.name}.map`,
        `${esOptions.output}**.*js`,
        `${esOptions.output}${esOptions.sourcemap}**.*js.map`
      ], 
      { read: false }
    )
    .pipe(plugins.clean());
});

/// 清除 js、css 发布目录
gulp.task('clean-all', () => {
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

/// 监听文件变化并刷新浏览器
gulp.task('rf', () => {
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
});

/// 默认（启动配置中的任务）
gulp.task('default', ['clean-jscss'], e => gulp.start('compile'));

gulp.task('compile', ['gulp-sass', 'gulp-es'], e => {
  const list = [];
  rf && list.push('rf');
  produce || list.push('watch-sass', 'watch-es');
  gulp.start.apply(gulp, list);
});

/// 卸载 package.json 中的 install
gulp.task('uninstall', () => {
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