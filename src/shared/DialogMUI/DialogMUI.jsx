import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import {ReactComponent as CloseIcon} from './icons/close.svg';
import styles from './DialogMUI.module.scss';

const DialogMUI = ({open, onClose, className = '', children, fullScreen = false}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      className={className}
      classes={{
        root: styles.root,
        paper: styles.paper,
        paperFullScreen: styles.paperFullScreen
      }}
      fullScreen={fullScreen}
    >
      <div className={styles.content}>
        <button className={styles.closeButton} aria-label='Close dialog button' onClick={onClose}>
          <CloseIcon className={styles.closeIcon} />
        </button>
        {children}
      </div>
    </Dialog>
  );
};

DialogMUI.muiName = 'Dialog';
DialogMUI.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  fullScreen: PropTypes.bool,
  onClose: PropTypes.func,
  open: PropTypes.bool
};

export default DialogMUI;
