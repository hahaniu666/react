import React, { Component } from 'react';
import Header from 'components/Header/Header';
import NumberInput from 'components/NumberInput/NumberInput';

const style = {
  padding: '0 10px',
  height: '45px',
  lineHeight: '45px',
  fontSize: '14px',
};

const style2 = {
  display: 'inline-block',
  width: '160px',
  fontSize: '14px',
  padding: '0 10px',
  height: '45px',
  lineHeight: '45px',
};

class NumberInputEg extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header back title="数字键盘" />
        <div style={{ fontSize: '12px', padding: '10px', color: '#565656' }}>单行输入</div>
        <div style={style}>
          <NumberInput>
            交易金额
          </NumberInput>
        </div>
        <div style={{ fontSize: '12px', padding: '10px', color: '#565656' }}>行内输入</div>
        <div style={style2}>
          <NumberInput />
        </div>
      </div>
    );
  }
}

export default NumberInputEg;
