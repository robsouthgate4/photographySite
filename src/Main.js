import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import store from './store';

const mapStateToProps = function(store) {
  return {
    posts: store.posts,
    comments: store.comments
  };
}

const Main = React.createClass({
  render () {
    return (
      <div className="main">
        {this.props.children, this.props}
      </div>
    )
  }
});

Main.propTypes = {
  children: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(Main);
