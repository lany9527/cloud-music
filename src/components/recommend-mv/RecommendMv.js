/**
 * Created by littlestone on 17-5-9.
 */
import React, {Component} from 'react';
import './RecommendMv.less';

class RecommendMv extends Component {
  render() {
    return (
      <div className="recommend-mv">
        <div className="recommend-title">
          <h2>推荐MV</h2>
          <span><a href="">更多 ></a></span>
        </div>
        <div className="recommend-item-wrap">
          {
            this.props.mvList.map((item, i)=> {
              if(i<3) {
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
export default RecommendMv;