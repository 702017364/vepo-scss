import { join } from 'path';
import domVar from './dom-var';
import domExtend from './dom-extend';
import domMixin from './dom-mixin';
import domFunction from './dom-function';

const basic = join(process.cwd(), 'style/public');

const vars = join(basic, 'var') |> domVar;
const extend = join(basic, 'extend') |> domExtend;
const mixins = join(basic, 'mixins') |> domMixin;
const functions = join(basic, 'functions') |> domFunction;

export { vars, extend, mixins, functions };