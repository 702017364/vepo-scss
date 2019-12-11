import { INDENT, WRAP } from './const';
import layout from './layout';
import { formatNode, formatParams, formatResult, formatExample } from './util';

const formatTitle = (title) => `##### :bicyclist: ${title}`;
const mixin = (list, title, callback) => {
  if(!list.length) return;
  return [
    formatTitle(title),
    list.map((value, index) => `${INDENT}${index + 1}. ${callback(value)}`).join(WRAP),
  ].join(WRAP);
};
const pushUtil = (list, value) => {
  typeof value == 'string'
    && value
    && list.push(value);
};
const format = ({ name, note, option }) => {
  const list = [];
  const push = pushUtil(list, ?);
  `#### :triangular_flag_on_post: \`${name}\`` |> push;
  formatTitle('说明')
    |> formatNode(?, note)
    |> push;
  const { result, example, params } = option;
  if(params.length){
    formatTitle('参数')
      |> formatParams(?, params)
      |> push;
  }
  if(result){
    formatTitle('返回值')
      |> formatResult(?, result)
      |> push;
  }
  mixin(option.throws, '错误', (value) => value) |> push;
  if(example && example.length){
    formatTitle('示例')
      |> formatExample(?, example)
      |> push;
  }
  return list.join(WRAP + WRAP) + WRAP + '[查看目录](#目录)' + WRAP;
};

export default (title, list) => {
  return layout(title, list, format);
};