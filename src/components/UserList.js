/* eslint-disable */
import React, { PropTypes } from 'react'
import { Spinner } from '../components';

export const UserList = (props) => {

  if (props.isFetching) {
    return <Spinner></Spinner>
  }

  return <div>
          <ul>
            {props.users.map((user, index) => {
                return <li key={user._id}>{user.username}</li>
            })}
          </ul>
        </div>
}
