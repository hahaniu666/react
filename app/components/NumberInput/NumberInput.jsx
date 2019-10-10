/*
 * 基于React的 数字键盘输入控件 需要react版本16+
 * <NumberInput
 *  value={number & string} => 传入即受控
 *  placeHolder={string} => placeholder 默认'请输入'
 *  disabled={boolean} => 是否可输入 默认false
 *  decimal={number} => 小数位数 默认2
 *  onChange={fn} => 输入回调
 *  onRealChange={fn} => 受控时的输入回调
 *  onBlur={fn} => 失焦回调
 * />
 */

import React, { Component } from 'react';
import NumberKeyBoard from './NumberKeyBoard';
import ReactDOM from 'react-dom';
import './_NumberInput.scss';

const defaultMaxValue = 99999999999.99 // 默认最大输入值

class NumberInput extends Component {
  constructor (props) {
    super(props)
    this.container = document.createElement('div');
    this.isControlled = typeof props.value !== 'undefined'; // 是否受控
    document.body.appendChild(this.container);
    this.state = {
      number: typeof props.value !== 'undefined' ? `${props.value}` : "",
      isShowKeyBoard: false,
      disabled: props.disabled || false,
    }
  }

  componentWillReceiveProps (nextProps) {
    const { disabled, value } = nextProps;
    if (this.isControlled) {
      const { insideValue } = this;
      if (
        !disabled
        && Number(value) === Number(insideValue)
        && (
          /\./.test(value) !== /\./.test(insideValue) // 受控时 跨小数点
            ||
          (insideValue.substr(-1) === '0') //  受控时 末尾是0
        )
        || insideValue === ''
      ) { // 受控小数点以及0处理
        this.setState({disabled, number: insideValue});
      } else {
        this.setState({disabled, number: `${value}`});
      }
    }
   }

   componentWillUnmount () {
    document.body.removeChild(this.container);
   }

  getValue = value => {
    if (this.isControlled) {
      this.insideValue = value;
      typeof this.props.onChange === 'function' && this.props.onChange(Number(value));
      typeof this.props.onRealChange === 'function' && this.props.onRealChange(value);
    } else {
      this.setState({ number: value }, () => {
        typeof this.props.onChange === 'function' && this.props.onChange(Number(value));
        typeof this.props.onRealChange === 'function' && this.props.onRealChange(value);
      });
    }
  }

  showKeyBoard = (e) => {
    if (!this.state.disabled) {
      e.nativeEvent.stopImmediatePropagation();
      this.setState({isShowKeyBoard: true});
    }
  }

  closeKeyBoard = () => {
    this.setState({isShowKeyBoard: false}, () => {
      typeof this.props.onBlur === 'function' && this.props.onBlur();
    });
  }

  confirmInput = () => {
    this.closeKeyBoard();
  }

  render () {
    const { isShowKeyBoard, number, disabled } = this.state;
    return (
      <div className="number-input-box">
        {
          !disabled &&
          <div className="input-placeholder">
            {`${number}` ? '' : (this.props.placeHolder || '请输入')}
          </div>
        }
        <div>{this.props.children}</div>
        <div className={"input-area" + (isShowKeyBoard ? " focus" : "") + (disabled ? " disabled" : "")} onClick={this.showKeyBoard}>
          {(disabled && Number(number) === 0) ? '0' : number}
        </div>
        {
          isShowKeyBoard &&
          ReactDOM.createPortal(
            <NumberKeyBoard
              value={number || ""}
              getValue={this.getValue}
              confirmInput={this.confirmInput}
              closeFn={this.closeKeyBoard}
              decimal={this.props.decimal}
              max={this.props.max || defaultMaxValue}
            />,
            this.container
          )
        }
      </div>
    )
  }
}

export default NumberInput;
