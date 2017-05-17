import axios from 'axios'
/**
 * constant 部分
 */
export const REQUEST_RECOMMEND_LIST = 'REQUEST_RECOMMEND_LIST';
export const RECEIVE_RECOMMEND_LIST = 'RECEIVE_RECOMMEND_LIST';
export const REQUEST_RECOMMEND_LIST_FAILED = 'REQUEST_RECOMMEND_LIST_FAILED';

/**
 * action
 */
export const requestList = () => ({type: REQUEST_RECOMMEND_LIST})

export const receiveList = (list) => {
  return {
    type: RECEIVE_RECOMMEND_LIST,
    list,
    receivedAt: Date.now()
  }
}

export const fetchList = dispatch => {
  dispatch(requestList());
  return axios
    .get('http://localhost:8080/personalized')
    .then(res => res.data.result)
    .then(res => dispatch(receiveList(res)))
    .then(res => console.log("请求结果==》" + res))
}

/**
 * reducer
 */

const initialState = {
  isFetching: false,
  list: []
}

export const recommendList = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_RECOMMEND_LIST:
      return {
        ...state
      }
    case RECEIVE_RECOMMEND_LIST:
      return {
        ...state,
        isFetching: true,
        list: action.list
      }
    default:
      return state;
  }
}