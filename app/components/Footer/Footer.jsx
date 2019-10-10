import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.scss';

class Footer extends Component {
  componentWillMount() {
    const linklist = ['#/home', '#/page1', '#/page2', '#/page3'];
    // console.log(location.hash);
    const index = linklist.findIndex(value => value === window.location.hash);
    const arr = Array(5).fill('');
    arr[index] = '1';
  }

  render() {
    // 五个菜单页其实可以用一个循环
    return (
      <div className="footer">
        <div className="tab-normal" id="homePage">
          <NavLink exact to={{ pathname: '/Home' }}>
            <div className="img">
              <i className="icon icon-home"></i>
            </div>
            <div className="tip">首页</div>
          </NavLink>
        </div>
        <div className="tab-normal" id="quotationPage">
          <NavLink to="/page1">
            <div className="img">
              <i className="icon icon-quote"></i>
            </div>
            <div className="tip">page1</div>
          </NavLink>
        </div>
        <div className="tab-normal" id="queryPage">
          <NavLink to="/page2">
            <div className="img">
              <i className="icon icon-query"></i>
            </div>
            <div className="tip">page2</div>
          </NavLink>
        </div>
        <div className="tab-normal" id="minePage">
          <NavLink to="/page3">
            <div className="img">
              <i className="icon icon-me"></i>
            </div>
            <div className="tip">page3</div>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Footer;
