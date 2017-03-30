import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {updateProject, addProject} from '../actions/actionCreators';
import {ProjectList} from '../components';

export class Project extends React.Component {

  componentDidMount = () => {

    this.props.onLoad({
       "code":"BAF_KY4wcRY",
       "caption":"Cleaned my office and mounted my recording gear overhead. Stoked for 2016!",
       "likes":79,
       "id":"1154606670337393752",
       "display_src":"https://scontent.cdninstagram.com/hphotos-xpf1/t51.2885-15/e35/923995_1704188643150533_1383710275_n.jpg"
    });

  }

  render () {
    return <div>
              <ProjectList {...this.props} ></ProjectList>
           </div>
  }
}

const mapStateToProps = function(state) {
  return {
    projects: state.projectsApp.projects
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoad: (data) => {
      dispatch(addProject(data));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Project);
