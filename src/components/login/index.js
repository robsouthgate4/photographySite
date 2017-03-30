import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import {ProjectList} from '../components';

const mapStateToProps = function(state) {
  return {
    projects: state.projects
  };
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export class Project extends React.Component {
  render () {
    <div>
      <ProjectList></ProjectList>
    </div>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Project);
