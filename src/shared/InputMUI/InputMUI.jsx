import React from 'react';
import PropTypes from 'prop-types';
import {TextField} from '@material-ui/core';

import './InputMUI.scss';

const InputMUI = ({
  autoComplete = '',
  autoFocus = false,
  className = '',
  color = 'primary',
  defaultValue,
  disabled = false,
  error = false,
  fullWidth = false,
  helperText,
  id = '',
  inputProps = {},
  inputRef,
  label,
  margin = 'none',
  maxRows = 10,
  minRows,
  multiline = false,
  name = '',
  onChange,
  placeholder = '',
  required = false,
  select = false,
  size = 'medium',
  type = 'text',
  value,
  variant = 'outlined',

  shrink,
  readOnly = false,
  ...props
}) => {
  return (
    <TextField
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      className={className}
      classes={{
        root: 'input-mui',
      }}
      color={color}
      defaultValue={defaultValue}
      disabled={disabled}
      error={error}
      fullWidth={fullWidth}
      helperText={helperText}
      id={id}
      inputProps={inputProps}
      inputRef={inputRef}
      label={label}
      margin={margin}
      maxRows={maxRows}
      minRows={minRows}
      multiline={multiline}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      select={select}
      size={size}
      type={type}
      variant={variant}
      {...props}
      InputProps={{
        classes: {
          root: 'input-mui__input',
          focused: 'input-mui__input--focused',
          disabled: 'input-mui__input--disabled',
          error: 'input-mui__input-error',
        },
        readOnly: readOnly,
      }}
      // label
      InputLabelProps={{
        classes: {
          root: 'input-mui__label',
          focused: 'input-mui__label--focused',
          shrink: 'input-mui__label--active',
          error: 'input-mui__label--error',
          disabled: 'input-mui__label--disabled',
        },
        shrink: shrink,
      }}
      // helper
      FormHelperTextProps={{
        classes: {
          root: `input-mui__helper-text${error ? ' input-mui__helper-text--error' : ''}`,
        },
      }}
    />
  );
};

InputMUI.propTypes = {
  autoComplete: PropTypes.string,
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary']),
  defaultValue: PropTypes.any,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  fullWidth: PropTypes.bool,
  helperText: PropTypes.node,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  inputRef: PropTypes.any,
  label: PropTypes.node,
  margin: PropTypes.oneOf(['dense', 'none', 'normal']),
  maxRows: PropTypes.number,
  minRows: PropTypes.number,
  multiline: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  select: PropTypes.bool,
  shrink: PropTypes.any,
  size: PropTypes.oneOf(['medium', 'small']),
  type: PropTypes.string,
  value: PropTypes.any,
  variant: PropTypes.oneOf(['filled', 'outlined', 'standard']),
};

export default InputMUI;
