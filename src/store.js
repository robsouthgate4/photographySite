import { applyMiddleware, createStore, compose } from 'redux';
import promise from "redux-promise-middleware";
import rootReducer from  './reducers';
export default(initialState) => {
    return createStore(rootReducer, initialState);
}
