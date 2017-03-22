import React, { PropTypes } from 'react'
import { ProjectItem } from './';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export const ProjectList = (props, context) => {
  const projectItems = context.reduxprops.projects.map((post,index) => {
    return <ProjectItem
            projects={context.reduxprops.projects}
            {...post}
            onDelete={() => props.handleDelete(post.index)}
            key={index}>
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

ProjectList.contextTypes = {
  reduxprops: React.PropTypes.object
}
