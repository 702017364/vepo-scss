const re = /\s*(\S+?):[\w\W]+?(\s*\/{2}([^\n\r]+))/g;

export default (name, value) => {
  const list = [];
  value = value.replace(re, ($0, $1, $2, $3) => {
    if(!$2) return $0;
    $3 && list.push(`\`${name}.${$1}\` ${$3}`);
    return $0.replace($2, '');
  });
  return [value, list];
};