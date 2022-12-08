import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import styles from './IconButtonMUI.module.scss';

const IconButtonMUI = ({
  children,
  className = '',
  color = 'default',
  disabled = false,
  disableFocusRipple = false,
  disableRipple = false,
  edge = false,
  size = 'small',
  onClick,
}) => (
  <IconButton
    className={className}
    classes={{
      root: styles.root,
      edgeStart: styles.edgeStart,
      edgeEnd: styles.edgeEnd,
      colorPrimary: styles.colorPrimary,
      colorSecondary: styles.colorSecondary,
      disabled: styles.disabled,
      sizeSmall: styles.sizeSmall,
      label: styles.label,
    }}
    color={color}
    disabled={disabled}
    disableFocusRipple={disableFocusRipple}
    disableRipple={disableRipple}
    edge={edge}
    size={size}
    onClick={onClick}
  >
    {children}
  </IconButton>
);

IconButtonMUI.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(['default', 'primary', 'secondary']),
  disableFocusRipple: PropTypes.bool,
  disableRipple: PropTypes.bool,
  disabled: PropTypes.bool,
  edge: PropTypes.oneOf(['start', 'end', false]),
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium']),
};

export default IconButtonMUI;
