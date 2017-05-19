import axios from 'axios';
const apiUrl = 'http://localhost:8080/';

/**
 * constant 部分
 */
const LOGIN_START = 'LOGIN_START';
const LOGIN_SECCESS = 'LOGIN_SECCESS';
const LOGIN_FAILED = 'LOGIN_FAILED';

/**
 * action
 */

export const loginStart = () => {
  return {type: LOGIN_START, userInfo: {}}
};

export const loginSuccess = (userInfo) => {
  return {type: LOGIN_SECCESS, userInfo: userInfo}
};
export const loginFailed = () => {
  return {type: LOGIN_FAILED, userInfo: {}}
};
export const onLogin = (user) => (dispatch) => {
  console.log("user-->" + user.username +"---"+user.password);
  dispatch(loginStart())
  return (
  axios
    .get(apiUrl + `login/cellphone?phone=${user.username}&password=${user.password}`)
    .then(res => console.log("登陆成功-->", res.data))
    .then(res => dispatch(loginSuccess(res.data)))
    .catch(err => dispatch(loginFailed(err)))
  )
};

/**
 * reducer
 */
const initialState = {
  islanding: false,
  userInfo: []
}

export const userLogin = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state
      }
    case LOGIN_SECCESS:
      return {
        ...state,
        islanding: true,
        userInfo: action.userInfo
      }
    default:
      return state;
  }
};