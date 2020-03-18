
// 公共方法
export const toString = Object.prototype.toString;

export const type = param => toString.call(param).slice(2, -8);

export const isFunction = param => type(param) === 'Function';