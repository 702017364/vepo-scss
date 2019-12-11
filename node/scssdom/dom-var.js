import dom from './dom';
import { RE_WRAP, RE_OPTION } from './re';

const re = /\/{3}\s+([^\n\r]+)[\n\r]+((?:\/{2,3}\s+-\s+(?:\d+、)?[^\n\r]+[\n\r]+)*)(\$[\w-]+):\s+([^;]+)\s+!default;/g;

const format = ([ , note, rk, name, value ]) => {
  const items = rk && rk.split(RE_WRAP).reduce((list, value) => {
    if(!value) return list;
    value.replace(RE_OPTION, '') |> list.push;
    return list;
  }, []);
  return { note, items, name, value };
};

export default (src) => {
  return dom(src, re, format);
};