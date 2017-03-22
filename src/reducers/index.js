import { users } from './users';
import { comments } from './comments';
import { projects } from './projects';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
    comments,
    projects,
    routing: routerReducer
});

export default rootReducer;
