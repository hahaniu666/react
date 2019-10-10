/*
 * 原生httpEngin依赖$方法
 */

const native$ = {
  emptyFn() {},
  isObject(obj) {
    return typeof obj === 'object';
  },
  isEmptyObject(obj) {
    return Object.keys(obj).length === 0;
  },
  type(m) {
    return typeof m;
  },
  param(data) {
    return data;
  },
  encode: JSON.stringify,
};

if (!window.$) {
  window.$ = native$;
} else {
  window.$ = { ...window.$, ...native$ };
}
