import dom from './dom';

const re = /\/{2,3}\s+([^\n\r]+)[\n\r]+(%[\w-]+)/g;

export default (src) => {
  return dom(src, re, ([ , note, name ]) => {
    return { note, name };
  });
};