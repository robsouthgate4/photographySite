import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import App from './App';
import {Dashboard} from './app/Dashboard';
import { Login } from './login/Login';
import Project from './project/Project';
import User  from './user/User';
import {NotFound} from './app/NotFound';
import ProjectDetail from './project/ProjectDetail';
import { isUserAuthenticated, deauthenticateUser } from './lib/Auth';

const logoutUser = (nextState, replace, callBack) => {
  deauthenticateUser();
  hashHistory.push('/login');
}

const loginUser = (nextState, replace, callBack) => {
  !isUserAuthenticated() ? callBack() : hashHistory.push('/dashboard/projects');
}

const checkLoggedIn = (nextState, replace, callBack) => {
  isUserAuthenticated() ? callBack() : hashHistory.push('/login');
}

const Routes = (props) => {
  return <Router history={hashHistory} {...props}>
      <Route path="/" component={App}>
        <Route path="login" component={Login} onEnter={(nextState, replace, callBack) => loginUser(nextState, replace, callBack)}></Route>
        <Route path="dashboard" component={Dashboard} onEnter={(nextState, replace, callBack) => checkLoggedIn(nextState, replace, callBack)}>
            <Route path="projects" component={Project}></Route>
            <Route path="projects/:id" component={ProjectDetail}></Route>
            <Route path="user" component={User}></Route>
            <Route path="logout" onEnter={(nextState, replace, callBack) => logoutUser(nextState, replace, callBack)}></Route>
        </Route>
        <Route path="*" component={NotFound}></Route>
      </Route>
  </Router>
}

export default Routes;
