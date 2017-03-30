import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {updateProject, addProject, incrementCounter, fetchProjects} from '../actions/actionCreators';
import {ProjectList} from '../components';

export class Project extends React.Component {

  componentDidMount = () => {

    this.props.onLoad();

  }

  render () {
    console.log(this.props);
    return <div>
              <ProjectList {...this.props} ></ProjectList>
           </div>
  }
}

const mapStateToProps = function(state) {
  return {
    projects: state.projectsApp.projects,
    counter: state.projectsApp.counter
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoad: () => {
      dispatch(fetchProjects());
    },
    increment: () => {
      dispatch(incrementCounter());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Project);
