import formatTitle from './title';
import { WRAP } from './const';

export default (title, value, callback) => {
  const list = [];
  formatTitle(title) |> list.push;
  value.map(callback).join(WRAP) |> list.push;
  return list.join(WRAP);
};