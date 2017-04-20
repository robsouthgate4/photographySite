/* eslint-disable */
import React, { PropTypes } from 'react'
import { connect } from 'react-redux';
import * as actions from './projectActionCreators';
import { Spinner } from '../app/Spinner';



export default class ProjectDetail extends React.Component {

  componentDidMount = () => {

    //this.props.getProject(this.props.params.id);

    console.log(this.props.params.id);

  }

  render () {

    // if ( this.props.isFetchingActive ) {
    //   return <Spinner></Spinner>
    // }

    return <div>
            HELLO
          </div>
  }
}
