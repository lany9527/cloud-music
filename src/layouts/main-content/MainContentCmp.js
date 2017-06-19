/**
 * Created by littlestone on 17-5-8.
 */
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './MainContentCmp.less';
import NavTabCmp from '../../components/nav-tab/NavTabCmp';

import Recommend from '../../views/recommend/Recommend';
import Singer from '../../views/singer/Singer';
import TopList from '../../views/toplist/TopList';
import PlayList from '../../views/playlist/PlayList';
import Dj from '../../views/dj/Dj';
import LatestMusic from '../../views/latest-music/LatestMusic';

import mainRouters from '../../routes/main';

export default class MainContentCmp extends Component {
  state = {
    images: [
      {
        src:
          'http://joymepic.joyme.com/article/uploads/20173/131492055617633695.jpeg',
        alt: '01',
      },
      {
        src:
          'http://joymepic.joyme.com/article/uploads/20173/131492052850501712.jpeg',
        alt: '02',
      },
      {
        src:
          'http://joymepic.joyme.com/article/uploads/20173/131492052854916390.jpeg',
        alt: '03',
      },
      {
        src:
          'http://joymepic.joyme.com/article/uploads/20173/131492052857105309.jpeg',
        alt: '04',
      },
    ],
    songList: [
      {
        pic:
          'http://joymepic.joyme.com/article/uploads/20173/131492055617633695.jpeg',
        listened: '65000',
        title: '不跨界的演员不是好歌手',
      },
      {
        pic:
          'http://joymepic.joyme.com/article/uploads/20173/131492055617633695.jpeg',
        listened: '65000',
        title: '不跨界的演员不是好歌手',
      },
      {
        pic:
          'http://joymepic.joyme.com/article/uploads/20173/131492052857105309.jpeg',
        listened: '620',
        title: '海边微风起，等风也等你',
      },
      {
        pic:
          'http://joymepic.joyme.com/article/uploads/20173/131492052854916390.jpeg',
        listened: '5620',
        title: '有没有一首歌，让你轻轻跟着哼',
      },
      {
        pic:
          'http://joymepic.joyme.com/article/uploads/20173/131492055617633695.jpeg',
        listened: '65000',
        title: '不跨界的演员不是好歌手',
      },
      {
        pic:
          'http://joymepic.joyme.com/article/uploads/20173/131492052857105309.jpeg',
        listened: '620',
        title: '海边微风起，等风也等你',
      },
      {
        pic:
          'http://joymepic.joyme.com/article/uploads/20173/131492052854916390.jpeg',
        listened: '5620',
        title: '有没有一首歌，让你轻轻跟着哼',
      },
      {
        pic:
          'http://joymepic.joyme.com/article/uploads/20173/131492055617633695.jpeg',
        listened: '65000',
        title: '不跨界的演员不是好歌手',
      },
      {
        pic:
          'http://joymepic.joyme.com/article/uploads/20173/131492052857105309.jpeg',
        listened: '620',
        title: '海边微风起，等风也等你',
      },
      {
        pic:
          'http://joymepic.joyme.com/article/uploads/20173/131492052854916390.jpeg',
        listened: '5620',
        title: '有没有一首歌，让你轻轻跟着哼',
      },
    ],
    mvList: [
      {
        pic:
          'http://joymepic.joyme.com/article/uploads/20173/131492052857105309.jpeg',
        listened: '620',
        title: '海边微风起，等风也等你',
      },
      {
        pic:
          'http://joymepic.joyme.com/article/uploads/20173/131492052854916390.jpeg',
        listened: '5620',
        title: '有没有一首歌，让你轻轻跟着哼',
      },
      {
        pic:
          'http://joymepic.joyme.com/article/uploads/20173/131492055617633695.jpeg',
        listened: '65000',
        title: '不跨界的演员不是好歌手',
      },
    ],
  };

  render() {
    return (
      <div className="outer-container">
        <div className="inner-container">
          <div className="content">
            <NavTabCmp />
            <div>
              <Route exact path="/" component={Recommend} />
              <Route path="/playlist" component={PlayList} />
              <Route path="/dj" component={Dj} />
              <Route path="/toplist" component={TopList} />
              <Route path="/singer" component={Singer} />
              <Route path="/latestmusic" component={LatestMusic} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
/**
 * <NavTabCmp/>
              <div>
                <Route exact path="/" component={Recommend}/>
                <Route path="/playlist" component={PlayList}/>
                <Route path="/dj" component={Dj}/>
                <Route path="/toplist" component={TopList}/>
                <Route path="/singer" component={Singer}/>
                <Route path="/latestmusic" component={LatestMusic}/>
              </div>
 */
