import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { hashHistory } from 'react-router';
import Routes from './routes';

import './index.css';

// remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Routes history={hashHistory} />
  </MuiThemeProvider>,
  document.getElementById('root')
);
