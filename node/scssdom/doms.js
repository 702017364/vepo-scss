import { dirname, join } from 'path';
import dom from './dom';

const doms = (src, re, callback) => {
  const dir = dirname(src);
  return dom(src, re, (value) => {
    const [ , meta ] = value;
    if(meta){
      if(meta.slice(0, 12) == 'node_modules') return [];
      const index = re.lastIndex;
      re.lastIndex = 0;
      const src = join(dir, meta);
      const list = doms(src, re, callback);
      re.lastIndex = index;
      return list;
    } else{
      return value.slice(2) |> callback;
    }
  });
};

export default doms;