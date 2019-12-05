const minimist = require('minimist');

const develop = !minimist(process.argv.slice(2)).production;

const entry = develop ? 'test' : 'main';

module.exports = {
  dir: { 
    bin: 'dist',
    styles: 'style' 
  },
  output: [ `${entry}.scss` ],
  rename: 'Index',
};