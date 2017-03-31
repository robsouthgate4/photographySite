import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import { Dashboard, Login } from './containers';
import Project from './containers/Project';
import {ProjectDetail, ProjectList} from './components';
import { isUserAuthenticated, deauthenticateUser } from './lib/Auth';

const logoutUser = (nextState, replace, callBack) => {
  deauthenticateUser();
  browserHistory.push('/login');
}

const loginUser = (nextState, replace, callBack) => {
  !isUserAuthenticated() ? callBack() : browserHistory.push('/dashboard/projects');
}

const checkLoggedIn = (nextState, replace, callBack) => {
  isUserAuthenticated() ? callBack() : browserHistory.push('/login');
}

const Routes = (props) => (
  <Router {...props}>
      <Route path="/" component={App}>
        <Route path="login" component={Login} onEnter={(nextState, replace, callBack) => loginUser(nextState, replace, callBack)}></Route>
        <Route path="dashboard" component={Dashboard} onEnter={(nextState, replace, callBack) => checkLoggedIn(nextState, replace, callBack)}>
            <Route path="projects" component={Project}>
              <Route path="projects-list" component={ProjectList}></Route>
              <Route path="project/:id" component={ProjectDetail}></Route>
            </Route>
            <Route path="logout" onEnter={(nextState, replace, callBack) => logoutUser(nextState, replace, callBack)}></Route>
        </Route>
      </Route>
  </Router>
);

export default Routes;
