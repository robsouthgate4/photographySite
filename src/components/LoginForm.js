import React, { PropTypes } from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export const LoginForm = (props) => {

    const inputStyles = {
      display: 'block',
      color: '#cccccc',
      width: 100 + '%'
    }

    const submitButtonStyles = {
      display: 'block'
    }

    return <div className="login-form">
            <span className="error red">{props.loginMessage}</span>
            <form onSubmit={props.handleSubmit}>
              <TextField
                value={props.userName}
                defaultValue={props.userName}
                onChange={props.handleUsernameChange}
                style={inputStyles}
                type="text"
                floatingLabelText="Username"
                floatingLabelFixed={true}/>
              <TextField
                value={props.userName}
                defaultValue={props.password}
                onChange={props.handlePasswordChange}
                style={inputStyles}
                floatingLabelFixed={true}
                floatingLabelText="Password"
                type="password"/>
            </form>
            <RaisedButton className={'login-submit'} onClick={props.handleSubmit} label="Login" style={submitButtonStyles} />
           </div>

  }

  LoginForm.propTypes = {
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    handleUsernameChange: PropTypes.func.isRequired,
    handlePasswordChange: PropTypes.func.isRequired
  };
