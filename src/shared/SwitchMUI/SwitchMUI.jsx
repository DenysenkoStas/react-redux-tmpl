import React from 'react';
import PropTypes from 'prop-types';
import {Switch} from '@material-ui/core';
import styles from './SwitchMUI.module.scss';

const SwitchMUI = ({
  className = '',
  checked,
  checkedIcon = <span className={`MuiSwitch-thumb ${styles.thumb}`} />,
  color = 'default',
  disabled = false,
  disableRipple = false,
  defaultChecked = false,
  edge = false,
  icon = <span className={`MuiSwitch-thumb ${styles.thumb}`} />,
  id,
  inputProps,
  inputRef,
  onChange,
  required = false,
  size = 'medium',
  value,
  ...props
}) => {
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
        sizeSmall: styles.sizeSmall,
        checked: styles.checked,
        disabled: styles.disabled,
        input: styles.input,
        thumb: styles.thumb,
        track: styles.track
      }}
      checked={checked}
      checkedIcon={checkedIcon}
      color={color}
      disabled={disabled}
      disableRipple={disableRipple}
      defaultChecked={defaultChecked}
      edge={edge}
      icon={icon}
      id={id}
      inputProps={inputProps}
      inputRef={inputRef}
      onChange={onChange}
      required={required}
      size={size}
      value={value}
      {...props}
    />
  );
};

SwitchMUI.propTypes = {
  checked: PropTypes.bool,
  checkedIcon: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(['default', 'primary', 'secondary']),
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
