import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from '@material-ui/lab/Skeleton';
import styles from './SkeletonMUI.module.scss';

const SkeletonMUI = ({
  animation = 'pulse',
  children,
  className = '',
  component = 'span',
  height,
  loading = true,
  variant = 'text',
  width
}) => {
  if (loading) {
    return (
      <Skeleton
        className={className}
        animation={animation}
        children={children}
        classes={{
          root: styles.root,
          text: styles.text,
          rect: styles.rect,
          circle: styles.circle,
          pulse: styles.pulse,
          wave: styles.wave,
          withChildren: styles.withChildren,
          fitContent: styles.fitContent,
          heightAuto: styles.heightAuto
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
  animation: PropTypes.oneOf(['pulse', 'wave', false]),
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  loading: PropTypes.bool.isRequired,
  variant: PropTypes.oneOf(['text', 'rect', 'circle']),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default SkeletonMUI;
