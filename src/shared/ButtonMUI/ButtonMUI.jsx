import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';
import {Button, CircularProgress} from '@mui/material';
import styles from './ButtonMUI.module.scss';

const ButtonMUI = forwardRef(
  (
    {
      children,
      className = '',
      color = 'primary',
      component = 'button',
      disabled = false,
      disableElevation = true,
      endIcon,
      fullWidth = false,
      href,
      size = 'medium',
      startIcon,
      variant = 'contained',
      formAction = false,
      onClick,
      loading = false,
      ...props
    },
    ref
  ) => {
    return (
      <Button
        className={`${styles.root}${className && ` ${className}`}`}
        color={color}
        component={component}
        disabled={disabled}
        disableElevation={disableElevation}
        endIcon={endIcon}
        fullWidth={fullWidth}
        href={href}
        size={size}
        startIcon={startIcon}
        variant={variant}
        type={formAction ? 'submit' : 'button'}
        onClick={onClick}
        {...props}
        ref={ref}
      >
        {loading ? <CircularProgress size={24} color='inherit' /> : children}
      </Button>
    );
  }
);

ButtonMUI.muiName = 'Button';
ButtonMUI.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary', 'info', 'success', 'error', 'warning']),
  component: PropTypes.elementType,
  disabled: PropTypes.bool,
  disableElevation: PropTypes.bool,
  endIcon: PropTypes.node,
  formAction: PropTypes.bool,
  fullWidth: PropTypes.bool,
  href: PropTypes.string,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['large', 'medium', 'small']),
  startIcon: PropTypes.node,
  variant: PropTypes.oneOf(['contained', 'outlined', 'text'])
};

export default ButtonMUI;
