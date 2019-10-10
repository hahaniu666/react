/*
 * 基于Swiper的 轮播组件，
 * <EdSwiper>
 *    传入的参数，由于是children渲染模式，所以，此处需要在外面写好布局，然后传进来即可、如下，
 *     {
 *       list.map((x, y) => {
 *         return <div className="swiper-slide">
 *           <div className="item">{x.name}</div>
 *         </div>
 *       })
 *     }
 * </EdSwiper>
 * 如写死测试可以这样写
 * <EdSwiper>
 *    <div className="swiper-slide">
 *      <div className="item">测试条目</div>
 *    </div>
 * <div className="swiper-slide">
 *      <div className="item">测试条目</div>
 *    </div>
 * </EdSwiper>
 */

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Swiper from 'swiper/js/swiper.js'
import 'swiper/css/swiper.css'
import './Swiper.scss';

class EdSwiper extends Component {

  // 渲染完dom，创建swiper组件
  componentDidMount() {
    // 先创建一个swiper组件，使其成功展示，并使 creatSwiper()方法中的 this.mySwiper.destroy() 可用
    this.mySwiper = new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: 2,
      spaceBetween: 10,
      slidesPerGroup: 2,
      loopFillGroupWithBlank: true,
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
      },
      observer: true,
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }

  // 数据更新，同步更新组件
  componentDidUpdate() {
    // swiper有一个update方法，用于更新组件，但是使用会导致loop循环相关方法失效
    this.creatSwiper()
  }

  // 创建组件
  creatSwiper = () => {
    // 先销毁组件，然后在创建，否则会有bug
    this.mySwiper.destroy();

    this.mySwiper = new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: 2,
      spaceBetween: 10,
      slidesPerGroup: 2,
      loopFillGroupWithBlank: true,
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
      },
      observer: true,
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }

  render() {
    // 五个菜单页其实可以用一个循环
    return (
      <div className="EdSwiper">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {this.props.children}
          </div>
          <div className="swiper-pagination"></div>

          {/*<div className="swiper-button-prev"></div>*/}
          {/*<div className="swiper-button-next"></div>*/}

          {/*<div className="swiper-scrollbar"></div>*/}
        </div>
      </div>
    );
  }
}

export default EdSwiper;
