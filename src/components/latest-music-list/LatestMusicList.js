/**
 * Created by littlestone on 2017/5/22.
 */
import React, {Component} from 'react';
import LatestMusicItem from './LatestMusicItem';
import './LatestMusicList.less';

import {connect} from 'react-redux'
import {getLatestSongs} from './LatestMusicList.redux';

class LatestMusicList extends Component {
  componentWillMount() {
    console.log("LatestMusicList--->onGetLatestSong")
    this.props.onGetLatestSong();
  }
  render() {
    console.log("LatestMusicList  render ==>",this.props);
    const {latestSongs} = this.props.latestSongs;
    const len = latestSongs.length;
    if(len > 0) {
      return (
        <div className="latest-music-list">
          <div className="title">
            <h2>最新音乐</h2>
            <span><a href="">更多 ></a></span>
          </div>
        <div className="list-left pull-left">
          {latestSongs.map((item,i)=>{
            if(i<5){
            return (
              <LatestMusicItem key={i} index={i} song={item}/>
            )}
          })}
        </div>
          <div className="list-left pull-right">
            {latestSongs.map((item,i)=>{
              if(i>=5){
                return (
                  <LatestMusicItem key={i} index={i} song={item}/>
                )}
            })}
          </div>
        </div>
      )
    }else {
      return (<div></div>)
    }
  }
}
const mapStateToProps = state => {
  return {
    latestSongs: state.latestSongs
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    onGetLatestSong: () => dispatch(getLatestSongs)
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(LatestMusicList);