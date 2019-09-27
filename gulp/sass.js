import sass from 'gulp-sass';
import compiler from 'node-sass';

sass.compiler = compiler;

const option = {
  outputStyle: 'expanded',
};

export default () => sass(option).on('error', sass.logError);