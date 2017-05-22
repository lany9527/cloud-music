import {combineReducers} from 'redux'
// import {postsByReddit, selectedReddit} from
// '../containers/Reddit/Reddit.redux';
import {bannersReducer,recommendSong,recommendMv} from '../views/recommend/Recommend.redux';
import {userLogin} from '../components/login-form/LoginFormRedux';
import {latestSongs} from '../components/latest-music-list/LatestMusicList.redux';
// const rootReducer = combineReducers({   postsByReddit,   selectedReddit })
const rootReducer = combineReducers({
  recommendSong,
  recommendMv,
  bannersReducer,
  userLogin,
  latestSongs
});
export default rootReducer;