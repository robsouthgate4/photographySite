import React, { PropTypes } from 'react'

const Main = React.createClass({
  render () {
    return (
      <div className="main">
        {React.cloneElement(this.props.children, {reduxprops: this.props})}
      </div>
    )
  }
});

export default Main;
