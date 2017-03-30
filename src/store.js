import { createStore, applyMiddleware} from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { addProject, fetchP} from './actions/actionCreators';
import  rootReducer  from  './reducers';
import thunk from 'redux-thunk';


//onst composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, window.STATE_FROM_SERVER);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
