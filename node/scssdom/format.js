const RE_WRAP = /\s{2,}/g;
const RE_LIST = /^(\S+)\s*\(\s*([\w\W]+)\s*\)$/;
const RE_SPLIT = /\s+|\s*,\s*/g;
const option = new Map([
  [/^(\.\d+)([a-z]*)/i, ($1, $2) => `0${$1}${$2}`],
  [/^unquote\(([^\)]*)\)/, (value) => value],
  [/^\(\s*([\w\W]+?),?\s*\)$/, (value) => {
    const list = ['('];
    value.replace(RE_WRAP, '\u0020')
      .split(',')
      .map((value) => {
        const indent = '&emsp;'
        value = value.trim();
        const [ , front, content ] = value.match(RE_LIST) || [];
        if(!front) return indent + value;
        const list = content.split(RE_SPLIT);
        if(list.length < 2) return indent + value;
        value = list.map((value) => `${indent}&ensp;${value}`).join(',<br />');
        return `${indent}${front} (<br />${value}`;
      })
      .join(`,<br />`) |> list.push;
    list.push(')');
    return list.join('<br />');
  }],
]);

export default (value) => {
  for(let [ re, callback ] of option){
    if(typeof callback != 'function') continue;
    const matchs = value.match(re);
    if(!matchs) continue;
    const list = matchs.slice(1);
    value = callback(...list);
    break;
  }
  return value;
};