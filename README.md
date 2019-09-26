# @vope/scss

## Install

```bash
npm install @vope/scss
```

## npm 命令

```bash
# 开发环境
npm run dev
# 发布
npm run build
# 发布环境
npm run server
# 测试开发环境
npm run mocha
# 测试
npm run test
```

## Usage

Function fcalc 对原生函数 calc 扩展了强大的计算能力
```scss
.content{
  --basic-value: 50px;

  $this-width: fcalc-single(--basic-value, 2, 1); //calc(var(--basic-value) * 2)
  $this-height: fcalc((exp: --basic-value, multiple: 2)); //calc(var(--basic-value) / 2)
  $this-left: fcalc(($this-height, -10%, 3em)); //calc(var(--basic-value) / 2 - 10% + 3em)
}
```

Mixin mquick 方便的进行 CSS 模块布局
```
.content{
  @include mquick(20px, (
    width: 1000px,
    height: 40px,
    z-index: 5,
    background-position: 30px 2em,
  )); //font-size: 1.25rem; width: 50em; height: 2em; z-index: 5; background-position: 1.5em 2em;
}
```

## Changlog
[日志](./VERSIONS.md)