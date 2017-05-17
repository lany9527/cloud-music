import axios from 'axios';
const initialState = {
  loading: true,
  error: false,
  songList: []
};

// constant

const LOAD_SONGLIST = 'LOAD_SONGLIST';
const LOAD_SONGLIST_SUCCESS = 'LOAD_SONGLIST_SUCCESS';
const LOAD_SONGLIST_FAILED = 'LOAD_SONGLIST_FAILED';

// action creator

export function loadSongList() {
  return {type: LOAD_SONGLIST}
}
export function loadSongListSuccess(json) {
  return {
    type: LOAD_SONGLIST_SUCCESS,
    songList: json
  }
}
export function loadSongListFailed() {
  return {type: LOAD_SONGLIST_FAILED}
}

export function fetchSongList() {
  return dispatch => {
    return axios.get('http://localhost:8080/personalized')
    .then(res=>{
      console.log(res);
    })
  }
}

// reducer

export default function songList(state = initialState, action) {
  switch (action.type) {
    case LOAD_SONGLIST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }

    case LOAD_SONGLIST_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        songList: action.payload,
      };
    }

    case LOAD_SONGLIST_FAILED: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    default:
      return state;
  }
}