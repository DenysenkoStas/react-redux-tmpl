import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from '@material-ui/lab/Skeleton';

import './SkeletonMUI.scss';

const SkeletonMUI = ({
  animation = 'pulse',
  children,
  component = 'span',
  width,
  height,
  variant = 'text',
  className,
  loading = true,
}) => {
  if (loading) {
    return (
      <Skeleton
        className={className}
        animation={animation}
        children={children}
        classes={{
          root: 'skeleton-mui',
          text: 'skeleton-mui--text',
          rect: 'skeleton-mui--rect',
          circle: 'skeleton-mui--circle',
          pulse: 'skeleton-mui--pulse',
          wave: 'skeleton-mui--wave',
          withChildren: 'skeleton-mui--with-children',
          fitContent: 'skeleton-mui--fit-content',
          heightAuto: 'skeleton-mui--height-auto',
        }}
        component={component}
        width={width}
        height={height}
        variant={variant}
      />
    );
  } else {
    return children;
  }
};

SkeletonMUI.propTypes = {
  animation: PropTypes.string,
  children: PropTypes.node,
  component: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  variant: PropTypes.string,
  className: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default SkeletonMUI;
