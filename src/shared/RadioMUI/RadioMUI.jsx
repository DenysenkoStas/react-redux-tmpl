import React from 'react';
import PropTypes from 'prop-types';
import Radio from '@material-ui/core/Radio';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import styles from './RadioMUI.module.scss';

const RadioMUI = ({
  checked,
  className = '',
  checkedIcon = <RadioButtonCheckedIcon />,
  color = 'default',
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
      className={className}
      classes={{
        root: `${styles.root}${padding ? ` ${styles.padding}` : ''}${size === 'small' ? ` ${styles.small}` : ''}`,
        checked: styles.checked,
        disabled: styles.disabled,
        colorPrimary: styles.colorPrimary,
        colorSecondary: styles.colorSecondary
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
  color: PropTypes.oneOf(['default', 'primary', 'secondary']),
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
