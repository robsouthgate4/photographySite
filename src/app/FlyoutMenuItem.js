/* eslint-disable */
import React, { PropTypes } from 'react';
import {Link} from 'react-router';

export const FlyoutMenuItem = (props) => {
  return <Link
            activeClassName="active"
            onMouseEnter={(evt) => props.handleMenuLinkHover(evt)}
            onClick={ (evt) => props.handleMenuLinkClick(props.linkIndex)}
            className={`flyout-item`}
            to={`/dashboard/${props.link.path}`}>{props.link.text}
          </Link>
}
