//Array.prototype.fill
(() => {
  const prototype = Array.prototype;
  typeof prototype.fill == 'function' || (prototype.fill = function(value, start, end){
    for(let i = start || 0, j = end || this.length; i < j; i++){
      this[i] = value;
    }
    return this;
  });
})();

(() => {
  const element1 = document.getElementById('DefineProp');
  const prop = '$-data-value';
  let cache;
  Object.defineProperty(element1, prop, {
    configurable: true,
    enumerable: false,
    get(){
      return cache;
    },
    set(value){
      if(value !== cache){
        console.log(`绑定的值更新为：${value}`);
        cache = value;
      }
    },
  });

  element1[prop] = 5;
  console.log(`最新绑定值为：${element1[prop]}`);

  const element2 = document.getElementById('DefineProps');
  Object.defineProperties(element2, {
    'data-value1': {
      value: 10,
      writable: true,
      enumerable: false,
      configurable: true,
    },
    'data-value2': {
      enumerable: false,
      configurable: true,
      get(){
        return this['data-value1'];
      },
      set(value){
        this['data-value1'] = value;
      },
    },
  });

  console.log(`data-value2初始值：${element2['data-value2']}`);
  element2['data-value2'] = 15;
  console.log(`data-value2更新值：${element2['data-value2']}`);
})();

//设置复选框的不确定状态
(() => {
  document.getElementById('indeterminate').indeterminate = true;
})();

/*
  给定两个非空链表来表示两个非负整数。位数按照逆序方式存储，它们的每个节点只存储单个数字。将两数相加返回一个新链表。

  你可以假设除了数字 0 之外， 这两个数字都不会以零开头。

  示例：

    输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
    输出：7 -> 0 -> 8
    原因：342 + 465 = 807
*/
(() => {
  //链表节点
  function ListNode(val){
    this.val = val;
    this.next = null;
  }
  //打印链表
  ListNode.prototype.toString = function(){
    const values = [];
    let p = this;
    while(p != null){
      values.push(p.val);
      p = p.next;
    }
    return values.join('');
  };

  //求和
  function addTwoNumbers(l1, l2){
    const dummy = new ListNode(0);
    let curr = dummy;
    const notes = [dummy];
    while(l1 != null || l2 != null){
      const x = (l1 != null) ? l1.val : 0;
      const y = (l2 != null) ? l2.val : 0;
      let sum = x + y;
      const p = new ListNode(sum);
      notes.push(p);
      if(sum > 9){
        for(let i = notes.length - 1; i;){
          let note = notes[i];
          if(note.val > 9){
            note.val %= note.val;
            notes[--i].val += 1; 
          } else{
            break;
          } 
        }
      }
      curr.next = p;
      curr = p;
      if(l1 != null) l1 = l1.next;
      if(l2 != null) l2 = l2.next;
    }
    return dummy.val === 0 ? dummy.next : dummy;
  }

  //创建链表
  function createListNodes(vals){
    let curr;
    let start;
    vals.map((value, index) => {
      const node = new ListNode(value);
      index ? (curr.next = node) : (start = node);
      curr = node;
    });
    return start;
  }

  const l1 = createListNodes([5, 3, 5]);
  const l2 = createListNodes([4, 6, 5]);

  console.log(`${l1} + ${l2} = ${addTwoNumbers(l1, l2)}`);

})();

//scroll transition
(() => {
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

//table transition
(() => {
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

//Observer
(() => {
  const map = {
    test: 'test'
  };
  
  Object.defineProperty(map, 'key', {
    value: 'value',
    enumerable: true,
    writable: true,
    configurable: true
  });

  console.log(map.test);
  console.log(map.key);
  map.key = 'abc';
  console.log(map.key);
})();

//content
(() => {
  const data = new Array(7).fill(0);
  data[1] = new Array(4).fill(0);
  data[1][2] = new Array(3).fill(0);
  data[4] = new Array(3).fill(0);
  data[4][1] = new Array(2).fill(0);
  data[5] = new Array(2).fill(0);

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

//animation
(() => {
  let $box;
  document.getElementById('GetAnimation').addEventListener('click', e => {
    if(!$box){
      $box = document.querySelector('.css-animation-button > p');
    }
    const style = getComputedStyle($box, null);
    $box.innerHTML = ['opacity'].map(prop => `${prop}: ${style[prop]}`).join('\n');
  }, false);
})();

//es6 class
(() => {
  class Shape{
    constructor(x){
      /* if(new.target === Shape){
        console.log('Shape 类不能用于实例');
      } else{ */
        this.x = x;
      /* } */
    }
  }

  class Rectangle extends Shape{
    constructor(x, y){
      super(x);
      this.y = y;
    }

    value(){
      console.log(this.x + this.y);
    }
  }

  new Shape(1);
  
  new Rectangle(3, 5).value();



  class ClassTest{
    constructor(x, y){
      this.x = x;
      this.y = y;
    }

    value(){
      console.log(this.x + this.y);
    }
  }

  new ClassTest(1, 3).value();
})();