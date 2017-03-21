import React, { PropTypes } from 'react'
import { ProjectItem } from './';

export const ProjectList = (props, context) => {
  return (
    <div className="project-list">
      { context.reduxprops.posts.map((post, index) => <ProjectItem {...post} key={index}></ProjectItem>) }
    </div>
  )
}

ProjectList.contextTypes = {
  reduxprops: React.PropTypes.object
}
