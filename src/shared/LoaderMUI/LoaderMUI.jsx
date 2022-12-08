import React from 'react';
import PropTypes from 'prop-types';
import {CircularProgress, LinearProgress} from '@material-ui/core';
import styles from './LoaderMUI.module.scss';

const LoaderMUI = ({className = '', linear = false, color = 'primary', circleSize = 40, noBg = false, onClick}) => {
  if (!linear)
    return (
      <div
        className={`${styles.backdrop}${!noBg ? ` ${styles.bg}` : ''}${className && ` ${className}`}`}
        onClick={onClick}
      >
        <CircularProgress
          classes={{
            root: styles.circular,
            colorPrimary: styles.colorPrimary,
            colorSecondary: styles.colorSecondary
          }}
          color={color}
          size={circleSize}
        />
      </div>
    );

  return (
    <LinearProgress
      className={className}
      classes={{
        root: styles.linear,
        colorPrimary: styles.colorPrimary,
        colorSecondary: styles.colorSecondary,
        barColorPrimary: styles.barColorPrimary,
        barColorSecondary: styles.barColorSecondary
      }}
      color={color}
    />
  );
};

LoaderMUI.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary']),
  circleSize: PropTypes.number,
  linear: PropTypes.bool,
  noBg: PropTypes.bool,
  onClick: PropTypes.func
};

export default LoaderMUI;
