/**
 * Created by littlestone on 17-5-8.
 */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './NavTabCmp.less';

export default class NavTabCmp extends Component {
  render() {
    return (
      <div className="nav-tab-wrap">
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active">个性推荐</NavLink>
          </li>
          <li>
            <NavLink to="/playlist" activeClassName="active">歌单</NavLink>
          </li>
          <li>
            <NavLink to="/dj" activeClassName="active">主播电台</NavLink>
          </li>
          <li>
            <NavLink to="/toplist" activeClassName="active">排行榜</NavLink>
          </li>
          <li>
            <NavLink to="/singer" activeClassName="active">歌手</NavLink>
          </li>
          <li>
            <NavLink to="/latestmusic" activeClassName="active">最新音乐</NavLink>
          </li>
        </ul>
      </div>
    )
  }
}