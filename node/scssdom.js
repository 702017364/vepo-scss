import fs from 'fs';
import { join, basename, dirname } from 'path';

const RE_SPECIAL = /[\|]+/g;
const RE_WRAP = /[\n\r]+/g;
const RE_LIST = /^\s*\d+(?:\u3001|\s)\s*/g;
const RE_FILE = /\.\w+$/;
const RE_SPACE = /^(\s{3,})/;
const RE_START = /^\/{2,3}\s+@([a-zA-Z]+)\s*/;
const RE_PARAM = /\{([\w\|\<\>]+)\}\s+(\$[\w-]+)\s+(?:\[([\w\W]+?)\]\s+)?([\w\W]*)/;
const RE_RETURN = /\{([\w\|\<\>]+)\}\s+([\w\W]*)/;
const RE_THROM = /@throw\s+([^\n\r]*)/;
const RE_EXAMPLE = /\/{3}/g;
const RE_OPTION = /^\/{3}\s+(?:-\s+)?/g;
const RE_VAR = /\/{3}\s+([^\n\r]+)[\n\r]+((?:\/{2,3}\s+-\s+(?:\d+、)?[^\n\r]+[\n\r]+)*)(\$[\w-]+):\s+([^;]+)\s+!default;/g;
const RE_EXTEND = /\/{2,3}\s+([^\n\r]+)[\n\r]+(%[\w-]+)/g;
const RE_MIXIN = /(?:@import\s+['"]([^'"]+)['"];)|(?:\/{3}\s+([^\n\r]+)[\n\r]+(?:\/{3}\s+@access\s+(private)[\n\r]+)?([\w\W]*?)@(?:mixin|function)\s+([\w-]+))/g;

const basic = join(__dirname, '../style/public');

const WRAP = '\r\n';
const INDENT = '\u0020\u0020';

const util = {
  format: (value) => {
    return value.replace(RE_SPECIAL, ($0) => `\\${$0}`);
  },
  md: (value, children) => {
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
  },
  param: ({ type, name, def, md, items }) => {
    const list = [
      `${INDENT}\`${name}\``,
      util.format(type),
    ];
    list.push(def ? `**${def}**` : '');
    util.md(md, items) |> list.push;
    return list.join('|');
  },
  params: (title, params) => {
    const list = [
      title,
      `${INDENT}名称|类型|默认值|描述`,
      `${INDENT}-|:-:|:-:|-`,
    ];
    params.map(util.param).join(WRAP) |> list.push;
    return list.join(WRAP);
  },
  example: (title, example) => {
    const list = [
      title,
    ];
    const [, spaces] = example[0].match(RE_SPACE) || [];
    const re = spaces ? new RegExp(`^\\s{${spaces.length}}`, 'g') : '';
    list.push('```');
    example.map((value) => {
      value = re ? value.replace(re, '') : value;
      return value;
    }).join(WRAP) |> list.push;
    list.push('```');
    return list.join(WRAP);
  },
  result: (title, { type, md }) => {
    return [
      title,
      `${INDENT}类型|描述`,
      `${INDENT}:-:|-`,
      `${INDENT}${util.format(type)}|${util.md(md)}`,
    ].join(WRAP);
  },
  note: (title, { label, list }) => {
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
  },
  catalog(data){
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
  },
};

class ScssDom{
  constructor(){
    this.var2list = join(basic, 'var') |> this.#var2dom;
    this.extend2list = join(basic, 'extend') |> this.#extend2dom;
    this.mixin2list = join(basic, 'mixins') |> this.#mixin2dom;
    this.method2list = join(basic, 'functions') |> this.#method2dom;
  }

  #title(value){
    return `### ${value}`;
  }

  #layout(title, value, callback){
    const list = [];
    this.#title(title) |> list.push;
    value.map(callback).join(WRAP) |> list.push;
    return list.join(WRAP);
  }

  #var2layout(title, list){
    return this.#layout(title, list, ({ name, value, note, items }, index) => {
      const list = [];
      if(!index){
        list.push(`名称|默认值|说明`);
        list.push(`-|-|-`);
      }
      const [cache, rows] = ScssDom.extractLineComment(name, value);
      const explan = [note].concat(items || [], rows).map((value) => {
        value = value.replace(RE_LIST, '');
        return `:pushpin: ${value}`;
      }).join('<br />') || ':thumbsdown:';
      value = ScssDom.formatValue(cache);
      `\`${name}\`|**${value}**|${explan}` |> list.push;
      return list.map((value) => `${INDENT}${value}`).join(WRAP);
    });
  }

  #extend2layout(title, list){
    return this.#layout(title, list, ({ name, note }, index) => {
      const list = [];
      if(!index){
        list.push(`名称|说明`);
        list.push(`-|-`);
      }
      `\`${name}\`|${note || ':thumbsdown:'}` |> list.push;
      return list.map((value) => `${INDENT}${value}`).join(WRAP);
    });
  }

  #mixin2layout(title, list){
    const mixinTitle = (title) => `##### :bicyclist: ${title}`;
    const mixin = (list, title, callback) => {
      if(!list.length) return;
      return [
        mixinTitle(title),
        list.map((value, index) => `${INDENT}${index + 1}. ${callback(value)}`).join(WRAP),
      ].join(WRAP);
    };
    return this.#layout(title, list, ({ name, note, option }) => {
      const list = [];
      const push = (value) => 
        typeof value == 'string'
          && value
          && list.push(value);
      `#### :triangular_flag_on_post: \`${name}\`` |> push;
      mixinTitle('说明') |> util.note(?, note) |> push;
      const { result, example, params } = option;
      if(params.length){
        mixinTitle('参数') |> util.params(?, params) |> push;
      }
      if(result){
        mixinTitle('返回值') |> util.result(?, result) |> push;
      }
      mixin(option.throws, '错误', (value) => value) |> push;
      if(example && example.length){
        mixinTitle('示例') |> util.example(?, example) |> push;
      }
      return list.join(WRAP + WRAP) + WRAP + '<br />' + WRAP;
    });
  }

  markdown(){
    const data = [
      { label: '常量', data: this.var2list, method: this.#var2layout },
      { label: '继承', data: this.extend2list, method: this.#extend2layout },
      { label: '混合', data: this.mixin2list, method: this.#mixin2layout },
      { label: '方法', data: this.method2list, method: this.#mixin2layout },
    ];
    const list = ['### 目录'];
    data.forEach(({ label, data }, index) => {
      list.push(`${index + 1}. [${label}](#${label})`);
      const first = data[0];
      if(!first || !first.option) return;
      util.catalog(data) |> list.push;
    });
    list.push('***');
    data.forEach(({ label, data, method }) => {
      method.call(this, label, data) |> list.push;
    });
    list.push('***');
    list.push('[回到顶部](#readme)');
    list.join(WRAP + WRAP) |> fs.writeFileSync('node/API.md', ?);
  }

  static RE_ROW = /\s*(\S+?):[\w\W]+?(\s*\/{2}([^\n\r]+))/g;

  static extractLineComment(name, value){
    const list = [];
    value = value.replace(ScssDom.RE_ROW, ($0, $1, $2, $3) => {
      if(!$2) return $0;
      $3 && list.push(`\`${name}.${$1}\` ${$3}`);
      return $0.replace($2, '');
    });
    return [value, list];
  }

  #dom(src, re, callback){
    let name = basename(src);
    name.slice(0, 1) == '_' || (name = `_${name}`);
    RE_FILE.test(name) || (name = `${name}.scss`);
    const data = dirname(src) |> join(?, name) |> fs.readFileSync(?, 'utf-8');
    const list = [];
    let execs;
    while((execs = re.exec(data)) != null){
      let value = callback(execs);
      Array.isArray(value) || (value = [value]);
      list.push(...value);
    }
    return list;
  }

  #doms(src, re, callback){
    const dir = dirname(src);
    return this.#dom(src, re, (value) => {
      const [, meta] = value;
      if(meta){
        if(meta.slice(0, 12) == 'node_modules') return [];
        const index = re.lastIndex;
        re.lastIndex = 0;
        const src = join(dir, meta);
        const list = this.#doms(src, re, callback);
        re.lastIndex = index;
        return list;
      } else{
        return value.slice(2) |> callback;
      }
    });
  }

  #var2dom(src){
    return this.#dom(src, RE_VAR, ([, note, rk, name, value]) => {
      const items = rk && rk.split(RE_WRAP).reduce((list, value) => {
        if(!value) return list;
        value.replace(RE_OPTION, '') |> list.push;
        return list;
      }, []);
      return { note, items, name, value };
    });
  }

  #extend2dom(src){
    return this.#dom(src, RE_EXTEND, ([, note, name]) => {
      return { note, name };
    });
  }

  #mixin2dom(src){
    return this.#doms(src, RE_MIXIN, ([note, access, rk, name]) => {
      if(access) return [];
      note = { label: note, list: [] };
      let cache = '';
      const option = rk && rk.split(RE_WRAP).reduce((map, value) => {
        if(!value) return map;
        const [, symbol] = RE_START.exec(value) || [];
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
    });
  }

  #method2dom(src){
    return this.#mixin2dom(src);
  }

  static RE_FORMAT = do{
    const RE_WRAP = /\s{2,}/g;
    new Map([
      [/^(\.\d+)([a-z]*)/i, ($1, $2) => `0${$1}${$2}`],
      [/^unquote\(([^\)]*)\)/, (value) => value],
      [/^\(\s*([\w\W]+?),?\s*\)$/, (value) => {
        const list = ['('];
        value.replace(RE_WRAP, '\u0020')
          .split(',')
          .map((value) => '&emsp;' + value.trim())
          .join(`,<br />`) |> list.push;
        list.push(')');
        return list.join('<br />');
      }],
    ])
  };

  static formatValue(value){
    for(let [re, callback] of ScssDom.RE_FORMAT){
      if(typeof callback != 'function') continue;
      const matchs = value.match(re);
      if(!matchs) continue;
      const list = matchs.slice(1);
      value = callback(...list);
      break;
    }
    return value;
  }
}

new ScssDom().markdown();