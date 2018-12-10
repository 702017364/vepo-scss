import path from 'path';
import sassTrue from 'sass-true';

const file = path.join(__dirname, 'test.scss');
console.log(file);
sassTrue.runSass({ file }, describe, it);