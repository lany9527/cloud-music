/**
 * Created by littlestone on 17-5-8.
 */
import React, { Component } from 'react';
import './CarouselItem.less';

export default class CarouselItem extends Component {
 
  render() {
    let {item} = this.props;
    // console.log("CarouselItem==>",this.props);
    // let width = 100/count + '%';
    return (
      <li className="carousel-item">
        <img src={item.pic} alt={item.typeTitle} />
      </li>
    )
  }
}