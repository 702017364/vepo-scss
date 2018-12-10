## npm 命令
```bash

# 运行开发环境
npm run gulp
# 清除编译出的文件
npm run gulp:clean
# 发布（无 map 文件）
npm run gulp:build
# 测试（将 scss 文件的入口更改为 test.scss）
npm run gulp:test
# 运行开发环境
npm run gulp:client
# 运行发布环境（会生成 map 文件）
npm run gulp:server

```

## API

#### SCSS API

  ##### function.array
  - ofreverse
    ```bash
    # 将数据的元素顺序进行反转
    # @param  $list               [Array]   -- 要取反的数组
    # @return                     [Array]
    ```

  - is-list
    ```bash
    # 检测类型是否为 list
    # @param  $value              [Object]
    # @return                     [Boolean]
    ```

  - of-concat
    ```bash
    # 返回两个数组的组合数组
    # @param  $list1              [List]
    # @param  $list2              [List]
    # @return                     [List]
    ```

  ##### function.number
  - is-number
    ```bash
    # 检测类型是否为 number
    # @param  $value              [Object]
    # @return                     [Boolean]
    ```

  - is-rational-division
    ```bash
    # 检测除法运算结果是否为有理数（该有理数的定义为是否在 sass 的取值范围）
    # @param  $a                  [Number]  -- 被除数
    # @param  $b                  [Number]  -- 除数
    # @return                     [Boolean]
    ```

  - is-rational-multiplication
    ```bash
    # 检测乘法运算结果是否为有理数（该有理数的定义为是否在 sass 的取值范围）
    # @param  $a                  [Number]  -- 被乘数
    # @param  $b                  [Number]  -- 乘数
    # @return                     [Boolean]
    ```

  - is-rational-number
    ```bash
    # 检测其倒数是否为有理数（该有理数的定义为是否在 sass 的取值范围）
    # @param  $a                  [Number]  -- 要求倒的数
    # @return                     [Boolean]
    ```

  ##### function.boolean
  - isempty
    ```bash
    # 判断值是否为空
    # @param  $value              [Object]  -- 要判断的值
    # @return                     [Boolean]
    ```

  - ispx
    ```bash
    # 判断单位是否是 px
    # @param  $value              [Number]  -- 要判断的值
    # @return                     [Boolean]
    ```

  - is_cssnext
    ```bash
    # 判断是否开启 cssnext 的 pollfill 功能
    # @param  $name               [String]  -- 要进行判断的属性值
    # @return                     [Boolean]
    ```

  - is-boolean
    ```bash
    # 检测类型是否为 Boolean
    # @param  $value              [Object]
    # @retuen                     [Boolean]
    ```
  
  ##### function.calc
  - ofcalc
    ```bash
    # 将一个复杂的 calc 计算优化（简化）
    # @param  $list               [Array]   -- 要进行计算的值列表
    # @param  $base       {1}     [Number]  -- 对列表进行乘（或除）的乘数（或除数）
    # @param  $dir        {0}     [Number]  -- 0 表示对列表进行除法运算，1 表示对列表进行乘法运算
    # @param  $simplify   {false} [Boolean] -- 当合并后的计算列表包含不同值且 $base 不为 1 时，是否要清除 $base （$simplify = false 为不清除，保留输出）
    # @param  $str        {''}    [String]  -- 字符串（ofcalc 运算结果）
    # @return                     [Number, String]
    ```

  - ofcalc-array
    ```bash
    # ofcalc 数组版
    # @param  $list               [Array]   -- 要进行计算的值列表
    # @param  $base       {1}     [Number]  -- 对列表进行乘（或除）的乘数（或除数）
    # @param  $dir        {0}     [Number]  -- 0 表示对列表进行除法运算，1 表示对列表进行乘法运算
    # @param  $simplify   {false} [Boolean] -- 当合并后的计算列表包含不同值且 $base 不为 1 时，是否要清除 $base （$simplify = false 为不清除，保留输出）
    # @return                     [Number, String]
    ```

  - ofcalc-string
    ```bash
    # ofcalc 字符版
    # @param  $str                [String]  -- 字符串（ofcalc 运算结果）
    # @param  $list       {()}    [Array]   -- 新增进行计算的值列表
    # @param  $base       {null}  [Number]  -- 更改列表进行乘（或除）的乘数（或除数）
    # @param  $dir        {null}  [Number]  -- 更改对列表进行的运算（0 表示对列表进行除法运算，1 表示对列表进行乘法运算）
    # @param  $simplify   {false} [Boolean] -- 当合并后的计算列表包含不同值且 $base 不为 1 时，是否要清除 $base （$simplify = false 为不清除，保留输出）
    # @return                     [Number, String]
    ```

  - calc-output
    ```bash
    # 对一个数组中包含的每个元素进行统一的 calc 计算
    # @param  $list               [Array]   -- 要进行计算的值列表
    # @param  $base               [Number]  -- 对列表进行乘（或除）的乘数（或除数）
    # @param  $dir                [Number]  -- 0 表示对列表进行除法运算，1 表示对列表进行乘法运算
    # @param  $simplify           [Boolean] -- 当合并后的计算列表包含不同值且 $base 不为 1 时，是否要清除 $base （$simplify = false 为不清除，保留输出）
    # @return                     [Number, String]
    ```
  
  - calc-join
    ```bash
    # 将数组中包含的元素拼接成 calc 形式
    # @param  $list               [Array]   -- 要进行输出的值列表
    # @param  $base               [Number]  -- 对列表进行乘（或除）的乘数（或除数）  
    # @param  $dir                [Number]  -- 0 表示对列表进行除法运算，1 表示对列表进行乘法运算
    # @return                     [String]
    ```

  - calc-simplify
    ```bash
    # 对一个数组中包含的每个元素进行乘法（或除法）运算
    # @param  $list               [Array]   -- 要进行运算的值列表
    # @param  $base               [Number]  -- 对列表进行乘（或除）的乘数（或除数）
    # @param  $dir                [Number]  -- 0 表示对列表进行除法运算，1 表示对列表进行乘法运算
    # @return                     [Array]
    ```

  - calc-dir
    ```bash
    # 判断一个值是表示乘法还是除法运算
    # @param  $dir                [Number]  -- 0 表示对列表进行除法运算，1 表示对列表进行乘法运算
    # @return                     [Boolean]
    ```

  - calc-category
    ```bash
    # 对数据中的每个元素进行按单位分类
    # @param  $list               [Array]   -- 要进行分类的数组
    # @return                     [Map]
    ```

  - calc-merge
    ```bash
    # 将集合中值为数组的项进行合并
    # @param  $map                [Map]     -- 要进行合并的集合
    # @return                     [Map]
    ```

  - calc-sum-var
    ```bash
    # 对列表的元素进行 css4 var 求和
    # @param  $list               [Array]   -- 要进行运算的数组
    # @return                     [String]
    ```

  - calc-sum
    ```bash
    # 对列表的元素进行常规求和运算
    # @param  $list               [Array]   -- 要进行运算的数组
    # @return                     [Number]
    ```

  - calc-filter
    ```bash
    # 将集合中值为 0 的项过滤掉，并输出值列表
    # @param  $map                [Map]     -- 要进行处理的集合
    # @return                     [Array]
    ```
    
  - ofcalc-resolve
    ```bash
    # 将 ofcalc 运算结果进行反解析
    # @param  $calc               [String]     -- 字符串（ofcalc 运算结果）
    # @return                     [Map]
    ```

  - ofcalc-resolve-baseAndDir
    ```bash
    # 方法 ofcalc-resolve 的辅助，提取出 calc 中 base 和 dir
    # @param  $splits             [Array]     -- ofcalc 运算结果拆分处理后的数组
    # @return                     [Map]
    ```

  - ofcalc-resolve-lists
    ```bash
    # 方法 ofcalc-resolve 的辅助，提取出 calc 中进行加（或减）运算的数字
    # @param  $splits             [Array]     -- ofcalc 运算结果拆分处理后的数组
    # @return                     [Array]
    ```
  
  ##### function.math
  - ofround
    ```bash
    # 四舍五入指定小数位数的数字（如果输入负值，则对整数部分进行相应长度做四舍五入）
    # @param  $value              [Number]  -- 需要处理的值
    # @param  $pow        {0}     [Number]  -- 位数
    # @return                     [Number]
    ```

  - ofnum
    ```bash
    # 将 String 型数字转成 Number
    # @param  $str                [String]  -- 字符型数字
    # @return                     [Number]
    ```

  - ofnum-unit
    ```bash
    # 将 String 型数字（可带单位）转成 Number（带单位）
    # @param  $str                [String]  -- 字符型数字（可带单位，如果不带单位或不是有效的单位，将自动变成单位 px）
    # @return                     [Number]
    ```
  
  ##### function.operat
  - offar
    ```bash
    # 获取全局 $r-fars 中的属性值
    # @param  $prop       {''}    [String]  -- 属性名（默认或者无效属性都会返回 $r-far）
    # @return                     [Array]
    ```

  - ofanti
    ```bash
    # 属性取反（在获取到的数组中，取得传入模式的反模式对应的角标值）
    # @param  $mode       {1}     [Number]  -- 要取反的模式（角标）
    # @param  $prop       {''}    [String]  -- 属性名（默认或者无效属性都会返回 $r-far）
    # @return                     [String]
    ```

  - ofanti0
    ```bash
    # 对传入的模式（值）进行取反
    # @param  $mode               [Number]  -- 要取反的模式（值）
    # @param  $range              [Number]  -- 取反模式的范围
    # @return                     [Number]
    ```

  - uuid
    ```bash
    # 产生一个 uuid
    # @param  $space      {'A'}   [String]  -- uuid 的前缀（添加前缀是因为很多场合不能以数字开头）
    # @return                     [String]
    ```

  ##### function.string
  - str-split
    ```bash
    # 字符串分割（对 $separator 进行处理）
    # @param  $string             [String]  -- 要分割的字符串
    # @param  $separator          [String]  -- 分隔符
    # @return                     [List]
    ```
    
  - str-split-for
    ```bash
    # 字符串分割（将分割的字符串加入数组中）
    # @param  $list               [Array]   -- 数组
    # @param  $string             [String]  -- 要分割的字符串
    # @param  $separator          [String]  -- 分隔符
    # @return                     [List]
    ```

  - is-string
    ```bash
    # 检测类型是否为 string
    # @param  $value              [Object]
    # @return                     [Boolean]
    ```

  ##### function.style
  - bgurl
    ```bash
    # background-image 值的简写模式
    # @param  $name       {$r-sprite}           [String]  -- 图片路径
    # @param  $dpr        {$browser-dpr}        [Number]  -- dpr
    # @return                     [String]
    ```

  - ofpart
    ```bash
    # 避免 scss 由于变量（或运算）的原因将 '/' 识别成除法运算
    # @param  $a                  [Object]  -- 变量 a
    # @param  $b                  [Object]  -- 变量 b
    # @return                     [String]
    ```

  - ofclass
    ```bash
    # 将字符串转换成 class 形式
    # @param  $name               [String]  -- 要转成为 class 的字符串
    # @return                     [String]
    ```
    
  - prop-join
    ```bash
    # 属性拼接
    # @param  $far                [String]  -- 要被拼接的属性
    # @param  $prev       {''}    [String]  -- 拼接属性的前缀
    # @param  $next       {''}    [String]  -- 拼接属性的后缀
    # @return                     [String]
    ```

  - ofline
    ```bash
    # 通过该方法对单位为 rem 的 line-height 进行优化（由于计算问题 + 浏览器对 line-height 使用去尾处理，造成部分 line-height 会比实际想要的值少 1px）（备注：其实最好的方法应该是避免使用如 14、15、17 这种会造成计算不尽的值作为根元素的 font-size）
    # @param  $value              [Number]  -- 需要优化的 line-height
    # @return                     [String]
    ```

  ##### function.vector
  - ofall
    ```bash
    # 单位转换（总接口）
    # @param  $value              [Number]  -- 要进行单位转换值
    # @param  $base       {$r-size}             [Number]  -- 转换单位时进行计算的基数
    # @param  $dpr        {$browser-dpr}        [Number]  -- dpr
    # @return                     [Number, String]
    ```
    
  - all
    ```bash
    # ofall 方法的简写模式
    # @return                     [Number, String]
    ```

  - ofrem
    ```bash
    # px 转换成 rem
    # @param  $value              [Number]  -- 要进行单位转换值
    # @param  $base       {$r-size}             [Number]  -- 转换单位时进行计算的基数
    # @return                     [Number]
    ```

  - ofvmin
    ```bash
    # px 转换成 vmin
    # @param  $value              [Number]  -- 要进行单位转换值
    # @param  $base       {null}            -- 无效值（只是为了做响应 ofall ）
    # @return                     [Number]
    ```

  - ofpx
    ```bash
    # 将纯数值转换成 px
    # @param  $value              [Number]  -- 要进行单位转换值
    # @param  $base       {null}            -- 无效值（只是为了做响应 ofall ）
    # @return                     [Number]
    ```

  - ofsize
    ```bash
    # 对 font-size 引用单位转换
    # @param  $value              [Number]  -- 要进行单位转换值
    # @return                     [Number]
    ```

  - ofless
    ```bash
    # 去除单位（变成纯数值）
    # @param  $value              [Number]  -- 要去除单位的值
    # @return                     [Number]
    ```

  - ofvector
    ```bash
    # 获取参数对应的单位向量
    # @param  $value              [Number]  -- 要获取单位向量的值
    # @return                     [Number]
    ```

  ##### function.map
  - icons
    ```bash
    # 简化创建 array 或 map 时的重复书写
    # @param  $map                [List, Map]   -- 简写的数据
    # @param  $before             [String]  -- 分项前面插入的值
    # @param  $after              [String]  -- 分项后面插入的值
    # @return                     [Map]
    ```
  
  ##### mixin.class
  - hide-over
    ```bash
    # 重置 margin、padding
    ```

  - c-h
    ```bash
    # 重置标题标签
    ```

  - r-far
    ```bash
    # 简写样式，只对包含方向（top、right、bottom、left）的样式起作用
    # @param  $mode       {'o'}   [String]  -- 方向（'x' 代表 x 轴方向，'y' 代表 y 轴方向，'o' 代表所有方向）
    # @param  $value      {0}     [Number]  -- 要设置样式的值
    # @param  $prop       {''}    [String]  -- 拼接时的前缀
    # @param  $type       {''}    [String]  -- 拼接时的后缀
    ```

  - v
    ```bash
    # 快速书写带有居中特性的定位
    # @param  $mode       {'to'}  [String]  -- 使用何种方式进行居中定位（p 开头代表只使用定位居中，t 开头代表使用定位和位移进行混合居中，第二个字母含义可参照 mixin.r-far => $mode）
    # @param  $p          {1}     [String]  -- position 的值（对应 $r-pos）
    ```

  - ratio
    ```bash
    # 创建一个 width、height 相同的元素
    # @param  $value      {$r-icon}             [Number]  -- width、height 的值
    # @param  $mode       {1}     [Number]  -- 如何使用 height 的模式（-1 代表用 line-height 代替 height，0 代表对 line-height、height 都设置值，1 代表只设置 height）
    ```

  - height
    ```bash
    # 对 height、line-heigth 设置相同值的简写模式
    # @param  $value              [Number]  -- 要设置的值
    ```

  - el-icon
    ```bash
    # 设置一个行内 icon
    # @param  $value      {$r-icon}             [Number]  -- icon 的大小
    # @param  $is         {true}  [Boolean] -- 是否要继承 %PSEUDO-ICON 的样式
    ```

  - c-mtop
    ```bash
    # 清除 first-child 元素上边距传递
    ```

  - c-float
    ```bash
    # 清除子元素浮动造成父级高度塌陷
    ```

  - placeholder
    ```bash
    # 设置 placeholder 的样式
    # @param  $color      {$rc-placeholder}     [Color] -- placeholder 文字颜色
    ```

  - transition
    ```bash
    # 基准过渡样式
    # @param  $args       {$r-duration}         [List]  -- 参数列表
    ```
    
  - animation
    ```bash
    # 基准动画样式
    # @param  $name               [String]  -- 动画名
    # @param  $args       {$r-duration}         [List]  -- 除动画名称之外的参数
    ```

  - hide-over
    ```bash
    # 隐藏多余的子元素
    # @param  $n                  [Number]  -- 指定从该角标开始隐藏
    ```

  - ellipsis
    ```bash
    # 省略号效果
    ```
    
  - omitted
    ```bash
    # 多行省略号效果
    # @param  $lines      {3}     [Number]  -- 指定之后的行隐藏
    ```

  - appearance
    ```bash
    # 清除默认设置
    ```

  ##### mixin.const
  - html-font
    ```bash
    # 设置 html 标签的 font
    ```

  - h-css
    ```bash
    # 设置标题标签的样式
    ```
    
  ##### mixin.function
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

  - color-weight
    ```bash
    # 在样式中对色值做亮度处理
    # @param  $prop               [String]  -- css 属性
    # @param  $color              [Color]   -- 色值
    # @param  $weight             [Number]  -- 亮度值
    ```

  - colors-weight
    ```bash
    # 应用样式 color、background-color，并对色值做亮度处理
    # @param  $colors             [Array]   -- 颜色的数组
    # @param  $w1         {1}     [Number]  -- 对应样式 color 的颜色值的亮度
    # @param  $w2         {1}     [Number]  -- 对应样式 background-color 的颜色值的亮度
    ```

  - keyframes
    ```bash
    # 优雅的书写 @keyframes
    # @param  $name       {''}    [String]  -- keyframes 的名称（当 $name 的值为空时，会自动生成一个 uuid 作为 @keyframes 值）
    # @param  $args       {$r-duration}         [List]  -- 除动画名称之外的参数
    ```

  ##### mixin.scrollbar
  - scrollbar
    ```bash
    # 滚动条设置
    ```

  ##### mixin.effects
  - arrow
    ```bash
    # 箭头制作
    # @param  $size       {$r-size}             [Number]  -- 箭头的大小
    # @param  $weight     {2px}   [Number]  -- 箭头的厚度
    # @param  $is-pos     {true}  [Boolean] -- 是否应用定位居中
    # @param  $rotate     {45deg} [Number]  -- 箭头旋转的角度
    ```

  - triangle
    ```bash
    # 三角形制作
    # @param  $edge               [Number]  -- 三角形底边的长度
    # @param  $height     {$edge} [Number]  -- 三角形高度
    # @param  $mode       {1}     [Number]  -- 三角形的模式（方向）
    ```
    
  - triangle-equil
    ```bash
    # 等边三角形制作
    # @param  $edge               [Number]  -- 三角形的边长
    # @param  $mode       {1}     [Number]  -- 三角形的模式（方向）
    ```
    
  ##### mixin.functions.for
  - for-style
    ```bash
    # 提供一个循环功能，将集合中的数据设置到样式中
    # @param  $key-value          [Map]     -- 数据
    # @param  $prefix     {''}    [String]  -- 选择器前缀
    # @param  $suffix     {''}    [String]  -- 选择器后缀
    # @param  $lists      {background-position} [Array]  -- 样式属性列表
    # @param  $is         {false} [Boolean] -- 是否应用单位转换
    ```
    
  - for-style-use
    ```bash
    # 建立对样式的具体应用规则
    # @param  $prop               [String]  -- 样式属性
    # @param  $value              [Object]  -- 样式值
    # @param  $is                 [Boolean] -- 是否应用单位转换
    ```

  ##### mixin.functions.prefix
  - prefix
    ```bash
    # 添加命名空间（选择器的一种生成方式）
    # @param  $name               [String]  -- 连接用的名称
    # @param  $prefix             [String]  -- 连接前缀
    # @param  $mode       {1}     [Number]  -- 连接模式（1 表示选择器使用短横杠拼接，2 表示选择器使用父子关系连接）
    # @param  $coon       {''}    [String]  -- 连接方式（$and 表示选择器属于本身，其他值表示选择器为子级模式）
    ```
    
  - prefix-and
    ```bash
    # 添加命名空间（连接模式）
    # @param  $name               [String]  -- 连接用的名称
    # @param  $prefix             [String]  -- 连接前缀
    # @param  $mode               [Number]  -- 连接模式（1 表示选择器使用短横杠拼接，2 表示选择器使用父子关系连接）
    ```

  - prefix-space
    ```bash
    # 添加命名空间（子集模式）
    # @param  $name               [String]  -- 连接用的名称
    # @param  $prefix             [String]  -- 连接前缀
    # @param  $mode               [Number]  -- 连接模式（1 表示选择器使用短横杠拼接，2 表示选择器使用父子关系连接）
    ```

  - prefix-content
    ```bash
    # 添加命名空间（内容）
    # @param  $name               [String]  -- 连接用的名称
    # @param  $mode               [Number]  -- 连接模式（1 表示选择器使用短横杠拼接，2 表示选择器使用父子关系连接）
    ```
    
  - prefix-splice
    ```bash
    # 添加命名空间（使用短横杠拼接）
    # @param  $name               [String]  -- 连接用的名称
    ```

  - prefix-father
    ```bash
    # 添加命名空间（使用父子关系连接）
    # @param  $name               [String]  -- 连接用的名称
    ```

  ##### mixin.cssnext.not
  - not
    ```bash
    # :not 伪类（多 rule）
    # @param  $args...            [String]  -- rule
    ```

  - not-pollfill
    ```bash
    # :not 伪类（多 rule）(pollfill)
    # @param  $args...            [String]  -- rule
    ```

  ##### mixin.cssnext.matches
  - matches
    ```bash
    # :matches 伪类
    # @param  $args...            [String]  -- rule
    ```

  - matches-pollfill
    ```bash
    # :matches 伪类(pollfill)
    # @param  $args...            [String]  -- rule
    ```

  ##### let.const
  - $import-reset
    ```bash
    # 设置是否导入重置样式（即是否引用 reset.scss）
    # @value  [Boolean]   [let]   {true}
    ```

  - $global-decNum
    ```bash
    # 设置计算时取值的小数长度（备注：scss 默认的取值长度为 5）
    # @value  [Number]    [let]   {5}
    ```
    
  - $global-major-line
    ```bash
    # 设置是否对 line-height 进行优化处理（备注：只对方法 ofline 起作用）
    # @value  [Boolean]   [let]   {true}
    ```

  - $global-cssnext
    ```bash
    # 配置是否开启对应的 cssnext pollfill
    # @value  [Map]       [const]
    ```

  - $r-far
    ```bash
    # 方向值，常用于方法 offar 的默认取值
    # @value  [Array]     [const]
    ```

  - $r-pos
    ```bash
    # 定位属性值
    # @value  [Array]     [const]
    ```

  - $browser-size
    ```bash
    # 设置浏览器默认字体大小
    # @value  [Array]     [const]
    ```

  - $browser-width
    ```bash
    # 设置视窗单位的计算基础
    # @value  [Number]    [let]   {375px}   -- 默认值来源为 iPhone 6 尺寸，目前来说，该值为不可更改类型
    ```

   - $browser-columns
    ```bash
    # 设置视窗单位的计算列数
    # @value  [Number]    [const] {100}
    ```

  - $browser-ie-version
    ```bash
    # 设置要兼容的ie版本
    # @value  [Number]    [let]   {9}
    ```

  - $browser-vars
    ```bash
    # css 中定义的变量属性值
    # @value  [Array]     [const]
    ```

  - $browser-vector
    ```bash
    # 基础向量标识（备注：用于单位转换方法 all）
    # @value  [Number]    [let]   {1rem}
    ```

  - $browser-dpr
    ```bash
    # dpr 值
    # @value  [Number]    [let]   {1}
    ```

  - $browser-fixed
    ```bash
    # 设置固定值的集合
    # @value  [Map]       [const]
    ```

  - $browser-fixed-size
    ```bash
    # 设置字体是否固定大小（备注：只对方法 ofsize 起作用）
    # @value  [Boolean]   [let]   {false}
    ```

  - $r-devices
    ```bash
    # 设置设备参数
    # @value  [Map]       [let]
    ```

  - $r-dpr
    ```bash
    # 对应不同 dpr 值的资源引用别名
    # @value  [Map]       [const]
    ```

  - $r-vector
    ```bash
    # 单位向量集合
    # @value  [Map]       [const]
    ```

  - $r-fars
    ```bash
    # 方向集合
    # @value  [Map]       [const]
    ```

  - $r-fars-radius
    ```bash
    # 圆角方向
    # @value  [Array]     [const]
    ```

   - $r-nums
    ```bash
    # 0-9 的数字集合
    # @value  [Map]       [const]
    ```

  ##### let.chars
  - $colon
    ```bash
    # 冒号（半角）
    # @value    [String]    [const]
    ```

  - $colons
    ```bash
    # 单（或双）冒号（半角）（备注：如果 $browser-ie-version 的值大于 8 则为双冒号，否则为单冒号）
    # @value    [String]    [const]
    ```

  - $before
    ```bash
    # 字符串 :before（备注：$colons 的值决定该值是单或双冒号）
    # @value    [String]    [const]
    ```

  - $after
    ```bash
    # 字符串 :after（备注：$colons 的值决定该值是单或双冒号）
    # @value    [String]    [const]
    ```

  - $and
    ```bash
    # 字符 &
    # @value    [String]    [const]
    ```

  - $nbsp
    ```bash
    # 空格（备注：按下space键产生的空格，即 &nbsp;）
    # @value    [String]    [const]
    ```

  - $ensp
    ```bash
    # 空格（备注：占据的宽度正好是1/2个中文宽度）
    # @value    [String]    [const]
    ```

  - $emsp
    ```bash
    # 空格（备注：占据的宽度正好是1个中文宽度）
    # @value    [String]    [const]
    ```

  - $thinsp
    ```bash
    # 空格（备注：占据的宽度比较小）
    # @value    [String]    [const]
    ```

  ##### let.sizes
  - $r-size
    ```bash
    # 设置 rem 的计算基础
    # @value    [Number]    [let]   {16px}
    ```

  - $rs-h1
    ```bash
    # 设置标签 h1 的 font-size（备注：在 h-css 使用时有对该值进行方法 all 处理）
    # @value    [Number]    [let]   {$r-size * 1.375}
    ```

  - $rs-h2
    ```bash
    # 设置标签 h2 的 font-size（备注：在 h-css 使用时有对该值进行方法 all 处理）
    # @value    [Number]    [let]   {$r-size * 1.25}
    ```
    
  - $rs-h3
    ```bash
    # 设置标签 h3 的 font-size（备注：在 h-css 使用时有对该值进行方法 all 处理）
    # @value    [Number]    [let]   {$r-size * 1.125}
    ```

  - $rs-h4
    ```bash
    # 设置标签 h4 的 font-size（备注：在 h-css 使用时有对该值进行方法 all 处理）
    # @value    [Number]    [let]   {$r-size * 1}
    ```

  - $rs-h5
    ```bash
    # 设置标签 h5 的 font-size（备注：在 h-css 使用时有对该值进行方法 all 处理）
    # @value    [Number]    [let]   {$r-size * .875}
    ```

  - $rs-h6
    ```bash
    # 设置标签 h6 的 font-size（备注：在 h-css 使用时有对该值进行方法 all 处理）
    # @value    [Number]    [let]   {$r-size * .75}
    ```

  - $rs-default
    ```bash
    # font-size 的默认值（备注：目前只用于标签 body，在调用的地方有对该值进行方法 all 处理）
    # @value    [Number]    [let]   {$r-size}
    ```

  - $h
    ```bash
    # 标签 h1-h6 的 font-size 集合
    # @value    [Map]       [const]
    ```

  - $r-line
    ```bash
    # 设置标签 html 的行高
    # @value    [Number]    [let]   {null}
    ```

  ##### let.colors
  - $r-color
    ```bash
    # 基础色值
    # @value    [Color]     [let]
    ```

  - $rc-light
    ```bash
    # 亮色色值
    # @value    [Color]     [let]
    ```

  - $rc-dark
    ```bash
    # 暗色色值
    # @value    [Color]     [let]
    ```

  - $rc-warn
    ```bash
    # 警告色值
    # @value    [Color]     [let]
    ```

  - $rc-danger
    ```bash
    # 危险色值
    # @value    [Color]     [let]
    ```

  - $rc-hover
    ```bash
    # hover 色值
    # @value    [Color]     [let]
    ```

  - $rc-active
    ```bash
    # active 色值
    # @value    [Color]     [let]
    ```

  - $rc-disable
    ```bash
    # 禁用色值
    # @value    [Color]     [let]
    ```

  - $rc-bg
    ```bash
    # 基本背景色
    # @value    [Color]     [let]
    ```

  - $rc-placeholder
    ```bash
    # placeholder 色值
    # @value    [Color]     [let]
    ```

  - $rcb-hover
    ```bash
    # hover 色块
    # @value    [Array]     [let]
    ```

  - $rcb-active
    ```bash
    # active 色块
    # @value    [Array]     [let]
    ```

  - $rcb-disable
    ```bash
    # disable 色块
    # @value    [Array]     [let]
    ```

  ##### let.default
  - $r-path
    ```bash
    # 背景图片路径
    # @value    [String]    [let]
    ```

  - $r-sprite
    ```bash
    # 雪碧图图片名
    # @value    [String]    [let]   {sprite.png}
    ```

  - $r-family
    ```bash
    # 字体（备注：标签 html 有使用）
    # @value    [String]    [let]
    ```

  - $r-duration
    ```bash
    # 动画过渡时间
    # @value    [Number]    [let]   {0.3s}
    ```

  - $r-icon
    ```bash
    # 图标的大小
    # @value    [Number]    [let]
    ```

  - $r-arrow
    ```bash
    # 箭头的大小（备注：在 arrow 使用时有对该值进行方法 all 处理）
    # @value    [Number]    [let]   {8px}
    ```

  ##### let.extend
  - %EL-H
    ```bash
    # 重置类型标签 h1 的样式
    ```

  - %PSEUDO-TABLE
    ```bash
    # 伪类清除浮动
    ```

  - %PSEUDO-ICON
    ```bash
    # 设置 icon
    ```

  - %APPEARANCE
    ```bash
    # 重置标签原生样式
    ```