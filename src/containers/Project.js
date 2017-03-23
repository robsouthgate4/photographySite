import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import {ProjectList} from '../components';

export class Project extends React.Component {
  componentDidMount = () => {
    console.log(this.props);
  }
  render () {
    return <div>
            <ProjectList {...this.props} ></ProjectList>
          </div>
  }
}

const mapStateToProps = function(state) {
  console.log(state.projects);
  return {
    projects: state.projects
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Project);
