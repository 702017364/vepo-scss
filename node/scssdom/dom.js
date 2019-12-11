import { readFileSync } from 'fs';
import { basename, join, dirname } from 'path';

const re = /\.\w+$/;

export default (src, re, callback) => {
  let name = basename(src);
  name.slice(0, 1) == '_' || (name = `_${name}`);
  re.test(name) || (name = `${name}.scss`);
  const data = dirname(src)
    |> join(?, name)
    |> readFileSync(?, 'utf-8');
  const list = [];
  let execs;
  while((execs = re.exec(data)) != null){
    let value = callback(execs);
    Array.isArray(value) || (value = [value]);
    list.push(...value);
  }
  return list;
};