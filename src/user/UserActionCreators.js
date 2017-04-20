import 'babel-polyfill'
import fetch from 'isomorphic-fetch'
import * as types from './userActionTypes';


export const receiveUsers = (json) => {
    return {
      type: types.RECEIVE_USERS,
      users: json,
      receivedAt: Date.now()
    }
}

export const logoutUser = () => {
  return {
    type: types.LOGOUT_USER
  }
}

export const requestUsers = (json) => {
    return {
      type: types.REQUEST_USERS
    }
}

export const fetchUsers = (userId) => {

    return function(dispatch) {

        dispatch(requestUsers())
          return fetch(`http://localhost:4000/api/users`)
            .then(response => response.json())
            .then(json => dispatch(receiveUsers(json))
          )

      }
}
