import React, { Component } from "react";
import { Route } from "react-router-dom";

import Recommend from "../views/recommend/Recommend";
import Singer from "../views/singer/Singer";
import TopList from "../views/toplist/TopList";
import PlayList from "../views/playlist/PlayList";
import Dj from "../views/dj/Dj";
import LatestMusic from "../views/latest-music/LatestMusic";

const mainRouters = () => (
  <div>
    <Route exact path="/" component={Recommend} />
    <Route path="/playlist" component={PlayList} />
    <Route path="/dj" component={Dj} />
    <Route path="/toplist" component={TopList} />
    <Route path="/singer" component={Singer} />
    <Route path="/latestmusic" component={LatestMusic} />
  </div>
);

export default mainRouters;
