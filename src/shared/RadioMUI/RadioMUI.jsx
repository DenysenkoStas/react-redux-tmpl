import React from 'react';
import PropTypes from 'prop-types';
import Radio from '@mui/material/Radio';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import styles from './RadioMUI.module.scss';

const RadioMUI = ({
  checked,
  className = '',
  checkedIcon = <RadioButtonCheckedIcon />,
  color = 'primary',
  disabled = false,
  disableRipple = false,
  icon = <RadioButtonUncheckedIcon />,
  id,
  inputProps,
  inputRef,
  onChange,
  padding = false,
  required = false,
  size = 'medium',
  value,
  ...props
}) => {
  return (
    <Radio
      className={`${styles.root} ${padding ? ` ${styles.padding}` : ''}${size === 'small' ? ` ${styles.small}` : ''}${
        className && ` ${className}`
      }`}
      classes={{
        // root: styles.root,
        checked: styles.checked,
        disabled: styles.disabled,
        colorPrimary: styles.colorPrimary,
        colorSecondary: styles.colorSecondary,
        colorInfo: styles.colorInfo,
        colorSuccess: styles.colorSuccess,
        colorError: styles.colorError,
        colorWarning: styles.colorWarning
      }}
      checked={checked}
      checkedIcon={checkedIcon}
      color={color}
      disabled={disabled}
      disableRipple={disableRipple}
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

RadioMUI.propTypes = {
  checked: PropTypes.bool,
  checkedIcon: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary', 'info', 'success', 'error', 'warning']),
  disableRipple: PropTypes.bool,
  disabled: PropTypes.bool,
  icon: PropTypes.node,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  inputRef: PropTypes.any,
  onChange: PropTypes.func,
  padding: PropTypes.bool,
  required: PropTypes.bool,
  size: PropTypes.oneOf(['medium', 'small']),
  value: PropTypes.any
};

export default RadioMUI;
