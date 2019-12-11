import doms from './doms';
import { RE_OPTION, RE_WRAP } from './re';

const RE_MIXIN = /(?:@import\s+['"]([^'"]+)['"];)|(?:\/{3}\s+([^\n\r]+)[\n\r]+(?:\/{3}\s+@access\s+(private)[\n\r]+)?([\w\W]*?)@(?:mixin|function)\s+([\w-]+))/g;
const RE_START = /^\/{2,3}\s+@([a-zA-Z]+)\s*/;
const RE_PARAM = /\{([\w\|\<\>]+)\}\s+(\$[\w-]+)\s+(?:\[([\w\W]+?)\]\s+)?([\w\W]*)/;
const RE_RETURN = /\{([\w\|\<\>]+)\}\s+([\w\W]*)/;
const RE_THROM = /@throw\s+([^\n\r]*)/;
const RE_EXAMPLE = /\/{3}/g;

const format = ([ note, access, rk, name ]) => {
  if(access) return [];
  note = { label: note, list: [] };
  let cache = '';
  const option = rk && rk.split(RE_WRAP).reduce((map, value) => {
    if(!value) return map;
    const [ , symbol ] = RE_START.exec(value) || [];
    if(symbol && symbol != 'include'){
      switch(symbol){
        case 'param':
          {
            const [, type, name, def, md] = value.match(RE_PARAM) || [];
            if(type && name){
              cache = 'param';
              map.params.push({ type, name, def, md });
            }
          }
          break;
        case 'return':
          {
            const [, type, md] = value.match(RE_RETURN) || [];
            type && (map.result = { type, md });
          }
          break;
        case 'throw':
          {
            const [, md] = value.match(RE_THROM) || [];
            map.throws.push(md);
          }
          break;
        case 'example':
          cache = 'example';
          break;
        default:
          cache = 'unknown';
          break;
      }
    } else{
      switch(cache){
        case '':
          value.replace(RE_OPTION, '') |> note.list.push;
          break;
        case 'param':
          const [option] = map.params.slice(-1);
          const items = option.items || (option.items = []);
          value.replace(RE_OPTION, '') |> items.push;
          break;
        case 'example':
          value.replace(RE_EXAMPLE, '') |> map.example.push;
          break;
      }
    }
    return map;
  }, { params: [], example: [], throws: [] });
  return { note, name, option };
};

export default (src) => {
  return doms(src, RE_MIXIN, format);
};