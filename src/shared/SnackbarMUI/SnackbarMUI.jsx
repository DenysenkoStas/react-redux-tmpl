import React from 'react';
import PropTypes from 'prop-types';
import {Snackbar, Alert} from '@mui/material';
import styles from './SnackbarMUI.module.scss';

const SnackbarMUI = ({autoHideDuration, children, errors, onClose, open, severity = 'error'}) => {
  return (
    <Snackbar
      className={styles.root}
      open={open}
      onClose={onClose}
      autoHideDuration={autoHideDuration}
      anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
    >
      <Alert className={styles.alert} onClose={onClose} severity={severity} variant='filled'>
        {errors && Object.keys(errors).map((item, idx) => <p key={idx}>{errors[item]}</p>)}
        {children}
      </Alert>
    </Snackbar>
  );
};

SnackbarMUI.propTypes = {
  autoHideDuration: PropTypes.number,
  children: PropTypes.any,
  errors: PropTypes.object,
  onClose: PropTypes.func,
  open: PropTypes.bool,
  severity: PropTypes.oneOf(['error', 'warning', 'info', 'success'])
};

export default SnackbarMUI;
