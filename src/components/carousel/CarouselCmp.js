/**
 * Created by littlestone on 17-5-8.
 */
import React, { Component } from 'react';
import './CarouselCmp.less';
import CarouselItem from './CarouselItem';
import IndicatorCmp from './IndicatorCmp';
import ArrowsCmp from './ArrowsCmp';

export default class CarouselCmp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0 //当前轮播图索引
    }
  }
  playTag = null;

  /**
   * 轮播逻辑
   * 
   * @param {any} index //轮播图索引
   * 
   * @memberof CarouselCmp
   */
  slide(index) {
    let nextIndex = this.state.currentIndex + index; // nextIndex 下一轮播图的索引

    if (nextIndex < 0) {
      nextIndex = nextIndex + this.props.items.length;
    }
    if (nextIndex >= this.props.items.length) {
      nextIndex = nextIndex - this.props.items.length;
    }
    this.setState({currentIndex: nextIndex});
  }
  play() {
    if (this.props.autoplay) {
      this.playTag = setInterval(()=>{
        this.slide(1)
      },this.props.delay * 1000)
    }
  }
  pausePlay() {
    clearInterval(this.playTag);
  }
  componentDidMount() {
    this.play()
  }
  componentWillUnmount() {
    console.log("CarouselCmp 组件移除和销毁之前调用【componentWillUnmount】,开始清理工作！");
    clearInterval(this.playTag);
  }
  render() {
    let len = this.props.items.length;

    let indicatorNode = <IndicatorCmp turn={(i)=>{this.slide(i)}} count={len} curIndex={this.state.currentIndex}/>;
    let arrowsNode = <ArrowsCmp turn={(i)=>{this.slide(i)}} />;

    return (
      <div className="carousel-wrap"
       onMouseOver={()=>{
         this.props.pause?this.pausePlay():null
       }}
       onMouseOut={()=>{
         this.props.pause?this.play():null
       }}>
        <ul style={{width: len*this.props.width, left: -100*this.state.currentIndex+'%'}}>
          {this.props.items.map((item, i) => {
            return(
              <CarouselItem key={i} item={item} />
            )
          })}
        </ul>
        {this.props.indicator?indicatorNode:null}
        {this.props.arrows?arrowsNode:null}
      </div>
    )
  }
}