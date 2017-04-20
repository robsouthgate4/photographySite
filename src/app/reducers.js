
import { projectsApp } from '../project/projectReducer';
import { usersApp } from '../user/userReducer';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
    projectsApp,
    usersApp,
    routing: routerReducer
});

export default rootReducer;
