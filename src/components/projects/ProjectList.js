import React, { PropTypes } from 'react'
import { ProjectItem } from './';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export class ProjectList extends React.Component {

  handleDelete = (projectId) => {
    this.props.reduxprops.deleteProject(projectId);
  }

  render() {
    const projectItems = this.props.reduxprops.projects.map((post,index) => {
      return <ProjectItem
              projects={this.props.reduxprops.projects}
              {...post}
              onDelete={this.handleDelete}
              key={post.id}>
            </ProjectItem>;
    });
    return (
      <div className="project-list">
        <ReactCSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={300}
            transitionEnterTimeout={3300}
            transitionLeaveTimeout={300}>
            {projectItems}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}
