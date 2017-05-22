/**
 * Created by littlestone on 2017/5/22.
 */
import axios from 'axios';
const apiUrl = 'http://localhost:8080/';

/**
 * constant
 */

const FETCH_LATEST_SONG = 'FETCH_LATEST_SONG';
const RECEIVE_LATEST_SONG = 'RECEIVE_LATEST_SONG';
const FETCH_LATEST_SONG_FAILED = 'FETCH_LATEST_SONG_FAILED';

/**
 * action
 */
export const fetchLatestSong = () => {
  return {
    type: 'FETCH_LATEST_SONG',
    latestSongs: []
  }
};
export const receiveLatestSong = (latestSongs) => {
  return {
    type: 'RECEIVE_LATEST_SONG',
    latestSongs
  }
};

export const getLatestSongs = (dispatch) => {
  dispatch(fetchLatestSong());
  return axios.get(apiUrl + 'personalized/newsong')
    // .then(res => console.log("最新音乐", res))
    .then(res => dispatch(receiveLatestSong(res.data.result)))
};

/**
 * reducer
 * */


export const latestSongs = (state = {
  isFetching: false,
  latestSongs: []
}, action) => {
  switch (action.type) {
    case FETCH_LATEST_SONG:
      return {
        ...state
      };
    case RECEIVE_LATEST_SONG:
      return {
        ...state,
        isFetching: true,
        latestSongs: action.latestSongs
      };
    default:
      return state;
  }
};