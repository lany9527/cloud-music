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
  show(animation) {
    this.setState({animation, visible: true});
  }

  hide() {
    this.setState({visible: false});
  }
  onLogin(userInfo){
    console.log("header get userInfo--->",userInfo);
  }

  render() {
    // console.log("heafer render==>",this.props,this.state);
    return (
      <div className="nav-wrap">
        <div className="nav-title">
          {/*<h1>网易云音乐</h1>*/}
          <img src="logo.png" alt="网易云音乐"/>
        </div>
        <div className="nav-btn">
          <span>&lt;</span>
          <span>&gt;</span>
        </div>
        <div className="search-box">
          <input type="text" placeholder="搜索音乐, 歌手, 歌词, 用户"/>
        </div>
        <div className="nav-user">
          <span className="icon-user"></span>
          <a
            className="login-btn"
            onClick={this.show.bind(this, 'zoom')}>未登录</a>
        </div>
        <div className="nav-function">
          <div className="skin">
            <span className="icon-skin"></span>
          </div>
          <div className="msg">
            <span className="icon-mail"></span>
          </div>
          <div className="setting">
            <span className="icon-setting"></span>
          </div>
        </div>
        {/**
            modal
      */}
        <Modal
          visible={this.state.visible}
          onClose={this.hide.bind(this)}
          duration={600}
          width={360}
          height={220}
          animation={this.state.animation}>

          <LoginForm login={this.props.onLogin} />

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

export default  connect(mapStateToProps,mapDispatchToProps)(HeaderCmp);