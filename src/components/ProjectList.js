import React, { PropTypes } from 'react'
import { ProjectItem } from './ProjectItem';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { SearchBox } from './SearchBox';

export class ProjectList extends React.Component {

  state = {
    filter: ''
  }

  handleDelete = (projectId) => {
    this.props.deleteProject(projectId);
  }

  handleUserInput = (evt) => {
    let tempFilter = this.state.filter;
    tempFilter = evt.target.value;
    this.setState({
      filter: tempFilter
    });
  }

  render() {
    const projectItems = this.props.projects.map((project,index) => {
      /**
      Show all items or items that contain
      text equal to user search input
      */
      if (project.caption.toLowerCase().includes(this.state.filter)) {
        return <ProjectItem
                {...project}
                onDelete={this.handleDelete}
                key={project.id}>
              </ProjectItem>;
      }
    });
    return <div>
            <SearchBox onChange={this.handleUserInput}></SearchBox>
            <div className="project-list">
              <ReactCSSTransitionGroup
                  transitionName="example"
                  transitionAppear={true}
                  transitionAppearTimeout={1000}
                  transitionEnterTimeout={1000}
                  transitionLeaveTimeout={1000}>
                  {projectItems}
              </ReactCSSTransitionGroup>
            </div>
          </div>
      }
}
