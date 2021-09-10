import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './TransitionedBlock.scss';

const TransitionedBlock = ({children, className = '', tag = 'div'}) => (
  <ReactCSSTransitionGroup
    transitionName='block-animation'
    component={tag}
    className={className}
    transitionAppear
    transitionAppearTimeout={900}
    transitionEnterTimeout={700}
    transitionLeaveTimeout={500}
  >
    {children}
  </ReactCSSTransitionGroup>
);

TransitionedBlock.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  tag: PropTypes.string,
};

export default TransitionedBlock;
