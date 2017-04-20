import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import ImageUpload from '../app/ImageUpload';

class NewProjectForm extends React.Component {
  render () {
    return <div>
            <h3>Create a new project</h3>
            <form action="">
              <TextField
                  id="text-field-default"
                  hintText="Project name"
              />
            </form>
            <ImageUpload></ImageUpload>
          </div>
  }
}

export default NewProjectForm;
