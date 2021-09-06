import React from 'react';
import {Snackbar} from '@material-ui/core';
import {Alert} from '@material-ui/lab';

import './SnackbarMUI.scss';

const SnackbarMUI = ({open, onClose, autoHideDuration, severity = 'error', errors, children}) => {
  return (
    <Snackbar className='snackbar-mui' open={open} onClose={onClose} autoHideDuration={autoHideDuration}>
      <Alert className='alert-mui' onClose={onClose} severity={severity} variant='filled'>
        {errors && Object.keys(errors).map((item, idx) => <p key={idx}>{errors[item]}</p>)}
        {children}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarMUI;
