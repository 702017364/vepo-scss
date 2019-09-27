import plumber from 'gulp-plumber';
import notify from 'gulp-notify';

const option = {
  errorHandler: notify.onError('ES6 Error: <%= error.message %>'),
};

export default () => plumber(option);