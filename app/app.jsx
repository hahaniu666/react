import React from 'react';
import ReactDOM from 'react-dom';
import 'amfe-flexible';
import FastClick from 'lib/fastclick';
import './lib/native$';
import './app.scss';


import AppRouter from './router/router.js';
import plusReady from 'lib/plusReady';
import './style/iconfont/style.css';

// 调用plus的方法，需要作为此函数的回调
window.plusReady = plusReady;

// FastClick 绑定
if ('addEventListener' in document && /iP(hone|od|ad)/.test(navigator.appVersion)) {
  document.addEventListener('DOMContentLoaded', () => {
    FastClick.attach(document.body);
  }, false);
}

ReactDOM.render(
  <AppRouter />,
  document.getElementById('root'),
);
