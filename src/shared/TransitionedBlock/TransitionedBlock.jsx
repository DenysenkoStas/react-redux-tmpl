import React, {Children} from 'react';
import PropTypes from 'prop-types';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import styles from './TransitionedBlock.module.scss';

const FadeTransition = (props) => {
  const classNames = {
    appear: styles.fadeAppear,
    appearActive: styles.fadeAppearActive
  };
  return <CSSTransition {...props} classNames={classNames} in appear enter={false} exit={false} timeout={500} />;
};

const TransitionedBlock = ({children, className = '', tag = 'div'}) => {
  const items = Children.map(children, (child) => {
    return <FadeTransition>{child}</FadeTransition>;
  });

  if (!children) return null;
  return (
    <TransitionGroup className={`${styles.root}${className && ` ${className}`}`} component={tag}>
      {items}
    </TransitionGroup>
  );
};

TransitionedBlock.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  tag: PropTypes.string
};

export default TransitionedBlock;
