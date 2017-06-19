/**
 * Created by littlestone on 17-5-6.
 */
import React, {Component} from 'react';
import './HeaderCmp.less';
import {connect} from 'react-redux'
import {onLogin} from '../../components/login-form/LoginFormRedux';
import Modal from '../../components/modal/Modal';
import LoginForm from '../../components/login-form/LoginForm';
class HeaderCmp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      animation: 'zoom'
    }
  }

  componentWillMount() {
    document.cookie = "MUSIC_U=d24c9ad0320ef920dc3886e172185ab514cff3189231869a29970cc5ba79511a983b2dc65b68e96bf0fc28c41bfbf0488bafcdfe5ad2b092";
    document.cookie = "__csrf=9dac4d23fc1c652379b5b5c2ace6cf25";
    document.cookie = "__remember_me=true";
    console.log("get cookie==>", document.cookie);
  }

  show(animation) {
    this.setState({
      animation,
      visible: true
    });
  }

  hide() {
    this.setState({
      visible: false
    });
  }

  onLogin(userInfo) {
    console.log("header get userInfo--->", userInfo);
  }

  render() {
    // console.log("heafer render==>",this.props,this.state);
    return (
      <div className="nav-wrap">
        <div className="nav-title"> { /*<h1>网易云音乐</h1>*/ }
          <img src="logo.png" alt="网易云音乐"/>
        </div>
        <div className="nav-btn">
          <span>&lt;</span>
          <span >&gt;</span></div>
        <div className="search-box">
          <input type="text" placeholder="搜索音乐, 歌手, 歌词, 用户"/>
        </div>
        <div className="nav-user">
          <span className="icon-user"></span>
          <a className="login-btn" onClick={this.show.bind(this, 'zoom') }> 未登录 </a></div>
        <div className="nav-function">
          <div className="skin">
            <span className="icon-skin"></span>
          </div>
          <div className="msg">
            <span className="icon-mail"></span></div>
          <div className="setting"><span className="icon-setting"></span>
          </div>
        </div>
        <Modal visible={ this.state.visible }
               onClose={ this.hide.bind(this) }
               duration={ 600 }
               width={ 360 }
               height={ 220 }
               animation={ this.state.animation }>
          <LoginForm login={ this.props.onLogin }/>
        </Modal>
        </div>
    );
  }
}
const mapStateToProps = state => {
  return {userInfo: state.userInfo}
}
const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (user) => dispatch(onLogin(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderCmp);


/////  cookie ///////
//  d24c9ad0320ef920dc3886e172185ab5af687dbad985ef2797c8dfd0efbb2251ce96fbd817ba136ec24e844715d690c17955a739ab43dce1


/**
 *
 *
 * MUSIC_U  d24c9ad0320ef920dc3886e172185ab514cff3189231869a29970cc5ba79511a983b2dc65b68e96bf0fc28c41bfbf0488bafcdfe5ad2b092    /  2017-06-04T03:41:12.000Z  178  ✓
 __csrf  9dac4d23fc1c652379b5b5c2ace6cf25    /  2017-06-04T03:41:22.000Z  86
 __remember_me  true    /  2017-06-04T03:41:12.000Z  76  ✓
 *
 */