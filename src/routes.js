import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './App';
import {Dashboard} from './app/Dashboard';
import { Login } from './login/Login';
import Project from './project/Project';
import User  from './user/User';
import {NotFound} from './app/NotFound';
import ProjectDetail from './project/ProjectDetail';
import NewProjectForm from './project/NewProjectForm';
import { ProjectList } from './project/ProjectList';
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
        <IndexRoute component={Dashboard} />
        <Route path="/login" component={Login} onEnter={(nextState, replace, callBack) => loginUser(nextState, replace, callBack)}></Route>
        <Route path="/dashboard" component={Dashboard} onEnter={(nextState, replace, callBack) => checkLoggedIn(nextState, replace, callBack)}>
            <Route path="/dashboard/projects" component={Project}>
              <IndexRoute component={ProjectList}></IndexRoute>
              <Route path="/dashboard/projects/list" component={ProjectList}/>
              <Route path="/dashboard/projects/create-new" component={NewProjectForm}/>
              <Route path="/dashboard/projects/:id" component={ProjectDetail}/>
            </Route>
            <Route path="/dashboard/user" component={User}></Route>
            <Route path="/dashboard/logout" onEnter={(nextState, replace, callBack) => logoutUser(nextState, replace, callBack)}></Route>
        </Route>
        <Route path="*" component={NotFound}></Route>
      </Route>
  </Router>
}

export default Routes;
