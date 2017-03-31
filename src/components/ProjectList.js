import React, { PropTypes } from 'react'
import { ProjectItem } from './ProjectItem';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { SearchBox } from './SearchBox';
import { Spinner } from './';

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
                key={project._id}
                {...project}
                onDelete={this.handleDelete}>
              </ProjectItem>;
      }
    });

    return <div>
            <SearchBox onChange={this.handleUserInput}></SearchBox>
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
