/* eslint-disable */
import React, { PropTypes } from 'react';
import { UserList } from './UserList';
import { connect } from 'react-redux';
import {fetchUsers} from './userActionCreators';

export class User extends React.Component {

  constructor(props){
    super(props);
  }


  componentDidMount = () => {
    console.log(this.props);
    this.props.onLoad();
  }

  render() {

    return <div>
            <h1>User section</h1>
            <h3>Current registered users:</h3>
            <UserList {...this.props}></UserList>
          </div>;
  }
}

export const mapStateToProps = (state, ownProps) => {
  return {
    users: state.usersApp.users,
    currentUser: state.usersApp.currentUser,
    isFetching: state.usersApp.isFetching
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    onLoad: () => {
      dispatch(fetchUsers());
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(User);
