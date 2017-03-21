import React, { PropTypes } from 'react'

// const Main = React.createClass({
//   render () {
//     return (
//       <div className="main">
//         {React.cloneElement(this.props.children, {...this.props})}
//       </div>
//     )
//   }
// });
//
// export default Main;

const Main = (props) => {
  return (
    <div className="main">
      {React.cloneElement(props.children, {reduxprops: props})}
    </div>
  )
}

export default Main;
