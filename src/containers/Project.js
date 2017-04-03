import React, { PropTypes } from 'react'
import { connect } from 'react-redux';
import { updateProject, addProject, incrementCounter, fetchProjects, deleteProject } from '../actions/actionCreators';
import { ProjectList } from '../components';
import { getProjectById } from '../lib/projectHelpers';

export class Project extends React.Component {

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
    onDelete: (id) => {
      dispatch(deleteProject(id));
    },
    onLoad: () => {
      dispatch(fetchProjects());
    },
    increment: () => {
      dispatch(incrementCounter());
    },
    getProject: (projectId) => {
      dispatch(fetchProjects(projectId));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Project);
