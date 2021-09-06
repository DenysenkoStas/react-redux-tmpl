import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import PropTypes from 'prop-types';

import './SkeletonMUI.scss';

const propTypes = {
  loading: PropTypes.bool.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  children: PropTypes.node.isRequired,
  variant: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

const SkeletonMUI = ({loading, width, height, children, variant, classes}) => {
  if (loading) {
    return (
      <Skeleton
        variant={variant}
        width={width}
        height={height}
        animation='wave'
        classes={{
          root: `skeleton-component ${classes}`,
        }}
      />
    );
  } else {
    return children;
  }
};

SkeletonMUI.propTypes = propTypes;

export default SkeletonMUI;
