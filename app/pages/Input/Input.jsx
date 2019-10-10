import React, { Component } from 'react';
import './input.scss';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
    };
  }

  render() {
    return (
      <div className="Input">
        <Header back title="ios键盘适配1221111" />
        <div className="content">
          <div className="pad">
            <div>
              <input placeholder="Email" />
            </div>
            <div>
              <input placeholder="Email" />
            </div>
            <div>
              <input placeholder="Email" />
            </div>
            <div>
              <input placeholder="Email" />
            </div>
            <div>
              <input placeholder="Email" />
            </div>
            <div>
              <input placeholder="Email" />
            </div>
            <div>
              <input placeholder="Email" />
            </div>
            <div>
              <input placeholder="Email" />
            </div>
            <div>
              <input placeholder="Email" />
            </div>
            <div>
              <input placeholder="Email" />
            </div>
            <div>
              <input placeholder="Email" />
            </div>
            <div>
              <input placeholder="Email" />
            </div>
            <div>
              <input placeholder="Email" />
            </div>
            <div>
              <input placeholder="Email" />
            </div>
            <div>
              <input placeholder="Email" />
            </div>
            <div>
              <input placeholder="Email" />
            </div>
            <div>
              <input placeholder="Email" />
            </div>
            <div className="aaa">
              <input placeholder="Email" />
            </div>
            <div>
              <input placeholder="Email" />
            </div>
            <div>
              <input placeholder="Password" type="password" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Input;
