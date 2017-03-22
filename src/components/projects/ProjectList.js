import React, { PropTypes } from 'react'
import { ProjectItem } from './';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { SearchBox } from '../';

export class ProjectList extends React.Component {

  state = {
    filter: ''
  }

  handleDelete = (projectId) => {
    this.props.reduxprops.deleteProject(projectId);
  }

  handleUserInput = (evt) => {
    let tempFilter = this.state.filter;
    tempFilter = evt.target.value;
    this.setState({
      filter: tempFilter
    });
  }

  render() {
    const projectItems = this.props.reduxprops.projects.map((post,index) => {
      if (post.caption.includes(this.state.filter)) {
        return <ProjectItem
                projects={this.props.reduxprops.projects}
                {...post}
                onDelete={this.handleDelete}
                key={post.id}>
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
