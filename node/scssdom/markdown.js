import { vars, extend, functions, mixins } from './data';
import layoutVar from './layout-var';
import layoutExtend from './layout-extend';
import layoutMixin from './layout-mixin';
import layoutFunction from './layout-function';
import { catalog } from './util';
import { WRAP } from './const';
import { writeFileSync } from 'fs';

const data = [
  { label: '常量', data: vars, method: layoutVar },
  { label: '继承', data: extend, method: layoutExtend },
  { label: '混合', data: mixins, method: layoutMixin },
  { label: '方法', data: functions, method: layoutFunction },
];

export default () => {
  const list = ['### 目录'];
  data.forEach(({ label, data }, index) => {
    list.push(`${index + 1}. [${label}](#${label})`);
    const first = data[0];
    if(!first || !first.option) return;
    catalog(data) |> list.push;
  });
  list.push('***');
  data.forEach(({ label, data, method }) => {
    method(label, data) |> list.push;
  });
  list.push('***');
  list.push('[回到顶部](#readme)');
  list.join(WRAP + WRAP) |> writeFileSync('node/API.md', ?);
};