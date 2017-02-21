import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './logo.svg';
import {LoginForm} from './login';
import './App.css';

injectTapEventPlugin();

class App extends Component {

  state = {
      currentUser: {},
      username: '',
      password: ''
  }

  handleUsernameChange = (evt, value) => {
    this.setState({  username: value  });
  }

  handlePasswordChange = (evt, value) => {
    this.setState({ password: value });
  }

  handleSubmit = (evt) => {
    console.log(this.state.username, this.state.password);
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Photography CMS</h2>
          </div>
          <LoginForm
              handleSubmit={this.handleSubmit}
              username={this.state.username}
              password={this.state.password}
              handlePasswordChange={this.handlePasswordChange}
              handleUsernameChange={this.handleUsernameChange}>
          </LoginForm>
        </div>
     </MuiThemeProvider>
    );
  }
}

export default App;
