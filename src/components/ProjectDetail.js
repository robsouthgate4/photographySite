import React, { PropTypes } from 'react'

export class ProjectDetail extends React.Component {

  componentDidMount () {
    console.log('Project Details!!!')
    console.log(this.props);
  }

  render () {
    return <div>Project details</div>
  }
}
