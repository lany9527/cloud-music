import React, {Component} from 'react';
import './LoginForm.less';

import {onLogin} from './LoginFormRedux'

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleUserName = this.handleUserName.bind(this);
    this.handlePassWord = this.handlePassWord.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleUserName(event) {
    this.setState({username: event.target.value});
  }
  handlePassWord(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    console.log('用户信息: ' + this.state.username, this.state.password);
    this.props.login(this.state);
    event.preventDefault();
  }
  render() {
    return (
      <div className="form-module">
        <div className="form">
          <h2>登录网易云音乐</h2>
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.username} onChange={this.handleUserName} placeholder="Username"/>
            <input type="password" value={this.state.password} onChange={this.handlePassWord} placeholder="Password"/>
            <button type="submit">登录</button>
          </form>
        </div>
      </div>
    )
  }

}

export default LoginForm;