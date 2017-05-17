/**
 * Created by littlestone on 17-5-8.
 */
import React, {Component} from 'react';
// import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {fetchList} from './Recommend.redux';

import CarouselCmp from '../carousel/CarouselCmp';
import RecommendSong from '../recommend-song/RecommendSong';
import RecommendMv from '../recommend-mv/RecommendMv';

class RecommendCmp extends Component {
  state = {
    images: [
      {
        src: 'http://joymepic.joyme.com/article/uploads/20173/131492055617633695.jpeg',
        alt: '01'
      }, {
        src: 'http://joymepic.joyme.com/article/uploads/20173/131492052850501712.jpeg',
        alt: '02'
      }, {
        src: 'http://joymepic.joyme.com/article/uploads/20173/131492052854916390.jpeg',
        alt: '03'
      }, {
        src: 'http://joymepic.joyme.com/article/uploads/20173/131492052857105309.jpeg',
        alt: '04'
      }
    ],
    songList: [
      {
        pic: 'http://joymepic.joyme.com/article/uploads/20173/131492055617633695.jpeg',
        listened: '65000',
        title: '不跨界的演员不是好歌手'
      }, {
        pic: 'http://joymepic.joyme.com/article/uploads/20173/131492055617633695.jpeg',
        listened: '65000',
        title: '不跨界的演员不是好歌手'
      }, {
        pic: 'http://joymepic.joyme.com/article/uploads/20173/131492052857105309.jpeg',
        listened: '620',
        title: '海边微风起，等风也等你'
      }, {
        pic: 'http://joymepic.joyme.com/article/uploads/20173/131492052854916390.jpeg',
        listened: '5620',
        title: '有没有一首歌，让你轻轻跟着哼'
      }, {
        pic: 'http://joymepic.joyme.com/article/uploads/20173/131492055617633695.jpeg',
        listened: '65000',
        title: '不跨界的演员不是好歌手'
      }, {
        pic: 'http://joymepic.joyme.com/article/uploads/20173/131492052857105309.jpeg',
        listened: '620',
        title: '海边微风起，等风也等你'
      }, {
        pic: 'http://joymepic.joyme.com/article/uploads/20173/131492052854916390.jpeg',
        listened: '5620',
        title: '有没有一首歌，让你轻轻跟着哼'
      }, {
        pic: 'http://joymepic.joyme.com/article/uploads/20173/131492055617633695.jpeg',
        listened: '65000',
        title: '不跨界的演员不是好歌手'
      }, {
        pic: 'http://joymepic.joyme.com/article/uploads/20173/131492052857105309.jpeg',
        listened: '620',
        title: '海边微风起，等风也等你'
      }, {
        pic: 'http://joymepic.joyme.com/article/uploads/20173/131492052854916390.jpeg',
        listened: '5620',
        title: '有没有一首歌，让你轻轻跟着哼'
      }

    ],
    mvList: [
      {
        pic: 'http://joymepic.joyme.com/article/uploads/20173/131492052857105309.jpeg',
        listened: '620',
        title: '海边微风起，等风也等你'
      }, {
        pic: 'http://joymepic.joyme.com/article/uploads/20173/131492052854916390.jpeg',
        listened: '5620',
        title: '有没有一首歌，让你轻轻跟着哼'
      }, {
        pic: 'http://joymepic.joyme.com/article/uploads/20173/131492055617633695.jpeg',
        listened: '65000',
        title: '不跨界的演员不是好歌手'
      }
    ]
  };
  
  componentDidMount() {
    this.props.onFetchList();
    console.log("RecommendCmp -- componentDidMount")
    
  }
  render() {
    console.log("render",this.props);
    return (
      <div className="recommend">
        <CarouselCmp
          items={this.state.images}
          speed={1.2}
          delay={2}
          pause={true}
          autoplay={true}
          indicator={true}
          arrows={true}
          width={764}/>
        <RecommendSong songList={this.props.list}/>
        <RecommendMv songList={this.state.mvList}/>
        <RecommendMv songList={this.state.mvList}/>
        <RecommendMv songList={this.state.mvList}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log("mapStateToProps==>",state.recommendList);
  return {
    list: state.recommendList.list
  }
};

const mapDispatchToProps = (dispatch) => {
  console.log("mapDispatchToProps");
  return {
    onFetchList: () => dispatch(fetchList)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RecommendCmp)