import React, { PropTypes } from 'react';
import {Link} from 'react-router';

export const FlyoutMenuItem = (props) => {
  return <Link
            onClick={ (evt) => {
               props.handleMenuLinkHover(evt);
               props.handleMenuLinkClick(props.linkIndex);
            }}
            className={`flyout-item ${props.activeIndex === props.linkIndex ? 'active' : ''}`}
            to={`/dashboard/${props.link.path}`}>{props.link.text}
         </Link>
}
