import React, { Component } from 'react';
// 注意 react-transition-group 要用 2.x以上版本，最新是4.x 太高，会导致报错
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Route, Switch, withRouter, HashRouter } from 'react-router-dom';
// router统一配置
import { RouterConfig } from './RouteConfig';

// 定义默认进出场动画
const DEFAULT_SCENE_CONFIG = {
  enter: 'from-right',
  exit: 'to-right',
};

// 获取进出场动画配置，暂时只支持左右
const getSceneConfig = (location) => {
  const matchedRoute = RouterConfig.find(config => new RegExp(`^${config.path}$`).test(location.pathname));
  return (matchedRoute && matchedRoute.sceneConfig) || DEFAULT_SCENE_CONFIG;
};

let oldLocation = null;
const Routes = withRouter(({ location, history }) => {
  // 转场动画应该都是采用RouterConfig中sceneConfig配置的动画效果，所以：
  // push操作时，用新location匹配的路由sceneConfig
  // pop操作时，用旧location，也就是oldLocation去匹配的路由sceneConfig
  let classNames = '';
  if (history.action === 'PUSH') {
    classNames = `forward-${getSceneConfig(location).enter}`;
  } else if (history.action === 'POP' && oldLocation) {
    classNames = `back-${getSceneConfig(oldLocation).exit}`;
  }
  // 更新旧location
  oldLocation = location;
  return (
    <TransitionGroup
      className="router-wrapper"
      childFactory={child => React.cloneElement(child, { classNames })}
    >
      <CSSTransition timeout={500} key={location.pathname}>
        <Switch location={location}>
          {RouterConfig.map((config, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Route exact key={`child-${index}`} {...config} />
          ))}
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
});

export default class AppRouter extends Component {
  render() {
    return (
      <React.Fragment>
        <HashRouter>
          <Routes />
        </HashRouter>
      </React.Fragment>
    );
  }
}
