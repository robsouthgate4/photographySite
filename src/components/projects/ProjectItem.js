import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export const ProjectItem = (props) => {
  console.log(props);
  return (
    <Card className="project-item">
      <CardMedia>
        <img src={props.display_src} />
      </CardMedia>
      <CardTitle subtitle={props.caption}/>
      <CardActions>
        <FlatButton label="Action1" />
        <FlatButton label="Action2" />
      </CardActions>
    </Card>
  );

}
