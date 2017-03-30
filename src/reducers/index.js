
import { projectsApp } from './projects';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
    projectsApp,
    routing: routerReducer
});


export default rootReducer;
