const {
  $test,
} = require('./dev');

//发布目录
const dist_path = 'jscss/';

//scss设置项
const scss_path = 'sass/';
const scss_name = 'Index.css';
const scss_entry = $test ? 'test.scss' : 'main.scss';

//es设置项
const es_path = 'code/';
const es_files = '**/*.js';

//scss配置选项
const scssOptions = {
  files: [`${scss_path}**/*.scss`],   //要监听的scss文件
  entry: `${scss_path}${scss_entry}`, //编译的scss文件入口
  output: dist_path,                  //编译后输出的目录
  sourcemap: './',                    //编译后生成的map文件输出的目录
  name: scss_name,                    //编译后合并的css文件名
};

//es配置选项
const esOptions = {
  files: [es_path + es_files],        //要监听的js文件
  entry: es_path + es_files,          //编译的入口js文件
  output: dist_path,                  //编译后输出的目录
  sourcemap: './',                    //编译后生成的map文件输出的目录
};

//html配置选项
const syncs = [
  'index.html',                       //要监听的主html文件
  `${dist_path}**/*.html`,            //要监听的html文件目录
  dist_path + scss_name,              //要监听的css文件
  dist_path + es_files,               //要监听的js文件
];

module.exports = {
  scssOptions,
  esOptions,
  syncs,
};