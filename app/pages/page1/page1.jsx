import React, { Component, Fragment } from 'react';
import './page1.scss';
import { Link } from 'react-router-dom';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { sha256, sha224 } from 'js-sha256';

import EdSwiper from 'components/Swiper/Swiper';

class Page1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      aa: '中文',
      bb: '',
      list: [],
    };

  }

  componentDidMount() {
    console.log(111111)
    this.setState({
        bb: sha256('中文'),
        list: [
          { name: 'item1', rate: '0.48' },
          { name: 'item3', rate: '0.59' },
          { name: 'item2', rate: '0.48' },
          { name: 'item4', rate: '0.59' },
          { name: 'item6', rate: '0.59' },
        ]
      }
    )
  }

  add = () => {
    this.setState({
        list: [
          { name: 'item1', rate: '0.48' },
          { name: 'item3', rate: '0.59' },
          { name: 'item2', rate: '0.48' },
          { name: 'item4', rate: '0.59' },
          { name: 'item6', rate: '0.59' },
          { name: 'item8', rate: '0.59' },
          { name: 'item12', rate: '0.59' },
        ]
      }
    )
  }

  render() {
    const { list } = this.state;
    return (
      <div id="home">
        <Header title="page1" />

        <div className="content">
          page1
          <br />
          aa:{this.state.aa}
          <br />
          bb（aa用sha256加密之后）:
          <br />
          {this.state.bb}
          <button onClick={this.add}>aaa</button>
          <EdSwiper>
            {
              list.map((x, y) => {
                console.log('x', x);
                return <div className="swiper-slide">
                  <div className="item">{x.name}</div>
                </div>
              })
            }
          </EdSwiper>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Page1;

