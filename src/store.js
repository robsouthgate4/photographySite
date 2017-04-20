import { createStore, applyMiddleware, compose} from 'redux';
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';
import logger from 'redux-logger';
let socket = io('http://localhost:4000');
let socketIoMiddleware = createSocketIoMiddleware(socket, "server/");
import { syncHistoryWithStore } from 'react-router-redux';
import { hashHistory } from 'react-router';
import  rootReducer  from  './app/reducers';
import thunkMiddleware from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware, socketIoMiddleware))
);


store.subscribe(()=>{
  //console.log('new client state', store.getState());
});

store.dispatch({type:'server/hello', data:'Hello!'});

export const history = syncHistoryWithStore(hashHistory, store);

export default store;
