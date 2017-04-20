/* eslint-disable */
import React, { PropTypes } from 'react'
import { Link } from 'react-router';
import { ProjectItem } from './ProjectItem';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { SearchBox } from '../app/SearchBox';
import { Spinner } from '../app/Spinner';
import RaisedButton from 'material-ui/RaisedButton';

export class ProjectList extends React.Component {

  state = {
    filter: ''
  }

  handleDelete = (projectId) => {
    this.props.onDelete(projectId);
  }

  handleUserInput = (evt) => {
    let tempFilter = this.state.filter;
    tempFilter = evt.target.value;
    this.setState({
      filter: tempFilter
    });
  }

  render() {
    if ( this.props.isFetching ) {
      return <Spinner></Spinner>
    }

    const projectItems = this.props.projects.map((project,index) => {
      /**
      Show all items or items that contain
      text equal to user search input
      */
      if (project.caption && project.caption.toLowerCase().includes(this.state.filter)) {
        return <ProjectItem
                key={project.id}
                {...this.props}
                {...project}
                onDelete={this.handleDelete}>
              </ProjectItem>;
      }
    });

    const projectBtnStyle = {
      marginBottom: 20 + 'px'
    }

    return <div>
            <SearchBox onChange={this.handleUserInput}></SearchBox>
            <Link to={'dashboard/projects/create-new'}><RaisedButton label="Create new" style={projectBtnStyle}/></Link>
            <div className="project-list">
              <ReactCSSTransitionGroup
                  transitionName="example"
                  transitionAppear={true}
                  transitionAppearTimeout={300}
                  transitionEnterTimeout={300}
                  transitionLeaveTimeout={300}>
                  {projectItems}
              </ReactCSSTransitionGroup>
            </div>
          </div>
      }
}
