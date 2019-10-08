(() => { //自动添加列表
  const $box = document.querySelector('.ui-list');
  const $text = $box.querySelector('span');
  const matchs = $text.textContent.match(/\[(?:'\w+'(?:,\s)?)+\]/g);
  if(!matchs) return;
  try{
    const data = [
      '杨白花，风吹渡江水。',
      '坐令宫树无颜色，摇荡春光千万里。',
      '茫茫晓日下长秋，哀歌未断城鸦起。',
    ];
    const list = JSON.parse(matchs[0].replace(/'/g, '"'));
    const $fragment = document.createDocumentFragment();
    list.forEach(name => {
      const $ul = document.createElement('ul');
      data.forEach(text => {
        const $li = document.createElement('li');
        $li.textContent = text;
        $ul.appendChild($li);
      });
      $ul.classList.add(`ui-list-${name}`);
      $fragment.appendChild($ul);
    });
    $box.replaceChild($fragment, $text);
  } catch{}
})();

(() => { //scroll transition
  const $panel = document.getElementById('ScrollTranslate');
  const $thead = $panel.querySelector('thead');
  const transform$thead = value => {
    $thead.style.transform = `translate3d(0, ${value}px, 0)`;
  };
  $panel.addEventListener('scroll', function(e){
    const value = this.scrollTop;
    if(typeof requestAnimationFrame == 'function'){
      requestAnimationFrame(() => transform$thead(value));
    } else{
      transform$thead(value);
    }
  }, false);
})();

(() => { //table transition
  const data = new Array(10).fill(0).map((item, index) => ({
    id: index,
    name: '张三',
    sex: index % 2 ? '男' : '女'
  }));

  document.getElementById('TableTransition').innerHTML = `${
    data.map(item => {
      const tr = ['<tr>'];
      for(let key in item){
        tr.push(`<td>${item[key]}</td>`);
      }
      tr.push('</tr>');
      return tr.join('');
    }).join('')
  }`;
})();

(() => { //content
  const data = new Array(5).fill(0);
  data[1] = new Array(3).fill(0);
  data[1][1] = new Array(2).fill(0);
  data[3] = new Array(3).fill(0);
  data[3][1] = new Array(2).fill(0);
  data[4] = new Array(2).fill(0);

  const createPart = data => {
    const parts = [];
    data.forEach((item, index) => {
      parts.push('<li>');
      parts.push('<span></span>');
      if(item instanceof Array){
        parts.push('<ul>');
        parts.push(createPart(item));
        parts.push('</ul>');
      }
      parts.push('</li>');
    });
    return parts.join('');
  };

  document.getElementById('Counters').innerHTML = createPart(data);
})();

(() => {
  const $i = document.createElement('i');
  const $text = document.createTextNode('JS 插入的内容');
  $i.appendChild($text);
  document.querySelector('.jitter-blur-box').appendChild($i);
})();