import Home from 'pages/Home/Home';
import InputEg from 'pages/Input/Input';
import NumberInputEg from 'pages/NumberInputEg/NumberInputEg';

import page1 from 'pages/page1/page1';
import page2 from 'pages/page2/page2';
import page3 from 'pages/page3/page3';

export const RouterConfig = [
  {
    path: '/',
    component: Home,
    sceneConfig: {
      enter: 'from-right',
      exit: 'to-right',
    },
  },
  {
    path: '/Home',
    component: Home,
    sceneConfig: {
      enter: 'from-right',
      exit: 'to-right',
    },
  },
  {
    path: '/InputEg',
    component: InputEg,
    sceneConfig: {
      enter: 'from-right',
      exit: 'to-right',
    },
  },
  {
    path: '/NumberInputEg',
    component: NumberInputEg,
    sceneConfig: {
      enter: 'from-bottom',
      exit: 'to-bottom',
    },
  },

  {
    path: '/page1',
    component: page1,
    sceneConfig: {
      enter: 'from-bottom',
      exit: 'to-bottom',
    },
  },
  {
    path: '/page2',
    component: page2,
    sceneConfig: {
      enter: 'from-bottom',
      exit: 'to-bottom',
    },
  },
  {
    path: '/page3',
    component: page3,
    sceneConfig: {
      enter: 'from-bottom',
      exit: 'to-bottom',
    },
  },
];
