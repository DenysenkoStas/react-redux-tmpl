import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import styles from './IconButtonMUI.module.scss';

const IconButtonMUI = forwardRef(
  (
    {
      children,
      className = '',
      color = 'primary',
      disabled = false,
      disableFocusRipple = false,
      disableRipple = false,
      edge = false,
      size = 'small',
      onClick,
      ...props
    },
    ref
  ) => (
    <IconButton
      className={className}
      classes={{
        root: styles.root,
        edgeStart: styles.edgeStart,
        edgeEnd: styles.edgeEnd,
        colorPrimary: styles.colorPrimary,
        colorSecondary: styles.colorSecondary,
        colorInfo: styles.colorInfo,
        colorSuccess: styles.colorSuccess,
        colorError: styles.colorError,
        colorWarning: styles.colorWarning,
        disabled: styles.disabled,
        sizeSmall: styles.sizeSmall,
        sizeMedium: styles.sizeMedium,
        sizeLarge: styles.sizeLarge
      }}
      color={color}
      disabled={disabled}
      disableFocusRipple={disableFocusRipple}
      disableRipple={disableRipple}
      edge={edge}
      size={size}
      onClick={onClick}
      {...props}
      ref={ref}
    >
      {children}
    </IconButton>
  )
);

IconButtonMUI.muiName = 'IconButton';
IconButtonMUI.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary', 'info', 'success', 'error', 'warning']),
  disableFocusRipple: PropTypes.bool,
  disableRipple: PropTypes.bool,
  disabled: PropTypes.bool,
  edge: PropTypes.oneOf(['start', 'end', false]),
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};

export default IconButtonMUI;
