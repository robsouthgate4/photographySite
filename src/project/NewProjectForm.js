import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import Dropzone from 'react-dropzone';

class NewProjectForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      projectName: '',
      tags: '',
      uploadedFile: ''
    };
  }
  onSubmit = (evt) => {
    evt.preventDefault();

  }
  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }
  onImageDrop = (files) => {
    this.setState({
      uploadedFile: files[0]
    });
    console.log(files[0]);
  }
  render () {
    const imgStyle ={
      maxWidth: 256 + 'px'
    }
    return <div>
            <h3>Create a new project</h3>
            <form onSubmit={this.onSubmit}>
              <TextField
                  name="projectName"
                  id="text-field-default"
                  hintText="Project name"
                  onChange={this.handleChange}/>
              <br/>
              <TextField
                  name="tags"
                  id="text-field-default"
                  hintText="Tags"
                  onChange={this.handleChange}/>
            <input type="submit" hidden/>
            <br/>
            </form>
            <Dropzone
              className="drop-zone"
              multiple={false}
              accept="image/*"
              onDrop={this.onImageDrop}>
              <p>Drop an image or click to select a file to upload.</p>
            </Dropzone>
            <div className="preview">
              <div>
                <div>
                  <p>{this.state.uploadedFile.name}</p>
                  <img style={imgStyle} src={this.state.uploadedFile.preview} />
                </div>
              </div>
            </div>
          </div>
  }
}

export default NewProjectForm;
