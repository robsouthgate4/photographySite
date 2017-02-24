import React, { PropTypes } from 'react';
import {Router, browserHistory} from 'react-router';
import {LoginForm} from '../login';
import {loginUser} from '../../lib/loginService';
import {authenticateUser, deauthenticateUser} from '../../lib/Auth';

export class Login extends React.Component {

    state = {
        username: '',
        password: '',
        loginMessage: ''
    }

    handleUsernameChange = (evt, value) => {
      this.setState({  username: value  });
    }

    handlePasswordChange = (evt, value) => {
      this.setState({ password: value });
    }

    handleLogin = (evt) => {
      evt.preventDefault();
      /**
       * If user token is received, set it to local storage and direct to dashboard
       * If not token received, display error sent from server
       */
      loginUser(this.state.username, this.state.password)
        .then((res) => {
          if (!res.token) {
            this.setState({loginMessage: res.message})
          } else {
            authenticateUser(res.token);
            browserHistory.push('/dashboard');
          }
        });
    }
    render () {
      return <LoginForm
                loginMessage={this.state.loginMessage}
                handleSubmit={this.handleLogin}
                username={this.state.username}
                password={this.state.password}
                handlePasswordChange={this.handlePasswordChange}
                handleUsernameChange={this.handleUsernameChange}>
            </LoginForm>
    }
}
