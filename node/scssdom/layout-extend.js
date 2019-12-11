import layout from './layout';
import { INDENT, WRAP } from './const';

const format = ({ name, note }, index) => {
  const list = [];
  if(!index){
    list.push(`名称|说明`);
    list.push(`-|-`);
  }
  `\`${name}\`|${note || ':thumbsdown:'}` |> list.push;
  return list.map((value) => `${INDENT}${value}`).join(WRAP);
};

export default (title, list) => {
  return layout(title, list, format);
};