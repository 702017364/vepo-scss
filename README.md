#@vope/scss

## npm 命令
```bash

# 运行开发环境
npm run gulp
# 发布（无 map 文件）
npm run gulp:build
# 测试（将 scss 文件的入口更改为 test.scss）
npm run gulp:test
# 运行开发环境
npm run gulp:client
# 运行发布环境（会生成 map 文件）
npm run gulp:server
# 运行测试开发环境
npm run gulp:mocha
# 运行测试
npm run test

```

## API

### function.array
- uf-reverse
  ```bash
  # 将数据的元素顺序进行反转
  # @param  $list               [List]   -- 要反转的数组
  # @return                     [List]
  ```

- uf-is-list
  ```bash
  # 检测类型是否为 list
  # @param  $value              [Object]
  # @return                     [Boolean]
  ```

- uf-concat
  ```bash
  # 返回两个数组的组合数组
  # @param  $args...            [List]
  # @return                     [List]
  ```

### function.number
- uf-is-number
  ```bash
  # 检测类型是否为 number
  # @param  $value              [Object]
  # @return                     [Boolean]
  ```

- uf-is-rational__division
  ```bash
  # 检测除法运算结果是否为有理数（该有理数的定义为是否在 sass 的取值范围）
  # @param  $a                  [Number]  -- 被除数
  # @param  $b                  [Number]  -- 除数
  # @return                     [Boolean]
  ```

- uf-is-rational__multiplication
  ```bash
  # 检测乘法运算结果是否为有理数（该有理数的定义为是否在 sass 的取值范围）
  # @param  $a                  [Number]  -- 被乘数
  # @param  $b                  [Number]  -- 乘数
  # @return                     [Boolean]
  ```

- uf-is-rational__number
  ```bash
  # 检测其倒数是否为有理数（该有理数的定义为是否在 sass 的取值范围）
  # @param  $a                  [Number]  -- 要求倒的数
  # @return                     [Boolean]
  ```

### function.boolean
- uf-is-empty
  ```bash
  # 判断值是否为空
  # @param  $value              [Object]  -- 要判断的值
  # @return                     [Boolean]
  ```

- uf-is-px
  ```bash
  # 判断单位是否是 px
  # @param  $value              [Number]  -- 要判断的值
  # @return                     [Boolean]
  ```

- uf-is-boolean
  ```bash
  # 检测类型是否为 Boolean
  # @param  $value              [Object]
  # @retuen                     [Boolean]
  ```
  
### function.math
- uf-round
  ```bash
  # 四舍五入指定小数位数的数字（如果输入负值，则对整数部分进行相应长度做四舍五入）
  # @param  $value              [Number]  -- 需要处理的值
  # @param  $pow        {0}     [Number]  -- 位数
  # @return                     [Number]
  ```

- uf-to-num
  ```bash
  # 将 String 型数字转成 Number
  # @param  $str                [String]  -- 字符型数字
  # @return                     [Number]
  ```

- uf-to-num__unit
  ```bash
  # 将 String 型数字（可带单位）转成 Number（带单位）
  # @param  $str                [String]  -- 字符型数字（可带单位，如果不带单位或不是有效的单位，将自动变成单位 px）
  # @return                     [Number]
  ```

### function.operat
- uf-dir
  ```bash
  # 获取全局 $u-quartet-table 中的属性值
  # @param  $prop       {''}    [String]  -- 属性名（默认或者无效属性都会返回 $u-quartet）
  # @return                     [List]
  ```

- uf-negate__prop
  ```bash
  # 属性取反（在获取到的数组中，取得传入模式的反模式对应的角标值）
  # @param  $mode       {1}     [Number]  -- 要取反的模式（角标）
  # @param  $prop       {''}    [String]  -- 属性名（默认或者无效属性都会返回 $u-quartet）
  # @return                     [String]
  ```

- uf-negate
  ```bash
  # 对传入的模式（值）进行取反
  # @param  $mode               [Number]  -- 要取反的模式（值）
  # @param  $range              [Number]  -- 取反模式的范围
  # @return                     [Number]
  ```

- uf-uuid
  ```bash
  # 产生一个 uuid
  # @param  $space      {'A'}   [String]  -- uuid 的前缀（添加前缀是因为很多场合不能以数字开头）
  # @return                     [String]
  ```

### function.string
- uf-string-split
  ```bash
  # 字符串分割（对 $separator 进行处理）
  # @param  $string             [String]  -- 要分割的字符串
  # @param  $separator          [String]  -- 分隔符
  # @return                     [List]
  ```
  
- uf-string-split__for
  ```bash
  # 字符串分割（将分割的字符串加入数组中）
  # @param  $list               [List]   -- 数组
  # @param  $string             [String]  -- 要分割的字符串
  # @param  $separator          [String]  -- 分隔符
  # @return                     [List]
  ```

- uf-is-string
  ```bash
  # 检测类型是否为 string
  # @param  $value              [Object]
  # @return                     [Boolean]
  ```

### function.style
- bgurl
  ```bash
  # background-image 值的简写模式
  # @param  $name       {$u-image-sprite}           [String]  -- 图片路径
  # @param  $dpr        {$u-view-dpr}        [Number]  -- dpr
  # @return                     [String]
  ```

- uf-compose
  ```bash
  # 属性拼接
  # @param  $far                [String]  -- 要被拼接的属性
  # @param  $prev       {''}    [String]  -- 拼接属性的前缀
  # @param  $next       {''}    [String]  -- 拼接属性的后缀
  # @return                     [String]
  ```

- of-line
  ```bash
  # 通过该方法对单位为 rem 的 line-height 进行优化（由于计算问题 + 浏览器对 line-height 使用去尾处理，造成部分 line-height 会比实际想要的值少 1px）（备注：其实最好的方法应该是避免使用如 14、15、17 这种会造成计算不尽的值作为根元素的 font-size）
  # @param  $value              [Number]  -- 需要优化的 line-height
  # @return                     [String]
  ```

### function.vector
- uf-to-all
  ```bash
  # 单位转换（总接口）
  # @param  $value              [Number]  -- 要进行单位转换值
  # @param  $base       {$u-fontSize-root}             [Number]  -- 转换单位时进行计算的基数
  # @param  $dpr        {$u-view-dpr}        [Number]  -- dpr
  # @return                     [Number, String]
  ```
  
- all
  ```bash
  # uf-to-all 方法的简写模式
  # @return                     [Number, String]
  ```

- uf-to-rem
  ```bash
  # px 转换成 rem
  # @param  $value              [Number]  -- 要进行单位转换值
  # @param  $base       {$u-fontSize-root}             [Number]  -- 转换单位时进行计算的基数
  # @return                     [Number]
  ```

- uf-to-vmin
  ```bash
  # px 转换成 vmin
  # @param  $value              [Number]  -- 要进行单位转换值
  # @param  $base       {$u-view-vector}      [Number]    -- 设置取值向量（单位）
  # @return                     [Number]
  ```

- uf-to-px
  ```bash
  # 将纯数值转换成 px
  # @param  $value              [Number]  -- 要进行单位转换值
  # @param  $base       {null}            -- 无效值（只是为了做响应 uf-to-all ）
  # @return                     [Number]
  ```

- uf-font-size
  ```bash
  # 对 font-size 引用单位转换
  # @param  $value              [Number]  -- 要进行单位转换值
  # @return                     [Number]
  ```

- uf-less
  ```bash
  # 去除单位（变成纯数值）
  # @param  $value              [Number]  -- 要去除单位的值
  # @return                     [Number]
  ```

- uf-vector
  ```bash
  # 获取参数对应的单位向量
  # @param  $value              [Number]  -- 要获取单位向量的值
  # @return                     [Number]
  ```

### function.map
- uf-icons
  ```bash
  # 简化创建 list 或 map 时的重复书写
  # @param  $map                [List, Map]   -- 简写的数据
  # @param  $before             [String]  -- 分项前面插入的值
  # @param  $after              [String]  -- 分项后面插入的值
  # @return                     [Map]
  ```

### function.calc
- uf-calc-single
  ```bash
  # calc 单例表达式运算
  # @param  $args               [Number, List]  -- 要运算的参数（列表）
  # @param  $product    {1}     [Number]  -- 表示运算使用的倍数
  # @param  $reply      {0}     [Number]  -- 表示运算使用的方式（1：乘法，2：除法）
  # @param  $analysis   {false} [Boolean] -- 是否强制分解运算
  # @return                     [Number, String]
  ```

- uf-calc
  ```bash
  # calc 多表达式运算（每个表达式就是一个独立的 uf-calc-single 集合，并且进行了加强，支持 String 类型的 calc 表达式，支持运算表达式中包含 var）
  # 1、每个表达式就是一个独立的 uf-calc-single 集合
  # 2、添加了 String 类型的 calc 表达式支持（在该情况下不支持传递其他参数）
  # 3、添加了表达式中包含 var 的运算
  # 4、分表达式设置的参数 $analysis 可能无效
  ```

### mixin.class
- um-fast__dir
  ```bash
  # 简写样式，只对包含方向（top、right、bottom、left）的样式起作用
  # @param  $mode       {'o'}   [String]  -- 方向（'x' 代表 x 轴方向，'y' 代表 y 轴方向，'o' 代表所有方向）
  # @param  $value      {0}     [Number]  -- 要设置样式的值
  # @param  $prop       {''}    [String]  -- 拼接时的前缀
  # @param  $type       {''}    [String]  -- 拼接时的后缀
  ```

- um-v
  ```bash
  # 快速书写带有居中特性的定位
  # @param  $mode       {'to'}  [String]  -- 使用何种方式进行居中定位（p 开头代表只使用定位居中，t 开头代表使用定位和位移进行混合居中，第二个字母含义可参照 mixin.um-fast__dir => $mode）
  # @param  $p          {1}     [String]  -- position 的值（对应 $r-pos）
  ```

- um-ratio
  ```bash
  # 创建一个 width、height 相同的元素
  # @param  $value      {$u-icon}             [Number]  -- width、height 的值
  # @param  $mode       {1}     [Number]  -- 如何使用 height 的模式（-1 代表用 line-height 代替 height，0 代表对 line-height、height 都设置值，1 代表只设置 height）
  ```

- um-height
  ```bash
  # 对 height、line-heigth 设置相同值的简写模式
  # @param  $value              [Number]  -- 行高
  # @param  $row        {1}     [Number]  -- 高度的倍数
  ```

- um-icon
  ```bash
  # 设置一个行内 icon
  # @param  $value      {$u-icon}             [Number]  -- icon 的大小
  ```

- um-clear__before
  ```bash
  # 可用于清除 first-child 元素上边距传递
  ```

- um-clear__after
  ```bash
  # 可用于清除子元素浮动造成父级高度塌陷
  ```

- um-placeholder
  ```bash
  # 设置 placeholder 的样式
  # @param  $color      {$u-color-placeholder}     [Color] -- placeholder 文字颜色（非 Color 类型的值时将不做属性 color 的设置）
  ```

- um-transition
  ```bash
  # 基准过渡样式
  # @param  $args       {$u-duration}         [List]  -- 参数列表
  ```
  
- um-animation
  ```bash
  # 基准动画样式
  # @param  $name               [String]  -- 动画名
  # @param  $args       {$u-duration}         [List]  -- 除动画名称之外的参数
  ```

- um-ellipsis
  ```bash
  # 省略号效果
  ```
  
- um-omitted
  ```bash
  # 多行省略号效果
  # @param  $lines      {3}     [Number]  -- 指定之后的行隐藏
  ```

- um-appearance
  ```bash
  # 清除默认设置
  ```

### mixin.function
- IIFE
  ```bash
  # 一个运行样式的空 mixin 环境
  ```

- content
  ```bash
  # 写入 content 的值
  # @param  $content            [String]  -- content 的值
  ```

- before
  ```bash
  # 一个运行样式的 before 环境
  # @param  $content    {''}    [String]  -- content 的值
  ```

- after
  ```bash
  # 一个运行样式的 after 环境
  # @param  $content    {''}    [String]  -- content 的值
  ```

- um-keyframes
  ```bash
  # 优雅的书写 @keyframes
  # @param  $name       {''}    [String]  -- keyframes 的名称（当 $name 的值为空时，会自动生成一个 uuid 作为 @keyframes 值）
  # @param  $args       {$u-duration}         [List]  -- 除动画名称之外的参数
  ```

- um-quick-relative
  ```bash
  # 快速转换出相对值（em）
  # @param  $font-size          [Number]  -- 字体大小
  # @param  $props              [Object]  -- 要转换值的属性集合
  # @param  $itself     {true}  [Boolean] -- 是否要设置 font-size 属性
  # @param  $option     {$u-quick-relative}   [Map]   -- 配置
  ```

### mixin.scrollbar
- scrollbar
  ```bash
  # 滚动条设置
  ```

### mixin.effects
- um-effect__arrow
  ```bash
  # 箭头制作
  # @param  $size       {$u-fontSize-root}             [Number]  -- 箭头的大小
  # @param  $weight     {2px}   [Number]  -- 箭头的厚度
  # @param  $rotate     {45deg} [Number]  -- 箭头旋转的角度
  ```

- um-effect__triangle
  ```bash
  # 三角形制作
  # @param  $edge               [Number]  -- 三角形底边的长度
  # @param  $height     {$edge} [Number]  -- 三角形高度
  # @param  $mode       {1}     [Number]  -- 三角形的模式（方向）
  ```
  
- um-effect__triangle-equil
  ```bash
  # 等边三角形制作
  # @param  $edge               [Number]  -- 三角形的边长
  # @param  $mode       {1}     [Number]  -- 三角形的模式（方向）
  ```
  
### mixin.functions.for
- um-for-style
  ```bash
  # 提供一个循环功能，将集合中的数据设置到样式中
  # @param  $key-value          [Map]     -- 数据
  # @param  $prefix     {''}    [String]  -- 选择器前缀
  # @param  $suffix     {''}    [String]  -- 选择器后缀
  # @param  $lists      {background-position} [List]  -- 样式属性列表
  # @param  $is         {false} [Boolean] -- 是否应用单位转换
  ```

### mixin.cssnext.not
- um-not
  ```bash
  # :not 伪类（多 rule）
  # @param  $args...            [String]  -- rule
  ```

### mixin.cssnext.matches
- um-matches
  ```bash
  # :matches 伪类
  # @param  $args...            [String]  -- rule
  ```

### let
  - $u-toFixed-length:
    ```bash
    # 设置计算时取值的小数长度（备注：scss 默认的取值长度为 5）
    # @value    [Number]    [const] {5}
    ```

  - $u-quartet
    ```bash
    # 表示方位的四个值
    # @value    [List]     [const] {-}
    ```

  - $u-browser-default-fontSize
    ```bash
    # 浏览器默认字体大小值
    # @value    [Number]    [const] {16px}
    ```

  - $u-vector-table
    ```bash
    # 单位向量集合
    # @value    [Map]       [const] {-}
    ```

  - $u-nums
    ```bash
    # 0-9 的数字集合
    # @value    [Map]       [const] {-}
    ```

  - $u-isImport-reset
    ```bash
    # 设置是否使用 reset.scss 中的重置样式
    # @value    [Boolean]   [let]   {true}
    ```

  - $u-major-line
    ```bash
    # 设置是否对 line-height 进行优化处理（备注：只对方法 of-line 起作用）
    # @value    [Boolean]   [let]   {true}
    ```

  - $u-cssnext-pollfill__not
    ```bash
    # 设置是否开启伪元素 not 的 pollfill 处理
    # @value    [Boolean]   [let]   {true}
    ```

  - $u-cssnext-pollfill__matches
    ```bash
    # 设置是否开启伪元素 matches 的 pollfill 处理
    # @value    [Boolean]   [let]   {true}
    ```

  - $u-fixed__fontSize
    ```bash
    # 设置字体是否固定大小（备注：只对方法 ofsize 起作用）
    # @value    [Boolean]   [let]   {false}
    ```

  - $u-browser-ie-version
    ```bash
    # 设置要兼容的ie版本
    # @value    [Number]    [let]   {9}
    ```

  - $u-view-width
    ```bash
    # 设置视窗单位的计算基础（慎重调整）
    # @value    [Number]    [let]   {375px}   -- 默认值来源为 iPhone 6 尺寸
    ```

  - $u-view-vector
    ```bash
    # 全局设置 function uf-to-vmin 的第二个参数的默认值（返回值的单位）
    # @value    [Number]    [let]   {1vmin}
    ```

  - $u-view-column
    ```bash
    # 设置视窗单位的计算列数（慎重调整）
    # @value    [Number]    [let]   {100}
    ```

  - $u-view-dpr
    ```bash
    # 默认 dpr 值
    # @value    [Number]    [let]   {1}
    ```

  - $u-view-dpr__name
    ```bash
    # 多倍图标名称追加区分（相比1倍图标）
    # @value    [Map]       [let]   {2: '@2x', 3: '@3x'}
    ```

  - $u-vector
    ```bash
    # 基础向量标识（慎重调整）
    # @value    [Number]    [let]   {1rem}
    ```

  - $u-position-list
    ```bash
    # position 的属性值（慎重修改）
    # @value    [List]     [let]   {-}
    ```

  - $u-family
    ```bash
    # 基础字体
    # @value    [String]    [let]   {'Microsoft YaHei'}
    ```

  - $u-path
    ```bash
    # 图片路径
    # @value    [String]    [let]   {'images/'}
    ```

  - $u-image-sprite
    ```bash
    # 雪碧图图片名
    # @value    [String]    [let]   {sprite.png}
    ```

  - $u-duration
    ```bash
    # 基础动画过渡时间
    # @value    [Number]    [let]   {.3s}
    ```

  - $u-quartet-table
    ```bash
    # 方向集合
    # @value    [Map]       [let]   {radius: -}
    ```

  - $u-quick-relative
    ```bash
    # um-quick-relative 的参数 $option 默认配置
    # @value    [Map]       [let]   {rem: false} /* rem：是否开启rem单位值的转换 */
    ```

  - $u-character-colon
    ```bash
    # 冒号（半角）
    # @value    [String]    [const] {-}
    ```

  - $u-character-colons
    ```bash
    # 伪类使用的冒号（由设置的浏览器版本决定是单冒号还是双冒号）
    # @value    [String]    [const] {-}
    ```

  - $u-character-before
    ```bash
    # 伪类 before
    # @value    [String]    [const] {-}
    ```

  - $u-character-after
    ```bash
    # 伪类 after
    # @value    [String]    [const] {-}
    ```

  - $u-character-and
    ```bash
    # 字符 &
    # @value    [String]    [const] {-}
    ```

  - $u-character-nbsp
    ```bash
    # 空格（备注：按下space键产生的空格，即 &nbsp;）
    # @value    [String]    [const] {-}
    ```

  - $u-character-ensp
    ```bash
    # 空格（备注：占据的宽度正好是1/2个中文宽度）
    # @value    [String]    [const] {-}
    ```

  - $u-character-emsp
    ```bash
    # 空格（备注：占据的宽度正好是1个中文宽度）
    # @value    [String]    [const] {-}
    ```

  - $u-character-thinsp
    ```bash
    # 空格（备注：占据的宽度比较小）
    # @value    [String]    [const] {-}
    ```

  - $u-fontSize-root
    ```bash
    # 设置根元素的 font-size （该值会用于参与计算，只能使用 px 单位）
    # @value    [Number]    [let]   {16px}
    ```

  - $u-lineHeight-root
    ```bash
    # 设置根元素的 line-height
    # @value    [Number]    [let]   {null}
    ```

  - $u-fontSize-h1
    ```bash
    # 设置 h1 的 font-size
    # @value    [Number]    [let]   {$u-fontSize-root * 1.375}
    ```

  - $u-fontSize-h2
    ```bash
    # 设置 h2 的 font-size
    # @value    [Number]    [let]   {$u-fontSize-root * 1.25}
    ```

  - $u-fontSize-h3
    ```bash
    # 设置 h3 的 font-size
    # @value    [Number]    [let]   {$u-fontSize-root * 1.125}
    ```

  - $u-fontSize-h4
    ```bash
    # 设置 h4 的 font-size
    # @value    [Number]    [let]   {$u-fontSize-root * 1}
    ```

  - $u-fontSize-h5
    ```bash
    # 设置 h5 的 font-size
    # @value    [Number]    [let]   {$u-fontSize-root * .875}
    ```

  - $u-fontSize-h6
    ```bash
    # 设置 h6 的 font-size
    # @value    [Number]    [let]   {$u-fontSize-root * .75}
    ```

  - $u-fontSize-default
    ```bash
    # 设置 body 的 font-size
    # @value    [Number]    [let]   {$u-fontSize-root}
    ```
    
  - $u-color
    ```bash
    # 基础色值
    # @value    [Color]     [let]   {#333}
    ```

  - $u-color-light
    ```bash
    # 亮色色值
    # @value    [Color]     [let]   {#666}
    ```

  - $u-color-dark
    ```bash
    # 暗色色值
    # @value    [Color]     [let]   {#000}
    ```

  - $u-color-warn
    ```bash
    # 警告色值
    # @value    [Color]     [let]   {#ff0}
    ```

  - $u-color-danger
    ```bash
    # 危险色值
    # @value    [Color]     [let]   {#f00}
    ```

  - $u-color-hover
    ```bash
    # hover 色值
    # @value    [Color]     [let]   {#189cd8}
    ```

  - $u-color-active
    ```bash
    # active 色值
    # @value    [Color]     [let]   {#189cd8}
    ```

  - $u-color-disabled
    ```bash
    # 禁用色值
    # @value    [Color]     [let]   {#ccc}
    ```

  - $u-color-placeholder
    ```bash
    # placeholder 色值
    # @value    [Color]     [let]   {#ddd}
    ```

  - $u-bgcolor
    ```bash
    # 基础背景色
    # @value    [Color]     [let]   {#eee}
    ```

  - $u-icon
    ```bash
    # 图标的大小
    # @value    [Number]    [let]   {28px}
    ```

  - $u-icon-arrow
    ```bash
    # 箭头的大小
    # @value    [Number]    [let]   {8px}
    ```

  - %U-EL__H
    ```bash
    # 重置 tag h1-h6 样式
    ```

  - %U-PSEUDO__TABLE
    ```bash
    # 伪类清除浮动
    ```

  - %U-PSEUDO__ICON
    ```bash
    # 伪类 icon 基础样式
    ```

  - %U-APPEARANCE
    ```bash
    # 重置 tag 原生样式
    ```

## Changlog
#### 1.2.0
  - 调整：删除 REAMDE.md 中 um-not__pollfill api
  - 调整：删除 REAMDE.md 中 um-matches__pollfill api
  - 调整：删除 REAMDE.md 中 um-root__font api
  - 调整：删除 REAMDE.md 中 um-h1from6 api
  - 调整：删除 mixin um-reset__p
  - 调整：删除 mixin um-reset__h
  - 调整：mixin um-height 添加第二个参数 $row，用于设置倍数，默认值为 1
  - 调整：mixin um-icon 删除第二个参数 $is，并优化其两次对 $value 进行 px 转换
  - 调整：优化 mixin um-placeholder，如果 $value 为非有效 Color 类型，将不设置 color 属性，只作为纯粹的对 @content 调用
  - 调整：删除 um-hide__over
  - 调整：将 um-h1-6 重命名为 um-h1from6
  - 调整：mixin um-effect__arrow 删除第三个参数 $is-pos，并优化 $rotate 的判断及对值为不带单位的数字时，自动添加单位 deg
  - 调整：优化 mixin um-effect__triangle，受全局变量影响，将会产生 ie8 和非 ie8 两种模式
  - 调整：优化 function uf-concat，可以传入多个参数进行合并
  - 调整：优化 function uf-is-px，参数 $value 可以是任意值
  - 调整：删除 uf-part
  - 调整：将 function uf-to-vmin 的第二个参数从 $base 改为 $vector，用于设置返回值向量（单位）
  - 调整：添加全局变量 $u-view-vector，作为 function uf-to-vmin 的第二个参数的默认值
  - 调整：添加 function uf-to-all，vmin vmax vh vw 单位的转换都可以通过调用 function uf-to-vmin 来实现
  - 调整：调整 mixin um-quick-relative 的实现，将内部对 font-size 进行转换的函数由 function all 改成 function uf-font-size
  - 调整：删除 gulp:clean 命令
  - 修复：function uf-calc 合并 product 造成当输出仅有一个 CSS4 var 时不能正确的判断 product 是否为 1
#### 1.1.1
  - 调整：修改部分注释说明
  - 调整：添加 scss 测试单元测试
#### 1.1.0
  - 调整：将方法 uf-is__list 重命名为 uf-is-list
#### 1.0.5
  - 调整：增强了 um-quick-relative 对 List 类型值的支持，同时添加参数 $option 对其进行配置
#### 1.0.4
  - 修复：um-quick-relative 只支持 px 单位（或无单位）的值进行转换，且对类似 z-index 这种不需要转换的属性进行排除，避免进行误操作
#### 1.0.3
  - 调整：将 uf-keyframe 重命名为 um-keyframes
  - 修复：uf-to-all 方法无法正确调用子方法bug
  - 调整：添加 mixin um-quick-relative，用于快速转换出相对单位（em）
#### 1.0.2
  - 修复：uf-calc 方法当输出只有一个 var 且 product 为 1 时，不应该带有 calc