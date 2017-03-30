import React, { PropTypes } from 'react'

const Main = React.createClass({
  render () {
    return (
      <div className="main">
        {this.props.children}
      </div>
    )
  }
});

export default Main;
