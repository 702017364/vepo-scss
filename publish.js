import fs from 'fs';
import { join } from 'path';
import cmd from 'node-cmd';

const dir = 'publish';

const clean = (file) => {
  const stat = fs.statSync(file);
  if(stat.isDirectory()){
    fs.readdirSync(file).forEach((value) => join(file, value) |> clean);
    fs.rmdirSync(file);
  } else{
    fs.unlinkSync(file);
  }
};

const reset = () => {
  try{
    clean(dir);
  } catch{} finally{
    fs.mkdirSync(dir);
  }
};

const clone = (list = []) => {
  for(let i = 0, j = list.length || 0; i < j; i++){
    const file = list[i];
    const stat = fs.statSync(file);
    if(stat.isDirectory()){
      const cache = join(dir, file);
      if(!fs.existsSync(cache)){
        fs.mkdirSync(cache);
      }
      fs.readdirSync(file).map((value) => join(file, value)) |> clone;
    } else{
      join(dir, file) |> fs.copyFileSync(file, ?);
    }
  }
};

const quiteVersion = (v1, v2) => {
  const a1 = v1.split('.');
  const a2 = v2.split('.');
  let quite = -1;
  a1.some((value, index) => {
    const i1 = parseInt(value) || 0;
    const i2 = parseInt(a2[index]) || 0;
    if(i1 == i2) return;
    quite = i1 > i2;
    return true;
  });
  return quite;
};

const increaseVersion = (version) => {
  const list = version.split('.');
  const last = list.slice(-1)[0] |> parseInt;
  list.splice(-1, 1, last + 1);
  return list.join('.');
};

const RE = /^((?:\d+\.){2}\d+)$/;

const newVersion = (customVersion) => {
  const packageVersion = require('./package.json').version;
  return customVersion && RE.test(customVersion) && quiteVersion(customVersion, packageVersion) === true
    ? customVersion
    : increaseVersion(packageVersion);
};

const RE_VERSION = /"version":\s*"(?:\d+\.)+\d+"/mg;

const updateVersion = (file, version) => {
  const data = fs.readFileSync(file, 'utf-8');
  const [value] = data.match(RE_VERSION) || [];
  if(!value) return;
  data.replace(value, `"version": "${version}"`) |> fs.writeFileSync(file, ?);
};

const publish = async () => {
  const npm = 'http://registry.npmjs.org/';
  const value = await new Promise((resolve, reject) => {
    cmd.get(`npm config get registry`, (err, data) => {
      err ? reject(err) : resolve(data);
    });
  });
  if(value != npm){
    await new Promise((resolve, reject) => {
      cmd.get(`npm config set registry=${npm}`, (err, data) => {
        err ? reject(err) : resolve(data);
      });
    });
  }
  await new Promise((resolve, reject) => {
    cmd.get(`npm publish publish`, (err, data) => {
      err ? reject(err) : resolve(data);
    });
  });
  if(value != npm){
    await new Promise((resolve, reject) => {
      cmd.get(`npm config set registry=${value}`, (err, data) => {
        err ? reject(err) : resolve(data);
      });
    });
  }
};

const init = async () => {
  reset();
  let { version, files } = require('./publish.json');
  clone(files);
  version = newVersion(version);
  join(dir, 'package.json') |> updateVersion(?, version);
  join(dir, 'package-lock.json') |> updateVersion(?, version);
  /* try{
    await publish();
    updateVersion('package.json', version);
  } catch(e){
    throw e;
  } */
};

// 自定发布新包（当前版本仅收集发布文件和修改被收集文件的版本号）
init();