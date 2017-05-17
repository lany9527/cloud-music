import {combineReducers} from 'redux'
// import {postsByReddit, selectedReddit} from
// '../containers/Reddit/Reddit.redux';
import {bannersReducer,recommendSong,recommendMv} from '../views/recommend/Recommend.redux';

// const rootReducer = combineReducers({   postsByReddit,   selectedReddit })
const rootReducer = combineReducers({
  recommendSong,
  recommendMv,
  bannersReducer
});
export default rootReducer;