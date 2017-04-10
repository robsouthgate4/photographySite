
import { projectsApp } from './projects';
import { usersApp } from './users';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
    projectsApp,
    usersApp,
    routing: routerReducer
});


export default rootReducer;
