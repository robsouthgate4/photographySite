import React from 'react';
import { Link } from 'react-router';
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
        <Link to='/'><FlatButton label="Edit" /></Link>
        <FlatButton onClick={() => props.onDelete(props.id)} label="Delete" />
      </CardActions>
    </Card>
  );

}
