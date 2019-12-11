import { INDENT, WRAP } from './const';

const RE_SPECIAL = /[\|]+/g;
const RE_SPACE = /^(\s{3,})/;

export const format = (value) => {
  return value.replace(RE_SPECIAL, ($0) => `\\${$0}`);
};

export const formatMake = (value, children) => {
  value = value.trim();
    const list = [];
    value 
      && value != '-'
      && list.push(value);
    children && list.push(...children);
    if(list.length){
      return list.map((value) => `:pushpin: ${value}`).join('<br />');
    }
    return ':thumbsdown:';
};

export const formatParam = ({ type, name, def, md, items }) => {
  const list = [
    `${INDENT}\`${name}\``,
    format(type),
  ];
  list.push(def ? `**${def}**` : '');
  formatMake(md, items) |> list.push;
  return list.join('|');
};

export const formatParams = (title, params) => {
  const list = [
    title,
    `${INDENT}名称|类型|默认值|描述`,
    `${INDENT}-|:-:|:-:|-`,
  ];
  params.map(formatParam).join(WRAP) |> list.push;
  return list.join(WRAP);
};

export const formatExample = (title, example) => {
  const list = [
    title,
  ];
  const [ , spaces ] = example[0].match(RE_SPACE) || [];
  const re = spaces ? new RegExp(`^\\s{${spaces.length}}`, 'g') : '';
  list.push('```');
  example.map((value) => {
    value = re ? value.replace(re, '') : value;
    return value;
  }).join(WRAP) |> list.push;
  list.push('```');
  return list.join(WRAP);
};

export const formatResult = (title, { type, md }) => {
  return [
    title,
    `${INDENT}类型|描述`,
    `${INDENT}:-:|-`,
    `${INDENT}${format(type)}|${formatMake(md)}`,
  ].join(WRAP);
};

export const formatNode = (title, { label, list }) => {
  const isA = !label || label == '-';
  const isB = !list || !list.length;
  if(isA && isB) return;
  const caches = [title];
  const list0 = [];
  isA || list0.push(label);
  isB || list0.push(...list);
  list0.forEach((value, index) => {
    caches.push(`${INDENT}${index + 1}. ${value}`)
  });
  return caches.join(WRAP);
};

export const catalog = (data) => {
  const column = 6;
  const list = [];
  const thead = 'one,two,three,four,five,six,seven,eight,nine,keycap_ten'.split(',');
  for(let i = 0, j = data.length; i < j; i += column){
    if(!i){
      const num = Math.min(column, j);
      thead.slice(0, num).map((value) => `:${value}:`).join('|') |> list.push;
      new Array(num).fill('-').join('|') |> list.push;
    }
    data.slice(i, i + column).map(({ name, note }) => {
      let { label } = note;
      label == '-' && (label = '');
      return `[${name}](#triangular_flag_on_post-${name} "${label || ':thumbsdown:'}")`;
    }).join('|') |> list.push;
  }
  return list.map((value) => `${INDENT}${value}`).join(WRAP);
};