import React from 'react';
import {Button, CircularProgress} from '@material-ui/core';
import PropTypes from 'prop-types';

import './ButtonMUI.scss';

const ButtonMUI = ({
  children,
  className = '',
  color = 'default',
  component = 'button',
  disabled = false,
  noShadow = false,
  disableFocusRipple = false,
  disableRipple = false,
  endIcon,
  fullWidth = false,
  href,
  size = 'medium',
  startIcon,
  variant = 'contained',
  type = 'button',
  to,
  formAction,
  onClick,
  loading,
}) => {
  return (
    <Button
      className={className}
      classes={{
        root: 'button-mui',
        contained: 'button-mui--contained',
        containedPrimary: 'button-mui--contained-primary',
        containedSecondary: 'button-mui--contained-secondary',
        outlined: 'button-mui--outlined',
        outlinedPrimary: 'button-mui--outlined-primary',
        outlinedSecondary: 'button-mui--outlined-secondary',
        text: 'button-mui--text',
        textPrimary: 'button-mui--text-primary',
        textSecondary: 'button-mui--text-secondary',
        sizeSmall: 'button-mui--small',
        sizeLarge: 'button-mui--large',
        startIcon: 'button-mui__start-icon',
        endIcon: 'button-mui__end-icon',
      }}
      color={color}
      component={component}
      disabled={disabled}
      disableElevation={noShadow}
      disableFocusRipple={disableFocusRipple}
      disableRipple={disableRipple}
      endIcon={endIcon}
      fullWidth={fullWidth}
      href={href}
      size={size}
      startIcon={startIcon}
      variant={variant}
      type={formAction ? 'submit' : type}
      to={to}
      onClick={onClick}
    >
      {loading ? <CircularProgress size={24} color='inherit' /> : children}
    </Button>
  );
};

ButtonMUI.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
  component: PropTypes.elementType,
  disabled: PropTypes.bool,
};

export default ButtonMUI;
