import { createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import  rootReducer  from  './reducers';
import thunkMiddleware from 'redux-thunk';

//onst composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  applyMiddleware(logger, thunkMiddleware)
);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
