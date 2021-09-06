import React from 'react';
import Dialog from '@material-ui/core/Dialog';

import './DialogMUI.scss';

import {ReactComponent as CloseIcon} from './icons/close.svg';

const DialogMUI = ({open, onClose, className = '', children}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      classes={{
        root: `default-dialog-root${className && ` ${className}`}`,
        paper: 'paper-custom-dialog',
      }}
    >
      <div className='dialog-wrapper'>
        <button onClick={onClose} className='dialog-close-button'>
          <CloseIcon />
        </button>
        {children}
      </div>
    </Dialog>
  );
};

export default DialogMUI;
