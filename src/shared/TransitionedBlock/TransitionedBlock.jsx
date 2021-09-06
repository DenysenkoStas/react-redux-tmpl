import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './TransitionedBlock.scss';

const TransitionedBlock = ({children, className = '', tag = 'div'}) => (
  <ReactCSSTransitionGroup
    transitionName='block-animation'
    component={tag}
    className={className}
    transitionAppear
    transitionAppearTimeout={1}
    transitionEnterTimeout={700}
    transitionLeaveTimeout={500}
  >
    {children}
  </ReactCSSTransitionGroup>
);

export default TransitionedBlock;
