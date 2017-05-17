/**
 * Created by littlestone on 17-5-8.
 */
import React, {Component} from 'react';
import './SiderCmp.less';


class SiderCmp extends Component {
  render() {
    return (
      <div className="sider-wrap">
        <div className="recommend">
          <h2>推荐</h2>
          <ul>
            <li>
              <a className="active">
                <span className="icon-music"></span>
                发现音乐
              </a>
            </li>
            <li>
              <a href="">
                <span className="icon-fm"></span>
                私人FM
              </a>
            </li>
            <li>
              <a href="">
                <span className="icon-mv"></span>
                MV
              </a>
            </li>
            <li>
              <a href="">
                <span className="icon-friends"></span>
                朋友
              </a>
            </li>
          </ul>
          <h2>我的音乐</h2>
          <ul>
            <li>
              <a href="">
                <span className="icon-music"></span>
                本地音乐
              </a>
            </li>
            <li>
              <a href="">
                <span className="icon-fm"></span>
                下载管理
              </a>
            </li>
          </ul>
          <h2>创建的歌单</h2>
          <ul>
            <li>
              <a href="">
                <span className="icon-music"></span>
                我喜欢的音乐
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
export default SiderCmp;
