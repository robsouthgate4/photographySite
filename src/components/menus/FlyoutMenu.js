import React, { PropTypes } from 'react';
import {FlyoutMenuItem} from './FlyoutMenuItem'
import {FlyoutUserMenuItem} from './FlyoutUserMenuItem'
import {OverlayHover} from './OverlayHover';

export const FlyoutMenu = (props) => {

  const overlayStyles = {
    position: 'absolute',
    top: props.overlayStyles.top + 'px',
    left: 0,
    width: 100 + '%',
    height: props.overlayStyles.height,
    background: '#5c616f',
    transition: 'top .2s ease',
    transitionDelay: '.3s'
  }

  const userLinks = props.userLinks.map((userLink, index) => {
    return <FlyoutUserMenuItem
              key={index}
              userLink={userLink}
              linkIndex={index}
              handleUserLinkClick={props.handleUserLinkClick}>
           </FlyoutUserMenuItem>
  });
  const menuLinks = props.links.map((link, index) => {
    return <FlyoutMenuItem
              handleMenuLinkHover={props.handleMenuLinkHover}
              key={index}
              link={link}
              linkIndex={index}
              activeIndex={props.activeIndex}
              handleMenuLinkClick={props.handleMenuLinkClick}>
           </FlyoutMenuItem>
  });
  return (
    <div className="flyout-menu">
      <div className="user-links">{userLinks}</div>
      <div className="menu-links">{menuLinks}</div>
      <OverlayHover hoverStyles={overlayStyles}></OverlayHover>
    </div>
  )
}

FlyoutMenu.PropTypes = {
  links: React.PropTypes.array
}
