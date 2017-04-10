import { createStore, applyMiddleware} from 'redux';
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';
import logger from 'redux-logger';
let socket = io('http://localhost:4000');
let socketIoMiddleware = createSocketIoMiddleware(socket, "server/");
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import  rootReducer  from  './reducers';
import thunkMiddleware from 'redux-thunk';

//onst composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  applyMiddleware(logger, thunkMiddleware, socketIoMiddleware)
);


store.subscribe(()=>{
  console.log('new client state', store.getState());
});

store.dispatch({type:'server/hello', data:'Hello!'});

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
