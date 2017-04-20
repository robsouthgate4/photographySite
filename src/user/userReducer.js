/* eslint-disable */
import * as types from '../actions/users/actionTypes';

const initialState = {
  users: [],
  activeUsers: {},
  isFetching: false,
  currentUser: {},
  active: false
}

export const usersApp = (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_USERS:
        return {
          ...state,
          isFetching: true
        }
        break;
    case types.RECEIVE_USERS:
        return {
          ...state,
          isFetching: false,
          users: action.users,
          lastUpdated: action.receivedAt
        }
        break;
    default:
      return state;
  }
}
