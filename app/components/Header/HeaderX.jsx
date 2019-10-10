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
        {
          this.props.back && (
            this.props.cancel ?
              <span className="btn-cancel" onClick={this.handleClick} /> :
              <span className="icon-back" onClick={this.handleClick} />
          )
        }
        <div className="title">{this.props.title}</div>
        {
          this.props.children ?
            this.props.children : ''
        }
      </header>
    );
  }
}

export default Header;
