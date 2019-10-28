### 目录

1. [常量](#常量)

2. [继承](#继承)

3. [混合](#混合)

4. [方法](#方法)

***

### 常量
+ `$g4import-reset` **true** 设置是否导入 reset 样式
+ `$g4major-line` **true** 设置是否开启 line-height 优化处理
+ `$g4cssnext-not` **true** 设置是否开启 :not 多重选择器的降级处理
+ `$g4cssnext-matches` **true** 设置是否开启 :matches 多重选择器的降级处理
+ `$g4cssnext-group` **false** 设置是否启用将多个选择符以逗号分隔的方式并为组
  1. 浏览器在解析 CSS 时遇到不识别的选择符时，会舍弃该组选择符（即使其他选择符是识别的）
  2. 由于第 1 点的原因，所以目前做兼容选择符样式时，都是单独成组
+ `$gviewport-width` **375px** 设置视窗单位（vw、vh、vmin、vmax）的计算基础（默认值为 iPhone 6 尺寸）
+ `$gviewport-vector` **1vmin** 设置视窗向量（相关视窗方法的基础单位）
+ `$gviewport-column` **100** 设置视窗栅格（转换视窗单位时，要将窗口分成的份数）
+ `$gdpr` **1** 设置物理像素和设备像素比值（devicePixelRatio）
+ `$gdpr-table` **2: '@2x', 3: '@3x'** 不同 devicePixelRatio 环境下使用的图片映射
+ `$gvector` **1rem** 设置基础向量
  1. 基础向量决定了方法 f2all 的输出单位
+ `$gbasic-family` **'Microsoft YaHei'** 设置（CSS）基础字体
+ `$gbasic-path` **unquote('assets/')** 设置（CSS）统一资源路径（一般都特指图片资源）
+ `$gbasic-duration` **0.3** 设置（CSS）动画 duration 基本值
+ `$gmatix-table` **radius: (top-left top-right bottom-right bottom-left)** 设置特殊矩阵属性映射表
  1. `$gmatix-table.radius` 注：border-radius
  2. 特殊矩阵指新属性不是由 属性名-方向（如 border-left） 组合得到
+ `$gquick-options` **rem: false** 配置（全局） mixin mquick
  1. `$gquick-options.rem` 注：是否对单位为 rem 的值进行转换
+ `$gbasic-size` **16px** 基础（CSS）字体大小
  1. 该值是很多方法的计算基础值，只能使用 px 单位
+ `$gbasic-line` **null** 基础（CSS）行高
+ `$gsize-h1` **$gbasic-size * 1.375** 标签 h1 的字体大小
+ `$gsize-h2` **$gbasic-size * 1.25** 标签 h2 的字体大小
+ `$gsize-h3` **$gbasic-size * 1.125** 标签 h3 的字体大小
+ `$gsize-h4` **$gbasic-size * 1** 标签 h4 的字体大小
+ `$gsize-h5` **$gbasic-size * .875** 标签 h5 的字体大小
+ `$gsize-h6` **$gbasic-size * .75** 标签 h6 的字体大小
+ `$gsize-body` **$gbasic-size** 标签 body 的字体大小
+ `$gbasic-color` **#333** 基础（CSS）色值
+ `$gcolor-light` **#666** 高亮色值
+ `$gcolor-dark` **#000** 暗色色值
+ `$gcolor-warn` **#ff0** 警告色值
+ `$gcolor-danger` **#ff0** 危险色值
+ `$gcolor-hover` **#189cd8** hover 状态色值
+ `$gcolor-active` **#189cd8** active 状态色值
+ `$gcolor-disabled` **#ccc** disabled 状态色值
+ `$gcolor-placeholder` **#ddd** placeholder 伪类色值
+ `$gbasic-bgcolor` **#eee** 基础（CSS）背景色
+ `$gbasic-icon` **28px** 基础（CSS）图标大小
+ `$gicon-arrow` **8px** 箭头图标大小

### 继承
+ `%eellipsis` 超出隐藏省略号效果（单行）
+ `%eomitted` 超出隐藏省略号效果（多行）
+ `%eappearance` 清除浏览器默认设置
+ `%epseudo-table` 可用于清除浮动造成的影响
+ `%ereset-h` 重置 h1-6 标签样式

### 混合
#### :triangular_flag_on_post: `mfor-style`

##### :bicyclist: 说明
  1. 遍历输出 css 规则和属性
  2. 如果属性为 background-image，会自动调用 furl 方法对值进行处理

##### :bicyclist: 参数
  名称|类型|默认值|描述
  -|:-:|:-:|-
  `$opts`|map||:pushpin: 数据（key：选择器，value：属性值）
  `$prefix`|string|**''**|:pushpin: 添加到 key 之前，拼接成一个新选择器
  `$suffix`|string|**''**|:pushpin: 添加到 key 之后，拼接成一个新选择器
  `$list`|string\|list|**background-position**|:pushpin: 属性列表，string 类型的值还会被自动转换为 list 类型，其和 value 一一对应

##### :bicyclist: 示例
```
@include mfor-style(
  (a: 1, b: 2 (5px 6px), 3 50% .5),
  '> .',
  '-test',
  (line-height, background-position, opacity)
){
  z-index: 1;  
} 
```
<br />

#### :triangular_flag_on_post: `mkeyframes`

##### :bicyclist: 说明
  1. @keyframes简写模式

##### :bicyclist: 参数
  名称|类型|默认值|描述
  -|:-:|:-:|-
  `$name`|string\|number\|list|**''**|:pushpin: 用于设置 @keyframes 名称，空值则随机进行分配（以下情况被视为空值）：<br />:pushpin: 1、空字符串或 null<br />:pushpin: 2、值类型为 number<br />:pushpin: 3、值类型为 list 且第一项类型不为 string 或空字符串或 null

##### :bicyclist: 示例
```
@include mkeyframes(abc){
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
```
<br />

#### :triangular_flag_on_post: `mquick`

##### :bicyclist: 说明
  1. 快速创建一个基于 em 为单位的 CSS Module，仅针对单位为 px/rem 或纯数字的属性

##### :bicyclist: 参数
  名称|类型|默认值|描述
  -|:-:|:-:|-
  `$font-size`|number||:pushpin: 当前环境的字体大小（支持单位 px、rem、无单位）
  `$props`|map||:pushpin: 要进行转换的属性集合
  `$itself`|bool|**true**|:pushpin: 是否要在 mixin 中设置 font-size 属性<br />:pushpin: 值会进行 f2rem 函数转换
  `$option`|map|**$gquick-options**|:pushpin: 配置

##### :bicyclist: 示例
```
@include mquick(
  20px,
  (width: 20px, height: 1rem, z-index: 1),
  true,
  (rem: true)
);
```
<br />

#### :triangular_flag_on_post: `mfast-pos`

##### :bicyclist: 说明
  1. 快捷设置属性（含有 top、right、bottom、left）

##### :bicyclist: 参数
  名称|类型|默认值|描述
  -|:-:|:-:|-
  `$mode`|1\|2\|3\|4\|x\|y\|o\|list|**o**|:pushpin: 方位设置（所有的值都将被转换为 list 类型）<br />:pushpin: 1、2、3、4 分别对应 top、right、bottom、left<br />:pushpin: x：相当于 (2, 4)，为横向属性（right、left）<br />:pushpin: y：相当于 (1, 3)，为纵向属性（top、bottom）<br />:pushpin: o：相当于 (1, 2, 3, 4)，为所有属性
  `$value`|number|**0**|:pushpin: 属性值
  `$prop`|string|**''**|:pushpin: 方位前导值（拼接成一个新属性）
  `$type`|string|**''**|:pushpin: 方位后导值（拼接成一个新属性）

##### :bicyclist: 示例
```
@include mfast-pos(1 4, 0, border, width);
```
<br />

#### :triangular_flag_on_post: `mcenter`

##### :bicyclist: 说明
  1. 设置居中

##### :bicyclist: 参数
  名称|类型|默认值|描述
  -|:-:|:-:|-
  `$mode`|tx\|ty\|to\|px\|py\|po|**to**|:pushpin: 居中方式<br />:pushpin: tx：使用 translateX 设置水平居中<br />:pushpin: ty：使用 translateY 设置垂直居中<br />:pushpin: to：使用 translate 设置水平和垂直居中<br />:pushpin: px：使用 margin 设置水平居中<br />:pushpin: py：使用 margin 设置垂直居中<br />:pushpin: po：使用 margin 设置水平和垂直居中
  `$type`|string|**absolute**|:pushpin: 定位方式

##### :bicyclist: 示例
```
@include mcenter(tx, fixed);
```
<br />

#### :triangular_flag_on_post: `mratio`

##### :bicyclist: 说明
  1. 设置相同的宽高

##### :bicyclist: 参数
  名称|类型|默认值|描述
  -|:-:|:-:|-
  `$value`|number|**$gbasic-icon**|:pushpin: 属性值<br />:pushpin: -1（负数）：仅设置 line-height 为高度属性<br />:pushpin: 0：同时设置 height 和 line-height<br />:pushpin: 1（正数）：仅设置 height 为高度属性
  `$ratio`|number|**1**|:pushpin: 比例值（高度 / 宽度）

##### :bicyclist: 示例
```
@include mratio(5px, 0, 2);
```
<br />

#### :triangular_flag_on_post: `mheight`

##### :bicyclist: 说明
  1. 设置高度和行高（倍数关系）
  2. mixin 有做 line-height 值优化

##### :bicyclist: 参数
  名称|类型|默认值|描述
  -|:-:|:-:|-
  `$value`|number||:thumbsdown:
  `$row`|number\|string|**1**|:pushpin: 行数（height / line-height）<br />:pushpin: string 类型的值为 calc 函数和 CSS var

##### :bicyclist: 示例
```
@include mheight(1em, 2);
```
<br />

#### :triangular_flag_on_post: `mc-mtop`

##### :bicyclist: 说明
  1. 清除 first-child 上边距影响

##### :bicyclist: 示例
```
@include mc-mtop;
```
<br />

#### :triangular_flag_on_post: `mc-float`

##### :bicyclist: 说明
  1. 清除子元素设置浮动对父元素的影响

##### :bicyclist: 示例
```
@include mc-float;
```
<br />

#### :triangular_flag_on_post: `mplaceholder`

##### :bicyclist: 说明
  1. 设置 ::placeholder 样式
  2. 当 $color 为无效的（color 类型）值时，将不设置 color 属性
  3. 设置全局 $g4cssnext-group: true，可以将多个选择符以逗号分隔的方式并为组（这需要浏览器能正确识别不认识的选择器）

##### :bicyclist: 参数
  名称|类型|默认值|描述
  -|:-:|:-:|-
  `$color`|color|**$gcolor-placeholder**|:pushpin: 颜色值

##### :bicyclist: 示例
```
@include mplaceholder(#ccc);
```
<br />

#### :triangular_flag_on_post: `mellipsis`

##### :bicyclist: 说明
  1. 多行超出（省略号效果）

##### :bicyclist: 参数
  名称|类型|默认值|描述
  -|:-:|:-:|-
  `$line`|number|**1**|:pushpin: 行数

##### :bicyclist: 示例
```
@include mellipsis;
@include mellipsis(2);
```
<br />

#### :triangular_flag_on_post: `mappearance`

##### :bicyclist: 说明
  1. 清除浏览器默认设置

##### :bicyclist: 示例
```
@include mappearance;
```
<br />

#### :triangular_flag_on_post: `marrow`

##### :bicyclist: 说明
  1. 制作箭头

##### :bicyclist: 参数
  名称|类型|默认值|描述
  -|:-:|:-:|-
  `$width`|number|**$gicon-arrow**|:pushpin: 箭头所属盒子的大小<br />:pushpin: 纯数字的值将被转换成以 -45deg 起始，90deg 作为一个添加单位的计算值（这是为了保证当值为 1 时，箭头的方向垂直朝上）<br />:pushpin: 
  `$weight`|number|**2px**|:pushpin: 箭头的边框大小
  `$rotate`|number\|string|**45deg**|:pushpin: 箭头的方向（角度）<br />:pushpin: string 类型的值只能为 inherit、initial、CSS 变量<br />:pushpin: 无效值将忽略 transform 属性

##### :bicyclist: 示例
```
@include marrow(1em, 2px, 45deg);
@include marrow(1em, 2px, 2);
@include marrow(1em, 2px, var(--b));
```
<br />

#### :triangular_flag_on_post: `mtriangle`

##### :bicyclist: 说明
  1. 制作三角形（等腰）

##### :bicyclist: 参数
  名称|类型|默认值|描述
  -|:-:|:-:|-
  `$edge`|number\|string||:pushpin: 三角形底边宽<br />:pushpin: string 类型的值为 calc 函数和 CSS var
  `$height`|number\|string|**$edge**|:pushpin: 三角形高度<br />:pushpin: string 类型的值为 calc 函数和 CSS var
  `$mode`|1\|2\|3\|4|**1**|:pushpin: 箭头方向<br />:pushpin: 1：向上箭头<br />:pushpin: 2：向右箭头<br />:pushpin: 3：向下箭头<br />:pushpin: 4：向左箭头

##### :bicyclist: 示例
```
@include mtriangle(2em);
```
<br />

#### :triangular_flag_on_post: `mtriangle-equil`

##### :bicyclist: 说明
  1. 制作三角形（等边）

##### :bicyclist: 参数
  名称|类型|默认值|描述
  -|:-:|:-:|-
  `$edge`|number\|string||:pushpin: 三角形底边宽<br />:pushpin: string 类型的值为 calc 函数和 CSS var
  `$mode`|1\|2\|3\|4|**1**|:pushpin: 箭头方向<br />:pushpin: 1：向上箭头<br />:pushpin: 2：向右箭头<br />:pushpin: 3：向下箭头<br />:pushpin: 4：向左箭头

##### :bicyclist: 示例
```
@include mtriangle-equil(2em);
```
<br />

#### :triangular_flag_on_post: `mnot`

##### :bicyclist: 说明
  1. :not() level 4（多重选择器）
  2. 当全局变量 $g4cssnext-not: true 时，使用降级处理（:not() level 3）

##### :bicyclist: 参数
  名称|类型|默认值|描述
  -|:-:|:-:|-
  `$args`|string<list>||:pushpin: 选择器参数列表

##### :bicyclist: 示例
```
@include mnot(':first-child', ':last-child'){
  z-index: 1;  
}
```
<br />

#### :triangular_flag_on_post: `mmatches`

##### :bicyclist: 说明
  1. :matches 伪类
  2. 当全局变量 $g4cssnext-matches: true 时，使用降级处理

##### :bicyclist: 参数
  名称|类型|默认值|描述
  -|:-:|:-:|-
  `$args`|string<list>||:pushpin: 选择器参数列表

##### :bicyclist: 示例
```
@include mmatches('.abc', '.bcd'){
  z-index: 1;  
}
```
<br />


### 方法
#### :triangular_flag_on_post: `fround`

##### :bicyclist: 说明
  1. 对指定长度后的小数进行四舍五入
  2. 如果 $pow 为负数，则对整数位（从右向左）第 $pow * -1 位 进行四舍五入

##### :bicyclist: 参数
  名称|类型|默认值|描述
  -|:-:|:-:|-
  `$value`|number||:pushpin: 进行运算的值
  `$pow`|number|**0**|:pushpin: 保留小数的长度

##### :bicyclist: 返回值
  类型|描述
  :-:|-
  number|:thumbsdown:

##### :bicyclist: 示例
```
fround(2.733, 2)  //2.73
fround(2.735, 2)  //2.74
fround(2735, -2)  //2700
```
<br />

#### :triangular_flag_on_post: `f2num`

##### :bicyclist: 说明
  1. 返回由字符串数字转换得到的数字

##### :bicyclist: 参数
  名称|类型|默认值|描述
  -|:-:|:-:|-
  `$value`|string||:thumbsdown:
  `$withUnit`|bool|**false**|:pushpin: 是否进行单位转换<br />:pushpin: 如果值为 true 的话，则会启用带单位转换功能

##### :bicyclist: 返回值
  类型|描述
  :-:|-
  number|:thumbsdown:

##### :bicyclist: 错误
  1. $value（具体值）不是一个有效的字符串 number

##### :bicyclist: 示例
```
f2num('123')    //123
f2num('.123')   //0.123
f2num('1.23')   //1.23
f2num('1.23cm', true) //1.23cm
f2num('1.2.3')  //报错：只能有一个小数点
f2num('1.23cm') //报错：$withUnit = false 时不带单位转换功能
f2num('1.23cmc')  //报错：cmc 不是一个有效的单位
```
<br />

#### :triangular_flag_on_post: `freverse`

##### :bicyclist: 说明
  1. 返回一个元素顺序被反转的 list 对象

##### :bicyclist: 参数
  名称|类型|默认值|描述
  -|:-:|:-:|-
  `$list`|list||:thumbsdown:

##### :bicyclist: 示例
```
freverse(1 2 3) //(3 2 1)
```
<br />

#### :triangular_flag_on_post: `fconcat`

##### :bicyclist: 说明
  1. 返回一个新数组，这个新数组是由多数组组合而成
  2. 当不传任何参数时，返回一个空数组
  3. 当参数类型不为 list 时，将会被转换成长度为 1 的数组再进行合并

##### :bicyclist: 参数
  名称|类型|默认值|描述
  -|:-:|:-:|-
  `$args`|object<list>||:pushpin: 进行合并（参数）集合

##### :bicyclist: 返回值
  类型|描述
  :-:|-
  list|:thumbsdown:

##### :bicyclist: 示例
```
fconcat()     //()
fconcat(1px)  //(1px,)
fconcat((1 2), (a, b, c), f, (z x y)) //(1 2 a b c f z x y)
```
<br />

#### :triangular_flag_on_post: `fslice`

##### :bicyclist: 说明
  1. 返回一个数组的一段
  2. 注意该方法的行为与 scss 的 str-slice 不一样，而是与 javascript 的 [].slice 类似

##### :bicyclist: 参数
  名称|类型|默认值|描述
  -|:-:|:-:|-
  `$list`|list||:pushpin: 数组
  `$start`|number||:pushpin: 开始位置（从 0 开始计算的下标）<br />:pushpin: 如果 $start 为负，将它作为 length（数组的长度） + $start 处理
  `$end`|number|**-1**|:pushpin: 结束位置（从 0 开始计算的下标）<br />:pushpin: 如果 $end 为负，将它作为 length（数组的长度） + $end 处理<br />:pushpin: 如果 $start > $end，不复制任何元素到新数组中<br />:pushpin: 复制的元素包含 $end 所指定的元素

##### :bicyclist: 返回值
  类型|描述
  :-:|-
  list|:thumbsdown:

##### :bicyclist: 示例
```
fslice(a b c d, 0, 2)   //(a b c)
fslice(a b c d, 1, -3)  //(b,)
```
<br />

#### :triangular_flag_on_post: `fset-nth`

##### :bicyclist: 说明
  1. 替换列表中的第 n 项
  2. 防止 scss 中的 set-nth 方法被取消而做的一个兼容方法
  3. 方法中对参数做了更强的处理

##### :bicyclist: 参数
  名称|类型|默认值|描述
  -|:-:|:-:|-
  `$list`|list||:thumbsdown:
  `$n`|number||:pushpin: 要替换项的位置
  `$value`|object||:pushpin: 替换值

##### :bicyclist: 返回值
  类型|描述
  :-:|-
  list|:thumbsdown:

##### :bicyclist: 示例
```
fset-nth(1 2 3, 2, a) //1 a 3
```
<br />

#### :triangular_flag_on_post: `f2list`

##### :bicyclist: 说明
  1. 转换为数组

##### :bicyclist: 参数
  名称|类型|默认值|描述
  -|:-:|:-:|-
  `$value`|object||:thumbsdown:
  `$emptycase`|bool|**true**|:pushpin: 空值是否返回空数组

##### :bicyclist: 返回值
  类型|描述
  :-:|-
  list|:thumbsdown:

##### :bicyclist: 示例
```
f2list(1) //(1,)
f2list((1, 2)) //(1, 2)
```
<br />

#### :triangular_flag_on_post: `fget-nth`

##### :bicyclist: 说明
  1. 获取数组第 n 项，如果 n 大于数组长度则返回传入的默认值
  2. 注意该方法跟 fset-nth 并不一样，并不是原生方法 nth 的兼容版

##### :bicyclist: 参数
  名称|类型|默认值|描述
  -|:-:|:-:|-
  `$list`|list||:thumbsdown:
  `$n`|number||:thumbsdown:
  `$default`|object||:pushpin: 指针超出时使用的默认值
<br />

#### :triangular_flag_on_post: `fmatrix`

##### :bicyclist: 说明
  1. 返回查找矩阵属性（有关于 top、right、bottom、left）得到的一个列表

##### :bicyclist: 参数
  名称|类型|默认值|描述
  -|:-:|:-:|-
  `$name`|string|**''**|:pushpin: 索引名称

##### :bicyclist: 返回值
  类型|描述
  :-:|-
  list|:thumbsdown:

##### :bicyclist: 示例
```
fmatrix(raduis) //(top-left top-right bottom-right bottom-left)
```
<br />

#### :triangular_flag_on_post: `finverse-name`

##### :bicyclist: 说明
  1. 返回一个属性（以在矩阵列表中的角标表示）的对立属性（以在矩阵列表中的角标表示）

##### :bicyclist: 参数
  名称|类型|默认值|描述
  -|:-:|:-:|-
  `$mode`|number|**1**|:thumbsdown:
  `$prop`|string|**''**|:thumbsdown:

##### :bicyclist: 返回值
  类型|描述
  :-:|-
  number|:thumbsdown:

##### :bicyclist: 示例
```
finverse-name(1)  //3
```
<br />

#### :triangular_flag_on_post: `finverse-index`

##### :bicyclist: 说明
  1. 返回一个数字在取值范围内的对立数字

##### :bicyclist: 参数
  名称|类型|默认值|描述
  -|:-:|:-:|-
  `$value`|number||:thumbsdown:
  `$range`|number|**4**|:pushpin: 取值范围

##### :bicyclist: 返回值
  类型|描述
  :-:|-
  number|:thumbsdown:

##### :bicyclist: 示例
```
finverse-index(3, 4)  //1
finverse-index(3, 6)  //6
```
<br />

#### :triangular_flag_on_post: `f2all`

##### :bicyclist: 说明
  1. 单位转换（总接口）

##### :bicyclist: 参数
  名称|类型|默认值|描述
  -|:-:|:-:|-
  `$value`|number||:thumbsdown:
  `$basic`|number|**$gbasic-size**|:pushpin: 转换的参数值
  `$dpr`|number|**$gdpr**|:pushpin: dpi 设置

##### :bicyclist: 返回值
  类型|描述
  :-:|-
  number|:thumbsdown:

##### :bicyclist: 示例
```
f2all(32px, 1rem)   //2rem
```
<br />

#### :triangular_flag_on_post: `f2rem`

##### :bicyclist: 说明
  1. 返回一个将 px 单位转换为 rem 的值
  2. 会对 $value 进行 f2px 调用

##### :bicyclist: 参数
  名称|类型|默认值|描述
  -|:-:|:-:|-
  `$value`|number||:thumbsdown:
  `$base`|number|**null**|:pushpin: 无实际意义，只为了方便 function f2all 内部调用而设置

##### :bicyclist: 返回值
  类型|描述
  :-:|-
  number|:thumbsdown:

##### :bicyclist: 示例
```
f2rem(20) //1.25rem
```
<br />

#### :triangular_flag_on_post: `f2viewport`

##### :bicyclist: 说明
  1. 返回一个将 px 单位转换为视窗单位（vw、vh、vmin、vmax）的值
  2. 会对 $value 进行 f2px 调用

##### :bicyclist: 参数
  名称|类型|默认值|描述
  -|:-:|:-:|-
  `$value`|number||:thumbsdown:
  `$vector`|number|**$gviewport-vector**|:pushpin: 设置返回值向量（单位）

##### :bicyclist: 返回值
  类型|描述
  :-:|-
  number|:thumbsdown:

##### :bicyclist: 示例
```
f2viewport(75, 1vmin) //20vmin
f2viewport(75, 1vmax) //20vmax
f2viewport(75, 1vh)   //20vh
f2viewport(75, 1vw)   //20vw
```
<br />

#### :triangular_flag_on_post: `f2px`

##### :bicyclist: 说明
  1. 返回一个（非 0 纯数字）添加了 px 单位的值

##### :bicyclist: 参数
  名称|类型|默认值|描述
  -|:-:|:-:|-
  `$value`|number||:thumbsdown:
  `$base`|object|**null**|:pushpin: 无实际意义，只为了方便 function f2all 内部调用而设置

##### :bicyclist: 返回值
  类型|描述
  :-:|-
  number|:thumbsdown:
<br />

#### :triangular_flag_on_post: `fless`

##### :bicyclist: 说明
  1. 返回一个去除单位后的纯数字

##### :bicyclist: 参数
  名称|类型|默认值|描述
  -|:-:|:-:|-
  `$value`|number||:thumbsdown:

##### :bicyclist: 返回值
  类型|描述
  :-:|-
  number|:thumbsdown:

##### :bicyclist: 示例
```
fless(3px)    //3
fless(2.1%)  //2.1
fless(5)      //5
```
<br />

#### :triangular_flag_on_post: `fvector`

##### :bicyclist: 说明
  1. 返回单位向量

##### :bicyclist: 参数
  名称|类型|默认值|描述
  -|:-:|:-:|-
  `$value`|number||:thumbsdown:

##### :bicyclist: 返回值
  类型|描述
  :-:|-
  number\|null|:thumbsdown:

##### :bicyclist: 示例
```
fvector(3px)    //1px
fvector(2.1vw)  //1vw
```
<br />

#### :triangular_flag_on_post: `furl`

##### :bicyclist: 说明
  1. 增强原生 CSS 方法 url（可全局设置统一路径）

##### :bicyclist: 参数
  名称|类型|默认值|描述
  -|:-:|:-:|-
  `$value`|string||:pushpin: 图片名称
  `$dpr`|number|**$gdpr**|:pushpin: 设置 dpi

##### :bicyclist: 返回值
  类型|描述
  :-:|-
  string|:thumbsdown:

##### :bicyclist: 示例
```
furl('abc.png')     //url(images/abc.png)
furl('abc.png', 2)  //url(images/abc@2x.png)
```
<br />

#### :triangular_flag_on_post: `fcompose`

##### :bicyclist: 说明
  1. 返回一个由多个属性拼接成的一个新属性

##### :bicyclist: 参数
  名称|类型|默认值|描述
  -|:-:|:-:|-
  `$attr`|string||:pushpin: 初始属性
  `$prev`|string|**''**|:pushpin: 属性前置值<br />:pushpin: 空值则不处理<br />:pushpin: 不为空值则使用 '-' 拼接到初始属性之前成为一个新属性
  `$next`|string|**''**|:pushpin: 属性后置值<br />:pushpin: 空值则不处理<br />:pushpin: 不为空值则使用 '-' 拼接到初始属性之后成为一个新属性

##### :bicyclist: 返回值
  类型|描述
  :-:|-
  string|:thumbsdown:

##### :bicyclist: 示例
```
fcompose(top, border)         //border-top
fcompose(top, border, width)  //border-top-width
```
<br />

#### :triangular_flag_on_post: `fline`

##### :bicyclist: 说明
  1. 返回一个优化过的 line-height 值，从而避免转换后造成的误差（在进行单位转换的过程中，部分值会在转换过程中造成精度损失，而由于部分浏览器针对 line-height 使用的是去尾处理，结果就是造成实际应用值比我们预期设置的值少 1px）
  2. 该方法主要测试浏览器为 Google Chrome（73.0.3683.86）
  3. 需要设置全局变量 $g4major-line: true （允许进行优化）
  4. 由于百分比值在各个浏览器中计算方式存在更大差异，所以尽量避免发生百分比值优化

##### :bicyclist: 参数
  名称|类型|默认值|描述
  -|:-:|:-:|-
  `$value`|number||:pushpin: 当前需要优化值
  `$basic`|number|**$gbasic-size**|:pushpin: 当前值的相对字号<br />:pushpin: 单位为 rem 的话，则值为跟元素的字号（注意：此时设置值将不产生作用）<br />:pushpin: 单位为 em、%、空，则值为当前元素的字号

##### :bicyclist: 返回值
  类型|描述
  :-:|-
  number|:thumbsdown:

##### :bicyclist: 示例
```
fline(18 / 17, 17px)    //1.05883
fline(18em / 17, 17px)  //1.05883em
fline(percentage(18 / 17), 17px)  //106%
```
<br />

#### :triangular_flag_on_post: `f4empty`

##### :bicyclist: 说明
  1. 检测是否为空值

##### :bicyclist: 参数
  名称|类型|默认值|描述
  -|:-:|:-:|-
  `$value`|object||:thumbsdown:

##### :bicyclist: 返回值
  类型|描述
  :-:|-
  bool|:thumbsdown:

##### :bicyclist: 示例
```
f4empty(0)      //false
f4empty(false)  //false
f4empty(null)   //true
f4empty('')     //true
```
<br />

#### :triangular_flag_on_post: `f4px`

##### :bicyclist: 说明
  1. 检测单位是否为 px

##### :bicyclist: 参数
  名称|类型|默认值|描述
  -|:-:|:-:|-
  `$value`|object||:thumbsdown:

##### :bicyclist: 返回值
  类型|描述
  :-:|-
  bool|:thumbsdown:

##### :bicyclist: 示例
```
f4px(4)     //false
f4px('4px') //false
f4px(4px)   //true
```
<br />

#### :triangular_flag_on_post: `f4var`

##### :bicyclist: 说明
  1. 检测值是否符合 CSS 变量格式

##### :bicyclist: 参数
  名称|类型|默认值|描述
  -|:-:|:-:|-
  `$value`|string||:thumbsdown:

##### :bicyclist: 返回值
  类型|描述
  :-:|-
  bool|:thumbsdown:

##### :bicyclist: 示例
```
f4var(var(--a)) //true
f4var(a)        //false
```
<br />

#### :triangular_flag_on_post: `f4native`

##### :bicyclist: 说明
  1. 返回检测值是否满足 CSS 原生函数的格式（提供非空 $name 值时，则同时检测是否为该值所指的函数）

##### :bicyclist: 参数
  名称|类型|默认值|描述
  -|:-:|:-:|-
  `$value`|string||:thumbsdown:
  `$name`|string|**''**|:pushpin: 检测值要符合的函数名
  `$meet`|number|**1**|:pushpin: 指定函数实参最少要满足的长度

##### :bicyclist: 返回值
  类型|描述
  :-:|-
  bool|:thumbsdown:

##### :bicyclist: 示例
```
f4native(url())       //false
f4native(url(1))      //true
f4native(url(1), src) //false
f4native(url(1), url) //true
f4native(url(), $meet: 0) //true
```
<br />

#### :triangular_flag_on_post: `fsplit`

##### :bicyclist: 说明
  1. 将一个字符串分割为子字符串（如果是数组类型，则会依次对每一项进行分割），然后将结果作为字符串数组返回

##### :bicyclist: 参数
  名称|类型|默认值|描述
  -|:-:|:-:|-
  `$value`|string\|list<string>||:pushpin: 被分割字符串或字符串数组
  `$separators`|string<list>||:pushpin: 分隔符（参数）集合<br />:pushpin: 如果分隔符的类型不为 list，将会被强制转换成字符串

##### :bicyclist: 返回值
  类型|描述
  :-:|-
  list|:thumbsdown:

##### :bicyclist: 示例
```
fsplit(a1b2c3e) //(a1b2c3e,)
fsplit(a1b2c3e, 1, 2, 3)  //(a b c e)
fsplit(a1b2c d2e3f, 1, 2, 3)  //(a b c d e f)
```
<br />

#### :triangular_flag_on_post: `fspace`

##### :bicyclist: 说明
  1. 返回一个空格的 Unicode 表示形式

##### :bicyclist: 参数
  名称|类型|默认值|描述
  -|:-:|:-:|-
  `$value`|string\|number||:pushpin: 字符映射关系<br />:pushpin: nbsp（或 1 或任意无效值） 对应 &nbsp;<br />:pushpin: ensp（或 2） 对应 &ensp;（相对于 1/2 个中文宽度）<br />:pushpin: emsp（或 3） 对应 &ensp;（相对于 1 个中文宽度）<br />:pushpin: thinsp（或 4） 对应 &thinsp;（最小空格）

##### :bicyclist: 示例
```
fspace(1)   //'\0020'
```
<br />

#### :triangular_flag_on_post: `fadjust`

##### :bicyclist: 说明
  1. 统一调整所有的项

##### :bicyclist: 参数
  名称|类型|默认值|描述
  -|:-:|:-:|-
  `$data`|map\|list||:thumbsdown:
  `$before`|string|**''**|:pushpin: 添加到数据之前（$before + $content 模式）<br />:pushpin: 如果 $before 为非 string 类型，将会被强制转换成字符串
  `$after`|string|**''**|:pushpin: 添加到数据之后（$after + $content 模式）<br />:pushpin: 如果 $after 为非 string 类型，将会被强制转换成字符串

##### :bicyclist: 返回值
  类型|描述
  :-:|-
  map|:thumbsdown:

##### :bicyclist: 错误
  1. $data 必须为 map 或 list 类型

##### :bicyclist: 示例
```
fadjust((key1: abc, key2: 123), i-, '.png') //(key1: i-abc.png, key2: i-123.png)
fadjust(abc 123), i-, '.png') //(abc: i-abc.png, 123: i-123.png)
```
<br />

#### :triangular_flag_on_post: `fcreate`

##### :bicyclist: 说明
  1. 返回一个空的 map

##### :bicyclist: 示例
```
fcreate() //()
```
<br />

#### :triangular_flag_on_post: `f4rational`

##### :bicyclist: 说明
  1. 返回两数运算结果是否为有理数（值是否可以除尽）
  2. 在 sass 中由于小数取值长度的问题，有理数的定义为小数5位数，超过则为无理数

##### :bicyclist: 参数
  名称|类型|默认值|描述
  -|:-:|:-:|-
  `$first`|number||:thumbsdown:
  `$second`|number||:pushpin: 0：表示两数进行除法运算<br />:pushpin: 1：表示两数进行乘法运算

##### :bicyclist: 返回值
  类型|描述
  :-:|-
  bool|:thumbsdown:

##### :bicyclist: 示例
```
f4rational(5, 2)  //true
f4rational(5, 3)  //false
f4rational(5, 1 / 2, 1) //true
f4rational(5, 1 / 3, 1) //false
f4rational(0.001, 0.001, 1) //false
```
<br />

#### :triangular_flag_on_post: `f4rational-reciprocal`

##### :bicyclist: 说明
  1. 返回一个数的倒数是否为有理数
  2. 在 sass 中由于小数取值长度的问题，有理数的定义为小数5位数，超过则为无理数

##### :bicyclist: 参数
  名称|类型|默认值|描述
  -|:-:|:-:|-
  `$num`|number||:thumbsdown:

##### :bicyclist: 返回值
  类型|描述
  :-:|-
  bool|:thumbsdown:

##### :bicyclist: 示例
```
f4rational(2) //true
f4rational(3) //false
```
<br />

#### :triangular_flag_on_post: `fcalc`

##### :bicyclist: 说明
  1. 对原生函数 calc 添加计算功能

##### :bicyclist: 参数
  名称|类型|默认值|描述
  -|:-:|:-:|-
  `$list`|number\|string\|list\|map<list>||:thumbsdown:

##### :bicyclist: 返回值
  类型|描述
  :-:|-
  number\|string|:thumbsdown:

##### :bicyclist: 错误
  1. 类型错误
  2. 不是有效的 calc 表达式
  3. 未找到结束标记

##### :bicyclist: 示例
```
fcalc((exp: 5px, multiple: var(-b)))  //calc(5px / var(-b))
```
<br />

#### :triangular_flag_on_post: `fcalc-list`

##### :bicyclist: 说明
  1. fcalc 列表模式

##### :bicyclist: 参数
  名称|类型|默认值|描述
  -|:-:|:-:|-
  `$list`|list||:pushpin: 非list类型值将会被强制转换成长度为1的list类型
  `$multiples`|list|**()**|:pushpin: 空类型的值会被转换为一个空数组<br />:pushpin: 非空且非list类型值会被强制转换成长度为1的list类型<br />:pushpin: 如果对应的 mode 或 multiple 不存在，则使用全局默认值
  `$modes`|list|**()**|:pushpin: 同参数 $multiples

##### :bicyclist: 示例
```
fcalc-list(
  (100% 5px --b calc(50vw - 2rem)),
  (1 -1 2 5),
  (1 1 0 0)
) //calc(100% - 5px + 10vw - 0.4rem + var(--b) / 2)
```
<br />

#### :triangular_flag_on_post: `fcalc-option`

##### :bicyclist: 说明
  1. fcalc 配置模式

##### :bicyclist: 参数
  名称|类型|默认值|描述
  -|:-:|:-:|-
  `$list`|list||:pushpin: 非list类型值将会被强制转换成长度为1的list类型
  `$option`|list|**()**|:pushpin: 空类型的值会被转换为一个空数组<br />:pushpin: 非空且非list类型值会被强制转换成长度为1的list类型<br />:pushpin: 数组奇数位为 mode，偶数为为 multiple<br />:pushpin: 如果对应的 mode 或 multiple 不存在，则使用全局默认值

##### :bicyclist: 示例
```
fcalc-option(
  (100% 5px --b calc(50vw - 2rem)),
  (1 1 1 -1 0 2 0 5)
) //calc(100% - 5px + 10vw - 0.4rem + var(--b) / 2)
```
<br />

#### :triangular_flag_on_post: `fcalc-single`

##### :bicyclist: 说明
  1. fcalc 单例模式

##### :bicyclist: 参数
  名称|类型|默认值|描述
  -|:-:|:-:|-
  `$value`|number\|string\|list\|map||:thumbsdown:
  `$multiple`|number\|string|**$gcalc-default-multiple**|:pushpin: 除数（或乘数）
  `$mode`|0\|1|**$gcalc-default-mode**|:pushpin: 表示进行除法（或乘法）运算

##### :bicyclist: 示例
```
fcalc-single(5px 6%, 2) //calc(2.5px + 3%)
```
<br />


***

[回到顶部](#readme)