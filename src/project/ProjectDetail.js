/* eslint-disable */
import React, { PropTypes } from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {fetchProjects} from './projectActionCreators';
import { Spinner } from '../app/Spinner';

export default class ProjectDetail extends React.Component {

  componentDidMount = () => {
    this.props.getProject(this.props.params.id);
  }

  render () {

    if ( this.props.isFetchingActive ) {
      return <Spinner></Spinner>
    }

    console.log(this.props.activeProject)

    return <Card className="project-detail-container">
            <CardMedia>
              <img src={this.props.activeProject.display_src} />
            </CardMedia>
            <CardTitle title={this.props.activeProject.caption}/>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
            <CardActions>
              <FlatButton label="Action1" />
              <FlatButton label="Action2" />
            </CardActions>
          </Card>
  }
}
