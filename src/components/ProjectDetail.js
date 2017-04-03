import React, { PropTypes } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions/actionCreators';
import { Spinner } from './';

export class ProjectDetail extends React.Component {

  componentDidMount = () => {

    this.props.getProject(this.props.params.id);

  }

  render () {

    if ( this.props.isFetchingActive ) {
      return <Spinner></Spinner>
    }

    return <div>
            <h3>{this.props.activeProject.caption}</h3>
            <img src={this.props.activeProject.display_src} alt=""/>
          </div>
  }
}
