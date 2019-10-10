import React, { Component, Fragment } from 'react';
import './Home.scss';
import { Link } from 'react-router-dom';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import Swiper from 'swiper/js/swiper.js'
import 'swiper/css/swiper.css'

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [0, 1],
    }
  }

  componentDidMount() {
    // new Swiper('.swiper-container', {
    //   loop: true,  //循环
    //   autoplay: {   //滑动后继续播放（不写官方默认暂停）
    //     disableOnInteraction: false,
    //   },
    //   pagination: {  //分页器
    //     el: '.swiper-pagination'
    //   }
    // })
    this.setState({
        list: [
          { name: '积利金1个月定期', rate: '0.48' },
          { name: '积利金3个月定期', rate: '0.59' },
          { name: '积利金2个月定期', rate: '0.48' },
          { name: '积利金4个月定期', rate: '0.59' },
          { name: '积利金6个月定期', rate: '0.59' },
        ]
      },
      () => {
        new Swiper('.swiper-container', {
          loop: true,
          slidesPerView: 2,
          spaceBetween: 10,
          slidesPerGroup: 2,
          loopFillGroupWithBlank: true,
          autoplay: {
            disableOnInteraction: false,
          },
          pagination: {
            el: '.swiper-pagination'
          }
        })
      }
    )
  }

  render() {
    const { list } = this.state;
    console.log(list);
    return (
      <div id="home">
        <Header title="首页" />

        <div className="content">
          <ul>
            <li><Link to={"NumberInputEg"}>数字键盘组件</Link></li>
            <li><Link to={"InputEg"}>键盘ios适配</Link></li>
          </ul>

          {/*<div className="swiper-container">*/}
          {/*  <div className="swiper-wrapper">*/}

          {/*    {*/}
          {/*      list.map((x, y) => {*/}
          {/*        console.log('x',x);*/}
          {/*        return <div className="swiper-slide">*/}
          {/*          <div className="item">{x.name}</div>*/}
          {/*          /!*<div className="item">2</div>*!/*/}
          {/*        </div>*/}
          {/*      })*/}
          {/*    }*/}

          {/*  </div>*/}
          {/*  <div className="swiper-pagination"></div>*/}

          {/*  /!*<div className="swiper-button-prev"></div>*!/*/}
          {/*  /!*<div className="swiper-button-next"></div>*!/*/}

          {/*  /!*<div className="swiper-scrollbar"></div>*!/*/}
          {/*</div>*/}
        </div>

        <Footer />
      </div>
    );
  }
}

export default Home;

