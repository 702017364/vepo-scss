import { join } from 'path';
import minimist from 'minimist';

export default minimist(process.argv.slice(2));

export const refname = join(__dirname, '../');

export const style = 'style';

export const src = 'src';

export const dist = 'dist';

export const assets = 'assets';

export const output = 'Index.css';

export const test = 'test';