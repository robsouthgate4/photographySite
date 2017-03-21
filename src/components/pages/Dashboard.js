import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom';
import {FlyoutMenu} from '../menus';


export class Dashboard extends React.Component {

  state = {
    user: localStorage.getItem('user'), // TODO: store this in state, not local Storage
    flyoutMenuOpen: true,
    activeLink: 0,
    overlayTopStyles: {
      top: -1000,
      height: 0
    },
    userLinks: [
      {
        text: 'Home',
        path: '',
        icon: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z'
      },
      {
        text: 'User',
        path: 'user',
        icon: 'M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z'
      },
      {
        text: 'Logout',
        path: 'logout',
        icon: 'M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z'
      }
    ],
    links: [
      {
        text: 'Dashboard',
        path: ''
      },
      {
        text: 'Projects',
        path: 'projects'
      },
      {
        text: 'Instagram',
        path: 'instagram'
      }
    ]
  }

  getChildContext() {
    return {reduxprops: this.props.reduxprops};
  }

  handleMenuLinkClick = (index) => {
    let activeLink = this.state.activeLink;
    activeLink = index;
    this.setState({activeLink: activeLink});
  }

  handleUserLinkClick = (index) => {
    console.log(index);
  }

  handleMenuLinkHover = (evt) => {
    const linkNode = ReactDOM.findDOMNode(evt.target);
    const topPos = linkNode.getBoundingClientRect().top;
    const linkHeight = linkNode.clientHeight;

    let currentStyles = this.state.overlayTopStyles;
    currentStyles.top = topPos;
    currentStyles.height = linkHeight;

    this.setState({
      overlayTopStyles: currentStyles
    });
  }

  render = () => {
    return (
      <div className="dashboard">
        <FlyoutMenu
          overlayStyles={this.state.overlayTopStyles}
          handleMenuLinkHover={this.handleMenuLinkHover}
          activeIndex={this.state.activeLink}
          handleMenuLinkClick={this.handleMenuLinkClick}
          userLinks={this.state.userLinks}
          links={this.state.links}>
        </FlyoutMenu>
        <div className="dashboard-body">
          <h1>Welcome {this.state.user} to your dashboard</h1>
          {this.props.children}
        </div>
      </div>
    )
  }
}

Dashboard.childContextTypes = {
  reduxprops: React.PropTypes.object
};
