import {combineReducers} from 'redux'
// import {postsByReddit, selectedReddit} from
// '../containers/Reddit/Reddit.redux';
import {recommendList} from '../components/recommend/Recommend.redux';

// const rootReducer = combineReducers({   postsByReddit,   selectedReddit })
const rootReducer = combineReducers({recommendList})
export default rootReducer