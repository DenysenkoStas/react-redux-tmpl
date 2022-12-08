import React from 'react';
import PropTypes from 'prop-types';
import {Button, CircularProgress} from '@material-ui/core';
import styles from './ButtonMUI.module.scss';

const ButtonMUI = ({
  children,
  className = '',
  color = 'default',
  component = 'button',
  disabled = false,
  noShadow = false,
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
}) => {
  return (
    <Button
      className={className}
      classes={{
        root: styles.root,
        contained: styles.contained,
        containedPrimary: styles.containedPrimary,
        containedSecondary: styles.containedSecondary,
        outlined: styles.outlined,
        outlinedPrimary: styles.outlinedPrimary,
        outlinedSecondary: styles.outlinedSecondary,
        text: styles.text,
        textPrimary: styles.textPrimary,
        textSecondary: styles.textSecondary,
        disabled: styles.disabled,
        sizeSmall: styles.sizeSmall,
        sizeLarge: styles.sizeLarge,
        startIcon: styles.startIcon,
        endIcon: styles.endIcon
      }}
      color={color}
      component={component}
      disabled={disabled}
      disableElevation={noShadow}
      endIcon={endIcon}
      fullWidth={fullWidth}
      href={href}
      size={size}
      startIcon={startIcon}
      variant={variant}
      type={formAction ? 'submit' : 'button'}
      onClick={onClick}
      {...props}
    >
      {loading ? <CircularProgress size={24} color='inherit' /> : children}
    </Button>
  );
};

ButtonMUI.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(['default', 'primary', 'secondary']),
  component: PropTypes.elementType,
  disabled: PropTypes.bool,
  endIcon: PropTypes.node,
  formAction: PropTypes.bool,
  fullWidth: PropTypes.bool,
  href: PropTypes.string,
  loading: PropTypes.bool,
  noShadow: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['large', 'medium', 'small']),
  startIcon: PropTypes.node,
  variant: PropTypes.oneOf(['contained', 'outlined', 'text'])
};

export default ButtonMUI;
