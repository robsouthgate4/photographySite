import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import App from './App';
import { Dashboard, Login, Projects } from './components/pages';
import {isUserAuthenticated, deauthenticateUser} from './lib/Auth';

const logoutUser = (nextState, replace, callBack) => {
  deauthenticateUser();
  hashHistory.push('/login');
}

const loginUser = (nextState, replace, callBack) => {
  !isUserAuthenticated() ? callBack() : hashHistory.push('/dashboard');
}

const checkLoggedIn = (nextState, replace, callBack) => {
  isUserAuthenticated() ? callBack() : hashHistory.push('/login');
}

const Routes = (props) => (
  <Router {...props}>

    <Route path="/" component={App}></Route>
    <Route path="login" component={Login} onEnter={(nextState, replace, callBack) => loginUser(nextState, replace, callBack)}></Route>
    <Route path="dashboard" component={Dashboard} onEnter={(nextState, replace, callBack) => checkLoggedIn(nextState, replace, callBack)}>
        <Route path="projects" component={Projects}></Route>
        <Route path="logout" onEnter={(nextState, replace, callBack) => logoutUser(nextState, replace, callBack)}></Route>
    </Route>

  </Router>
);

export default Routes;
