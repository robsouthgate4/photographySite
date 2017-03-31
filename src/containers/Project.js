import React, { PropTypes } from 'react'
import { connect } from 'react-redux';
import { updateProject, addProject, incrementCounter, fetchProjects } from '../actions/actionCreators';
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
    singleProject: getProjectById(state.projectsApp.projects, ownProps.params.id)
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
