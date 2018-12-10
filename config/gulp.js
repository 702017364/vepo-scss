const {
  $test
} = require('./dev');

//路径配置
const distPath = 'jscss/';

//源码文件配置
const opt = {
  scss: {
    path: 'sass/',
    output: distPath,
    name: 'Index.css'
  },
  es: {
    path: 'code/',
    output: distPath,
    name: '**/*.js'
  },
  html: {
    path: distPath,
    name: 'index.html'
  }
};

const {
  scss,
  es,
  html
} = opt;

const scssEntry = $test ? 'test.scss' : 'main.scss';

//scss文件选项
const scssOptions = {
  files: [`${scss.path}**/*.scss`],   //要监听的scss文件
  entry: `${scss.path}${scssEntry}`,  //编译的scss文件入口
  output: scss.output,                //编译后输出的目录
  sourcemap: './',                    //编译后生成的map文件输出的目录
  name: scss.name                     //编译后合并的css文件名
};

//es文件选项
const esOptions = {
  files: [`${es.path}**/*.js`],       //要监听的js文件
  entry: `${es.path}${es.name}`,      //编译的入口js文件
  output: es.output,                  //编译后输出的目录
  sourcemap: './'                     //编译后生成的map文件输出的目录
};

//html文件选项
const syncs = [
  html.name,                          //要监听的主html文件
  `${html.path}**/*.html`,            //要监听的html文件目录
  scss.output + scss.name,            //要监听的css文件
  es.output + es.name                 //要监听的js文件
];

//获取配置的路径
const getPath = name => paths[name];

module.exports = {
  scssOptions,
  esOptions,
  syncs,
  getPath
};