import React, { Component } from 'react';
import './media/iconfont.js';

class NumberKeyBoard extends Component {

  constructor (props) {
    super(props)
    this.state = {
      txt: props.value,
    }
    this.initInputREG(props.decimal);
  }

  initInputREG(decimal) {
    if (isNaN(decimal) || decimal < 0) {
      typeof decimal !== 'undefined' && console.warn('[NumberInput] decimal is not supported')
      this.inputREG = /^(([1-9]\d*)|0)(\.\d{0,2}?)?$/;
    } else {
      if (decimal === 0) {
        this.inputREG = /^(([1-9]\d*))$/;
      } else {
        this.inputREG = new RegExp(`^(([1-9]\\d*)|0)(\\.\\d{0,${decimal}}?)?$`);
      }
      console.log(this.inputREG);
    }
  }
  
  componentDidMount () {
    document.addEventListener('click', this.clickOther)
  }

  componentWillUnmount () {
    document.removeEventListener('click', this.clickOther)
  }

  clickOther = () => this.props.closeFn();

  // 数字键输入
  inputNumber = (e) => {
    const value = e.target.getAttribute("value");
    if (value !== 'down') {
      e.nativeEvent.stopImmediatePropagation();
      const { txt } = this.state;
      const newTxt = txt + value;
      if (this.inputREG.test(newTxt)) {
        const { max } = this.props;
        const finalTxt = newTxt < max ? newTxt : `${max}`;
        this.setState({ txt: finalTxt }, () => {
          this.props.getValue(finalTxt);
        });
      }
    }
  }

  // 功能键输入
  inputMenu = (e) => {
    e.nativeEvent.stopImmediatePropagation();
    const value = e.target.getAttribute("value");
    if (value === 'delete') {
      const { txt } = this.state;
      const newTxt = txt.substr(0, txt.length - 1)
      this.setState({ txt: newTxt }, () => {
        this.props.getValue(newTxt);
      });
    } else {
      this.props.confirmInput();
    }
  }

  tapActive = (e) => {
    const { target } = e;
    target.className = "active";
    this.target = target;
    this.startX = e.targetTouches[0].pageX;
    this.startY = e.targetTouches[0].pageY;
  }

  tapUnActive = (e) => {
    const { target } = e;
    target.className = "";
  }

  moveUnActive = (e) => {
    if (Math.abs(e.targetTouches[0].pageX - this.startX) > 20 || Math.abs(e.targetTouches[0].pageY - this.startY) > 20) {
      this.target.className = "";
    }
  }

  render () {
    return (
      <div className="board-box">
        <div className="board-left" onClick={this.inputNumber} onTouchStart={this.tapActive} onTouchEnd={this.tapUnActive} onTouchMove={this.moveUnActive}>
          <div value="1">1</div><div value="2">2</div><div value="3">3</div>
          <div value="4">4</div><div value="5">5</div><div value="6">6</div>
          <div value="7">7</div><div value="8">8</div><div value="9">9</div>
          <div value=".">.</div><div value="0">0</div><div value="down">
            <svg className="icon icon-keyboardhide" aria-hidden="true">
              <use xlinkHref="#icon-keyboardhide"></use>
            </svg>
          </div>
        </div>
        <div className="board-right" onClick={this.inputMenu} onTouchStart={this.tapActive} onTouchEnd={this.tapUnActive} onTouchMove={this.moveUnActive}>
          <div value="delete">
            <svg className="icon icon-delete" aria-hidden="true">
              <use xlinkHref="#icon-delete"></use>
            </svg>
          </div>
          <div value="confirm">确定</div>
        </div>
      </div>
    )
  }
}

export default NumberKeyBoard;