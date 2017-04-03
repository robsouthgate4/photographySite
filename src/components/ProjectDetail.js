import React, { PropTypes } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions/actionCreators';

export class ProjectDetail extends React.Component {

  componentDidMount = () => {

    this.props.getProject(this.props.params.id);

  }

  render () {
    return <div>
            <h3>Hello from project detail</h3>
          </div>
  }
}
