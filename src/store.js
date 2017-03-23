import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import  rootReducer  from  './reducers';
import thunk from 'redux-thunk';

import projects from './data/projects';
import comments from './data/comments';

const initialState = {
  projects,
  comments
}

const store = createStore(rootReducer, initialState);
export const history = syncHistoryWithStore(browserHistory, store);

export default store;
