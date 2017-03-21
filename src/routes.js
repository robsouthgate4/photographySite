import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Main from './Main';
import App from './App';
import { Dashboard, Login, Projects } from './components/pages';
import { isUserAuthenticated, deauthenticateUser } from './lib/Auth';

const logoutUser = (nextState, replace, callBack) => {
  deauthenticateUser();
  browserHistory.push('/login');
}

const loginUser = (nextState, replace, callBack) => {
  !isUserAuthenticated() ? callBack() : browserHistory.push('/dashboard');
}

const checkLoggedIn = (nextState, replace, callBack) => {
  isUserAuthenticated() ? callBack() : browserHistory.push('/login');
}

const Routes = (props) => (
  <Router {...props}>
      <Route path="/" component={App}>
        <Route path="login" component={Login} onEnter={(nextState, replace, callBack) => loginUser(nextState, replace, callBack)}></Route>
        <Route path="dashboard" component={Dashboard} onEnter={(nextState, replace, callBack) => checkLoggedIn(nextState, replace, callBack)}>
            <Route path="projects" component={Projects}></Route>
            <Route path="instagram" component={Projects}></Route>{/*TODO create IG component*/}
            <Route path="logout" onEnter={(nextState, replace, callBack) => logoutUser(nextState, replace, callBack)}></Route>
        </Route>
      </Route>
  </Router>
);

export default Routes;
