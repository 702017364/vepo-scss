#### 2.0.1
  *gulpfile*
  修复执行build指令时的报错问题

#### 2.0.0
  *default*
  对所有的 scss 文件名进行重写

#### 1.4.4
**SCSS**
  *function*
  新增：添加方法 is-string
  新增：添加方法 is-boolean
  新增：添加方法 is-list
  新增：添加方法 of-concat
  新增：添加方法 is-number
  新增：添加方法 is-rational-division
  新增：添加方法 is-rational-multiplication
  新增：添加方法 is-rational-number
  优化：优化方法 ofless 当传入的参数不带单位时报错
  *file*
  新增：添加文件 number.scss
  *default*
  开发：添加文件 calc0.scss，做 calc 运算的增强式开发（开发中）

#### 1.4.3
**SCSS**
  *function*
  优化：优化方法 ofcalc，当传入 css4 var 时，支持 $base != 1 或 $simplify = true 运算（注：1、不支持 css4 var 带倍数计算；2、不支持含有 css4 var 的 calc 反解析）

#### 1.4.2
**SCSS**
  *function*
  新增：添加方法 calc-sum-var，对数组中的 css4 var 求和
  优化：优化方法 ofcalc，支持传入 css4 var 进行运算（当前版本运算：1、不支持 css4 var 带倍数计算；2、不支持含有 css4 var 的 calc 反解析）

#### 1.4.1
**SCSS**
  *let*
  新增：添加 $global-cssnext 全局配置
  *function*
  新增：添加方法 is_cssnext，用于判断是否开启 cssnext pollfill
  *folder*
  新增：添加文件夹 cssnext
  *file*
  新增：添加文件 index.scss、not.scss、matches.scss
  *mixin*
  新增：添加混入 not（实现支持多 rule 的伪类 :not）、not-pollfill
  新增：添加混入 matches（实现伪类 :matches）、matches-pollfill

#### 1.3.8
**JS**
  新增：添加 date.js 文件，用于格式化时间

#### 1.3.7
**CONFIG**
  *gulp*
  优化：添加部分注释

#### 1.3.6
**SCSS**
  *mixin*
  优化：transition、animation、keyframes

#### 1.3.5
**SCSS**
  *file*
- 新增：添加 functions.map.scss 文件
  *function*
- 新增：添加方法 icons，简化创建 List 或 Map 时的重复书写
  *mixin*
- 删除：删除 box-sizing
  *md*
- 优化：修改了一些不完善的文档

#### 1.3.4
**SCSS**
- 优化：修复方法 ofnum 在转化带符号数字字符串时报错

#### 1.3.3
**SCSS**
- 优化：将原来调用方法 ofall 统一改成方法 all
  *reset*
- 优化：删除行高设置
  *md*
- 优化：在 README.md 文件中完善了 let API 文档

#### 1.3.2
**SCSS**
  *let*
- 新增：添加全局 $global-decNum，作为计算后小数取值位数（5 是 scss 默认小数长度）
- 新增：添加全局 $global-major-line，配置是否对 line-height 进行优化
  *function*
- 优化：将方法 ofrem 中的小数取值长度值改为 $global-decNum
- 新增：添加方法 ofline，用于优化 line-height 问题（只对单位为 rem 的值有效）

#### 1.3.1
**SCSS**
  *index*
- 优化：将"优雅"注释放入一个值为 false 的 @if 中，可以避免在非压缩环境中出现该注释
  *let*
- 优化：将 reset.scss 中的所有内容移入一个 @if 中，并添加全局配置 $import-reset ，主要是为了在引入部分UI框架（该UI框架本身有做 reset）后造成冲突

#### 1.2.2
**CONFIG**
  *gulpfile*
- 新增：添加任务 uninstall，用于批量删除 package.json 中 install 的库

#### 1.2.1
**SCSS**
  *function*
- 新增：添加方法 ofnum ，用于将字符型数字转成数字
- 新增：添加方法 ofnum-unit ，用于将字符型数字（可带单位）转成数字（带单位）
- 新增：添加方法 ofcalc-resolve ，用于反解析 ofcalc 运算结果
- 新增：添加方法 ofcalc-resolve-baseAndDir ，属于方法 ofcalc-resolve 的辅助，用于提取出 calc 中 base 和 dir
- 新增：添加方法 ofcalc-resolve-lists ，属于方法 ofcalc-resolve 的辅助，用于提取出 calc 中进行加（或减）运算的数字
- 新增：添加方法 ofcalc-array ，属于 ofcalc 数组版
- 新增：添加方法 ofcalc-string ，属于 ofcalc 字符版
- 优化：方法 ofcalc 添加参数 $str，可以对 ofcalc 的运算结果再次进行运算
  *let*
- 新增：添加全局变量 $r-nums

#### 1.1.3
**SCSS**
  *let*
- 优化：修改了 $r-path 的值
- 优化：修改了 $r-family 的值
  *mixin*
- 优化：将原来的 keyframe、r-keyframes 合并成一个 keyframes
- 优化：调整 arrow
- 优化：将原 style-isOfall 更改为 for-style-use，并调整了内部应用规则
- 删除：mixins/functions/str.scss 文件
  *function*
- 优化：将原 mixins/functions/str.scss （已删除）中的 string 操作方法放入 string.scss 中
  *md*
- 优化：在 README.md 文件中完善了 mixin API 文档

#### 1.1.2
**SCSS**
  *function*
- 删除：ofswap
- 优化：将方法 ofpx 的参数 $base 默认值改为 null
  *md*
- 优化：在 README.md 文件中完善了 function API 文档
- 优化：在 README.md 文件中添加了部分 mixin API 文档

#### 1.1.1
**SCSS**
  *function*
- 优化：完善了 ofvmin 方法
  *md*
- 优化：在 README.md 文件中添加了部分 API 文档

#### 1.1.0

**SCSS**
  *mixin*
- 删除：elt-triangle、elb-triangle
- 新增：triangle（和之前的 elb-triangle 相比：1、更改了参数可以更方便的进行设置；2、提供了以 triangle- 为前缀的相关简化调用）
- 修改：omitted（由于之前调用了 ellipsis，造成了不换行）
  *file*
- 优化：新增 test.scss 文件：1、将开发时使用的测试代码移到该文件中，2、通过 npm 传入参数，智能切换 scss 的编译入口（测试环境使用 test.scss，开发和发布环境使用 main.scss）

**JS**
- 删除原来的代码

**gulp**
- 优化：在 package 中添加了 npm 命令
- 优化：调整了 gulpfile.js 中的配置