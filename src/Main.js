import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import store from './store';

const Main = React.createClass({
  render () {
    return (
      <div className="main">
        {React.cloneElement(this.props.children, {...this.props})}
      </div>
    )
  }
});

export default Main;

// const Main = (props) => {
//   return (
//     <div className="main">
//       {React.cloneElement(props.children, {...props})}
//     </div>
//   )
// }
//
// export default Main;
