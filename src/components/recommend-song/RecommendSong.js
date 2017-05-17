/**
 * Created by littlestone on 17-5-9.
 */
import React, {Component} from 'react';
import './RecommendSong.less';

class RecommendSong extends Component {
  render() {
    return (
      <div className="recommend-song">
        <div className="recommend-title">
          <h2>推荐歌单</h2>
          <span><a href="">更多 ></a></span>
        </div>
        <div className="recommend-item-wrap">
          {
            this.props.songList.map((item, i)=> {
              if(i<5) {
                return (
                  <div className="recommend-item" key={i}>
                    <div className="image-wrap">
                      <span className="copy-writer">{item.copywriter}</span>
                      <span className="play-count">{parseInt(item.playCount)}</span>
                      <img src={item.picUrl} alt={item.title}/>
                    </div>
                    <p className="item-title">{item.name}</p>
                  </div>
                )
              }
            })
          }
        </div>
      </div>
    )
  }
}
export default RecommendSong;