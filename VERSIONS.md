#### 2.1.1
  - 修复包安装后无法正确找到 mathsass 库问题
#### 2.1.0
  - 修复 fcalc 仅有一个 CSS var 时，输出值还带有 calc
  - 抛弃 before、after、mcontent、$gie
  - 文件目录变更
#### 2.0.6-bate.5
  - 重构 gulp 环境
  - 删除 npm run server 命令
  - 移除原 mathsass 拷贝如的文件，改完直接 import 到包
#### 2.0.6-bate.4
  - 删除跟样式无关例子
  - 将测试示例移出
  - 将日志信息放入 VERSIONS.md 中
#### 2.0.6-bate.3
  - 修复 sass 子目录 libs 被 git 排除
#### 2.0.6-bate.2
  - 调整 npm 命令
#### 2.0.6-bate.1
  - 过渡版本
#### 2.0.6
  - 修复 fcalc 方法：当第一项 value 为 CSS var 且 multiple 为负数时，计算 bug
#### 2.0.5
  - 添加 fcalc-list 方法
#### 2.0.4
  - 添加 fcalc-option 方法
#### 2.0.3
  - 修复 mtriangle-equil 不支持 calc 函数和 CSS var
#### 2.0.2
  - 修复 fcalc 中出现除数（或乘数）为百分数时计算错误
#### 2.0.1
  - 修复 mtriangle 不支持 calc 函数和 CSS var