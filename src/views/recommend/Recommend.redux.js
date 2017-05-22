import axios from 'axios';
const apiUrl = 'http://localhost:8080/';


/**
 * constant 部分
 */
//////////////// banner  /////////////
export const FETCH_BANNERS_START = 'FETCH_BANNERS_START';
export const FETCH_BANNERS_SUCCESS = 'FETCH_BANNERS_SUCCESS';
export const FETCH_BANNERS_REJECTED = 'FETCH_BANNERS_REJECTED';

//////////////// 推荐歌单 ////////////
export const REQUEST_RECOMMEND_SONG = 'REQUEST_RECOMMEND_SONG';
export const RECEIVE_RECOMMEND_SONG = 'RECEIVE_RECOMMEND_SONG';
export const REQUEST_RECOMMEND_SONG_FAILED = 'REQUEST_RECOMMEND_SONG_FAILED';

/////////////// 推荐MV //////////////
export const REQUEST_RECOMMEND_MV = 'REQUEST_RECOMMEND_MV';
export const RECEIVE_RECOMMEND_MV = 'RECEIVE_RECOMMEND_MV';
export const REQUEST_RECOMMEND_MV_FAILED = 'REQUEST_RECOMMEND_MV_FAILED';

/**
 * action
 */
///////////// banner /////////////////
export const fetchBannerStart = () => {
  return {
    type: 'FETCH_BANNERS_START',
    banners: []
  }
};

export const fetchBannerSuccess = (banners) => {
  return {
    type: FETCH_BANNERS_SUCCESS,
    banners
  }
};
export const fetchBannerRejected = (banners) => {
  return {
    type: FETCH_BANNERS_REJECTED,
    banners
  }
};
export const fetchBanners = (dispatch) => {
  dispatch(fetchBannerStart());
  return axios.get(apiUrl + 'banner')
    .then(res => res.data.banners)
    .then(res => dispatch(fetchBannerSuccess(res)))
    .catch(err => dispatch(fetchBannerRejected(err)));
};

////////////// 推荐歌单 ////////////////
export const requestList = () => ({type: REQUEST_RECOMMEND_SONG})

export const receiveList = (song) => {
  return {
    type: RECEIVE_RECOMMEND_SONG,
    song,
    receivedAt: Date.now()
  }
}

export const fetchSong = dispatch => {
  // dispatch(requestList());
  return axios.get(apiUrl + 'recommend/resource?uid=479373404',{withCredentials:true})  
    // .then(res => dispatch(receiveList(res.data.recommend)))
    .then(res => {
      axios.get(apiUrl + 'personalized').then(_res => {
        // console.log("不带cookie==》",_res.data.result);
        // console.log("带cookie==》",res.data.recommend);
        const songLis = [..._res.data.result, ...res.data.recommend];
        dispatch(receiveList(songLis))
      })
    })
};

////////////// 推荐MV ////////////////
export const requestMv = () => ({type: REQUEST_RECOMMEND_MV})

export const receiveMv = (mv) => {
  return {
    type: RECEIVE_RECOMMEND_MV,
    mv,
    receivedAt: Date.now()
  }
}

export const fetchMv = dispatch => {
  dispatch(requestMv());
  return axios
    .get(apiUrl + 'personalized/mv')
    .then(res => res.data.result)
    .then(res => dispatch(receiveMv(res)))
};

/**
 * reducer
 */
////////// banner /////////////

export const bannersReducer = (state = {
  isFetching: false,
  banners: []
}, action) => {
  switch (action.type) {
    case FETCH_BANNERS_SUCCESS:
      return {
        ...state,
        banners: action.banners
      };
    default:
      return state;
  }
};

////////// 推荐歌单  ////////////
const initialState = {
  isFetching: false,
  song: []
}

export const recommendSong = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_RECOMMEND_SONG:
      return {
        ...state
      }
    case RECEIVE_RECOMMEND_SONG:
      return {
        ...state,
        isFetching: true,
        song: action.song
      }
    default:
      return state;
  }
};

//////////////// 推荐MV /////////////////
export const recommendMv = (state = {isFetching: false,
  mv: []}, action) => {
  switch (action.type) {
    case REQUEST_RECOMMEND_MV:
      return {
        ...state
      }
    case RECEIVE_RECOMMEND_MV:
      return {
        ...state,
        isFetching: true,
        mv: action.mv
      }
    default:
      return state;
  }
}