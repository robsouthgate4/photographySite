import { users } from './users';
import { comments } from './comments';
import { posts } from './posts';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
    comments,
    posts,
    routing: routerReducer
});

export default rootReducer;
