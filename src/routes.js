import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import App from './App';
import { Dashboard, Login, Projects } from './components/pages';
import {isUserAuthenticated} from './lib/Auth';

const Routes = (props) => (
  <Router {...props}>

    <Route path="/" component={App}></Route>

    <Route path="login" component={Login} onEnter={(nextState, replace, callBack) => {
          !isUserAuthenticated() ? callBack() : hashHistory.push('/dashboard');}}>
    </Route>

    <Route path="dashboard" component={Dashboard} onEnter={(nextState, replace, callBack) => {
        isUserAuthenticated() ? callBack() : hashHistory.push('/login'); }}>
        <Route path="projects" component={Projects}></Route>
    </Route>

  </Router>
);

export default Routes;
