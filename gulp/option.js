import { join } from 'path';
import minimist from 'minimist';

export default minimist(process.argv.slice(2));

export const refname = join(__dirname, '../');

export const style = 'sass';

export const src = 'code';

export const dist = 'jscss';

export const assets = 'images';

export const output = 'Index.css';

export const test = 'test';