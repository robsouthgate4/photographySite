import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './App.css';

import React, { PropTypes } from 'react'

export class App extends React.Component {
  render () {
    return <div>{this.props.children}</div>
  }
}
