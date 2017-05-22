/**
 * Created by littlestone on 2017/5/22.
 */
import React, {Component} from 'react';
import './LatestMusicItem.less';
class LatestMusicItem extends Component {
  componentWillReceiveProps() {
    console.log("componentWillReceiveProps")
  }
  render() {
    const {index,song} = this.props;
    console.log("LatestMusicItem==>",this.props);
    return (
      <div className={parseInt(index+1)%2===0?"latest-music-item left-shadow":"latest-music-item" || parseInt(index+1)%2!==0?"latest-music-item right-shadow":"latest-music-item"}>
        <p className="music-num">{parseInt(index+1) < 10 ? ('0'+parseInt(index+1)): parseInt(index+1)}</p>
        <img className="music-pic" src={song.song.album.picUrl} alt=""/>
        <div className="music-info">
          <p className="music-name">{song.name}
            <span>({song.song.album.name})</span>
          </p>
          <p className="music-artist">{song.song.artists[0].name}</p>
        </div>
      </div>
    )
  }
};

export default LatestMusicItem;