import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { hashHistory } from 'react-router';
import Routes from './routes';
import { Provider } from 'react-redux';
import Store from './store';

import './index.css';

const StoreInstance = Store();

// remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Provider store={StoreInstance}>
      <Routes history={hashHistory} />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
