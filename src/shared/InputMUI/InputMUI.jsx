import React from 'react';
import PropTypes from 'prop-types';
import {InputAdornment, TextField} from '@material-ui/core';
import TooltipMUI from '../TooltipMUI';
import {ReactComponent as ErrorIcon} from './icons/error.svg';
import styles from './InputMUI.module.scss';

const InputMUI = ({
  autoComplete,
  autoFocus = false,
  className = '',
  defaultValue,
  disabled = false,
  error,
  fullWidth = false,
  helperText,
  id,
  inputProps = {},
  inputRef,
  label,
  margin = 'none',
  maxRows,
  minRows,
  multiline = false,
  name = '',
  onChange,
  placeholder,
  required = false,
  select = false,
  size = 'medium',
  type = 'text',
  value,
  variant = 'outlined',

  shrink,
  readOnly = false,
  endAdornment = false,
  ...props
}) => {
  return (
    <TextField
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      className={className}
      classes={{
        root: styles.root
      }}
      defaultValue={defaultValue}
      disabled={disabled}
      error={!!error}
      fullWidth={fullWidth}
      helperText={helperText}
      id={id}
      inputProps={inputProps}
      inputRef={inputRef}
      label={label}
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
      value={value}
      variant={variant}
      {...props}
      InputProps={{
        classes: {
          root: `${styles.input}${variant === 'standard' ? '' : ` ${styles[variant]}`}`,
          focused: styles.focused,
          disabled: styles.disabled,
          error: styles.error,
          multiline: styles.multiline,
          input: styles.inputElement,
          underline: variant !== 'outlined' && styles.underline,
          notchedOutline: variant === 'outlined' && styles.notchedOutline,
          inputMarginDense: variant === 'outlined' && styles.inputMarginDense,
          formControl: variant === 'standard' && styles.formControl
        },
        readOnly,
        endAdornment: (
          <InputAdornment className={styles.endAdornment} position='end'>
            {error && !helperText ? (
              <TooltipMUI title={error} position='left' errorColor>
                <ErrorIcon className={styles.errorIcon} width='20px' height='20px' />
              </TooltipMUI>
            ) : endAdornment ? (
              endAdornment
            ) : (
              ''
            )}
          </InputAdornment>
        )
      }}
      FormHelperTextProps={{
        classes: {
          root: `${styles.helperText}${error ? ` ${styles.helperTextError}` : ''}`
        }
      }}
      InputLabelProps={{
        classes: {
          root: styles.label,
          focused: styles.labelFocused,
          shrink: styles.labelShrink,
          error: styles.labelError,
          disabled: styles.labelDisabled,
          outlined: styles.labelOutlined,
          filled: styles.labelFilled
        },
        shrink
      }}
    />
  );
};

InputMUI.propTypes = {
  autoComplete: PropTypes.string,
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  defaultValue: PropTypes.any,
  disabled: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  endAdornment: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  fullWidth: PropTypes.bool,
  helperText: PropTypes.node,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  inputRef: PropTypes.any,
  label: PropTypes.node,
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
  variant: PropTypes.oneOf(['filled', 'outlined', 'standard'])
};

export default InputMUI;
