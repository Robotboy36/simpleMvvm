
// 公共方法
export const toString = Object.prototype.toString;

export const type = param => toString.call(param).slice(8, -1).toLowerCase();

export const isFunction = param => type(param) === 'function';

export const isObject = param => type(param) === 'object';
