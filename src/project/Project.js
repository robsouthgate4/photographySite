/* eslint-disable */
import React, { PropTypes } from 'react'
import { connect } from 'react-redux';
import { fetchProjects, deleteProject } from './projectActionCreators';
import { getProjectById } from '../lib/projectHelpers';

export class Project extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount = () => {
    this.props.onLoad();
  }

  render () {
    return <div>
              {React.cloneElement(this.props.children, {...this.props})}
           </div>
  }
}

const mapStateToProps = function(state, ownProps) {
  return {
    projects: state.projectsApp.projects,
    counter: state.projectsApp.counter,
    isFetching: state.projectsApp.isFetching,
    isFetchingActive: state.projectsApp.isFetchingActive,
    activeProject: state.projectsApp.activeProject
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDelete: (projectId) => {
      dispatch(deleteProject(projectId))
    },
    onLoad: () => {
      dispatch(fetchProjects());
    },
    getProject: (projectId) => {
      dispatch(fetchProjects(projectId));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Project);
