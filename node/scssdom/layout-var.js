import layout from './layout';
import comment from './comment';
import { RE_LIST } from './re';
import formatUtil from './format';
import { INDENT, WRAP } from './const';

const format = ({ name, value, note, items }, index) => {
  const list = [];
  if(!index){
    list.push(`名称|默认值|说明`);
    list.push(`-|-|-`);
  }
  const [ cache, rows ] = comment(name, value);
  const explan = [note].concat(items || [], rows).map((value) => {
    value = value.replace(RE_LIST, '');
    return `:pushpin: ${value}`;
  }).join('<br />') || ':thumbsdown:';
  value = formatUtil(cache);
  `\`${name}\`|**${value}**|${explan}` |> list.push;
  return list.map((value) => `${INDENT}${value}`).join(WRAP);
};

export default (title, list) => {
  return layout(title, list, format);
};