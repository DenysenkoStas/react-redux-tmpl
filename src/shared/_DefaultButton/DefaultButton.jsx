import React from 'react';
import {Link} from 'react-router-dom';
import {Button, CircularProgress} from '@material-ui/core';

import './DefaultButton.scss';

const DefaultButton = ({
  children,
  variant = 'contained',
  type = 'button',
  to,
  formAction,
  disabled,
  onClick,
  loading,
  className = '',
}) => {
  if (type === 'link') {
    return (
      <Button
        component={Link}
        to={to}
        variant={variant}
        classes={{
          root: `default-button default-button--${variant} ${className}`,
        }}
      >
        {children}
      </Button>
    );
  } else {
    return (
      <Button
        type={formAction ? 'submit' : 'button'}
        variant={variant}
        disabled={disabled}
        onClick={onClick}
        classes={{
          root: `default-button default-button--${variant} ${className}`,
        }}
      >
        {loading ? <CircularProgress size={24} /> : children}
      </Button>
    );
  }
};

export default DefaultButton;
