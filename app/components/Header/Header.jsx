import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
  handleClick = () => {
    const backFn = this.props.backFn;
    if (typeof backFn === 'function') {
      backFn();
    } else {
      window.history.back();
    }
  }

  render() {
    return (
      <header>
        { this.props.back && <span className="icon-back" onClick={ this.handleClick }></span> }
        {
          this.props.children ?
          this.props.children :
          <div className="title">{this.props.title}</div>
        }
      </header>
    );
  }
}

export default Header;
