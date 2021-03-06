import React, { Component } from "react";
// import Reddit from './containers/Reddit/Reddit';
import { Router, Route } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

import HeaderCmp from "./layouts/header/HeaderCmp";
import SiderCmp from "./layouts/sider/SiderCmp";
import MainContentCmp from "./layouts/main-content/MainContentCmp";
// import Singer from './components/singer/Singer';
// import TopList from './components/toplist/TopList';
// import PlayList from './components/playlist/PlayList';
// import Dj from './components/dj/Dj';
// import LatestMusic from './components/latest-music/LatestMusic';

import "./App.less";
const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <div className="app-wrap">
        <HeaderCmp />
        <Router history={history}>
          <div>
            <SiderCmp />
            <MainContentCmp />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

/**
 * 
 * <Router history={history}>
          <div>
            <Route exact path="/" component={MainContentCmp}/>
            <Route path="/playlist" component={PlayList}/>
            <Route path="/dj" component={Dj}/>
            <Route path="/toplist" component={TopList}/>
            <Route path="/singer" component={Singer}/>
            <Route path="/latestmusic" component={LatestMusic}/>
          </div>
        </Router>
 */
