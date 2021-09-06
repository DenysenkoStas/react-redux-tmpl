import React from 'react';
import {CircularProgress, LinearProgress} from '@material-ui/core';

import './LoaderMUI.scss';

const LoaderMUI = ({linear = false, withBg = true}) => {
  if (linear)
    return (
      <LinearProgress
        className='loader-mui__linear'
        classes={{root: 'loader-app', colorPrimary: 'loader-color', barColorPrimary: 'loader-bar-color'}}
      />
    );

  return (
    <div className={`loader-mui${withBg ? ' loader-mui--bg' : ''}`}>
      <CircularProgress className='loader-mui__circular' />
    </div>
  );
};

export default LoaderMUI;
