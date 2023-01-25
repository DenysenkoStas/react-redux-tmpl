import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@mui/material/Checkbox';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import styles from './CheckboxMUI.module.scss';

const CheckboxMUI = ({
  className = '',
  checked,
  checkedIcon = <CheckBoxIcon />,
  color = 'primary',
  disabled = false,
  disableRipple = false,
  defaultChecked,
  icon = <CheckBoxOutlineBlankIcon />,
  id,
  indeterminate = false,
  indeterminateIcon = <IndeterminateCheckBoxIcon />,
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
    <Checkbox
      className={`${styles.root}${padding ? ` ${styles.padding}` : ''}${className && ` ${className}`}`}
      classes={{
        // root: `${styles.root}${padding ? ` ${styles.padding}` : ''}`,
        checked: styles.checked,
        disabled: styles.disabled,
        indeterminate: styles.indeterminate,
        colorPrimary: styles.colorPrimary,
        colorSecondary: styles.colorSecondary,
        colorInfo: styles.colorInfo,
        colorSuccess: styles.colorSuccess,
        colorError: styles.colorError,
        colorWarning: styles.colorWarning,
      }}
      checked={checked}
      checkedIcon={checkedIcon}
      color={color}
      disabled={disabled}
      disableRipple={disableRipple}
      defaultChecked={defaultChecked}
      icon={icon}
      id={id}
      indeterminate={indeterminate}
      indeterminateIcon={indeterminateIcon}
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

CheckboxMUI.muiName = 'Checkbox';
CheckboxMUI.propTypes = {
  checked: PropTypes.bool,
  checkedIcon: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary', 'info', 'success', 'error', 'warning']),
  defaultChecked: PropTypes.bool,
  disableRipple: PropTypes.bool,
  disabled: PropTypes.bool,
  icon: PropTypes.node,
  id: PropTypes.string,
  indeterminate: PropTypes.bool,
  indeterminateIcon: PropTypes.node,
  inputProps: PropTypes.object,
  inputRef: PropTypes.any,
  onChange: PropTypes.func,
  padding: PropTypes.bool,
  required: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium']),
  value: PropTypes.any
};

export default CheckboxMUI;
