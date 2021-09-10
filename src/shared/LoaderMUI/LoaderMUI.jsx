import React from 'react';
import PropTypes from 'prop-types';
import {CircularProgress, LinearProgress} from '@material-ui/core';

import './LoaderMUI.scss';

const LoaderMUI = ({linear = false, color = 'primary', withBg = true, onClick}) => {
  if (linear)
    return (
      <LinearProgress
        className='loader-mui__linear'
        classes={{root: 'loader-app', colorPrimary: 'loader-color', barColorPrimary: 'loader-bar-color'}}
        color={color}
      />
    );

  return (
    <div className={`loader-mui${withBg ? ' loader-mui--bg' : ''}`} onClick={onClick}>
      <CircularProgress className='loader-mui__circular' color={color} />
    </div>
  );
};

LoaderMUI.propTypes = {
  color: PropTypes.oneOf(['inherit', 'primary', 'secondary']),
  linear: PropTypes.bool,
  onClick: PropTypes.func,
  withBg: PropTypes.bool,
};

export default LoaderMUI;
