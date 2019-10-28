# @vope/scss

## Install

```bash
npm install @vope/scss
```

## API
[文档](./node/API.md)

## npm 命令
[命令](./node/CMD.md)


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

## Changlog
[日志](./node/LOG.md)