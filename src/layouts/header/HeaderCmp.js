/**
 * Created by littlestone on 17-5-6.
 */
import React, { Component } from 'react';
import './HeaderCmp.less';

class HeaderCmp extends Component {
  render() {
    return (
      <div className="nav-wrap">
        <div className="nav-title">
          {/*<h1>网易云音乐</h1>*/}
          <img src="logo.png" alt="网易云音乐"/>
        </div>
        <div className="nav-btn">
          <span>&lt;</span>
          <span>&gt;</span>
        </div>
        <div className="search-box">
          <input type="text" placeholder="搜索音乐, 歌手, 歌词, 用户"/>
        </div>
        <div className="nav-user">
          <span className="icon-user"></span>
          未登录
        </div>
        <div className="nav-function">
          <div className="skin">
            <span className="icon-skin"></span>
          </div>
          <div className="msg">
            <span className="icon-mail"></span>
          </div>
          <div className="setting">
            <span className="icon-setting"></span>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderCmp;