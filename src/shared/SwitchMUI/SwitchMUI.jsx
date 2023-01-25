import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';
import {Switch} from '@mui/material';
import styles from './SwitchMUI.module.scss';

const SwitchMUI = forwardRef(
  (
    {
      className = '',
      checked,
      color = 'primary',
      disabled = false,
      disableRipple = false,
      defaultChecked = false,
      edge = false,
      id,
      inputProps,
      inputRef,
      onChange,
      required = false,
      size = 'medium',
      value,
      ...props
    },
    ref
  ) => {
    return (
      <Switch
        className={className}
        classes={{
          root: styles.root,
          edgeStart: styles.edgeStart,
          edgeEnd: styles.edgeEnd,
          switchBase: styles.switchBase,
          colorPrimary: styles.colorPrimary,
          colorSecondary: styles.colorSecondary,
          colorInfo: styles.colorInfo,
          colorSuccess: styles.colorSuccess,
          colorError: styles.colorError,
          colorWarning: styles.colorWarning,
          sizeSmall: styles.sizeSmall,
          checked: styles.checked,
          disabled: styles.disabled,
          input: styles.input,
          thumb: styles.thumb,
          track: styles.track
        }}
        checked={checked}
        color={color}
        disabled={disabled}
        disableRipple={disableRipple}
        defaultChecked={defaultChecked}
        edge={edge}
        id={id}
        inputProps={inputProps}
        inputRef={inputRef}
        onChange={onChange}
        required={required}
        size={size}
        value={value}
        {...props}
        ref={ref}
      />
    );
  }
);

SwitchMUI.muiName = 'Switch';
SwitchMUI.propTypes = {
  checked: PropTypes.bool,
  checkedIcon: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary', 'info', 'success', 'error', 'warning']),
  defaultChecked: PropTypes.bool,
  disableRipple: PropTypes.bool,
  disabled: PropTypes.bool,
  edge: PropTypes.oneOf(['end', 'start', false]),
  icon: PropTypes.node,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  inputRef: PropTypes.any,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  size: PropTypes.oneOf(['medium', 'small']),
  value: PropTypes.any
};

export default SwitchMUI;
