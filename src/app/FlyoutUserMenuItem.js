/* eslint-disable */
import React, { PropTypes } from 'react';
import {Link} from 'react-router';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import SvgIcon from 'material-ui/SvgIcon';


export const FlyoutUserMenuItem = (props) => {
  return <span className="user-link">
            <SvgIcon color={'#8b8c91'} className="user-link-svg">
              <path d={props.userLink.icon} />
            </SvgIcon>
            <Link
              activeClassName="active"
              onClick={ () => props.handleUserLinkClick(props.linkIndex)}
              className={`flyout-user-item`}
              to={`/dashboard/${props.userLink.path}`}>{props.userLink.text}
           </Link>
         </span>

}
