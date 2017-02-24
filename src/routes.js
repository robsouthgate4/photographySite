import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import { Dashboard, Login } from './components/pages';
import {isUserAuthenticated} from './lib/Auth';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/login" component={Login} onEnter={(nextState, replace, callBack) => {
      if (!isUserAuthenticated())  {
        callBack();
      } else {
        browserHistory.push('/dashboard');
      }
    }} />
    <Route path="/dashboard" component={Dashboard} onEnter={(nextState, replace, callBack) => {
      if (isUserAuthenticated())  {
        callBack();
      } else {
        browserHistory.push('/login');
      }
    }} />
  </Router>
);

export default Routes;
