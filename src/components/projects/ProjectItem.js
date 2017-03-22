import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export const ProjectItem = (props) => {
  return (
    <Card className="project-item">
      <CardMedia>
        <img src={props.display_src} />
      </CardMedia>
      <CardTitle subtitle={props.caption}/>
      <CardActions>
        <FlatButton label="Edit" />
        <FlatButton onClick={props.onDelete} label="Delete" />
      </CardActions>
    </Card>
  );

}
