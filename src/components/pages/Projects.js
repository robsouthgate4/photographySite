import React, { PropTypes } from 'react'
import {ProjectList} from '../projects';

export const Projects = (props) => {
  return (<div>
          <h2>Welcome user to your projects</h2>
          <ProjectList {...props}></ProjectList>
         </div>)
}

Projects.PropTypes = {

}
