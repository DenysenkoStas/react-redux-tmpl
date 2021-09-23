import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import ErrorIcon from '@material-ui/icons/Error';

import TooltipMessage from '../TooltipMUI';

import './InputField.scss';

const propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  multiline: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  endAdornment: PropTypes.node,
};

const InputField = ({
  id,
  type,
  label,
  autoFocus,
  disabled = false,
  multiline,
  error,
  endAdornment = false,
  ...props
}) => (
  <TextField
    {...props}
    id={id}
    type={type}
    label={label}
    variant='filled'
    disabled={disabled}
    error={!!error}
    autoComplete='off'
    autoFocus={autoFocus}
    multiline={multiline}
    rows='4'
    rowsMax='10'
    classes={{
      root: 'input-field',
    }}
    InputProps={{
      endAdornment: (
        <InputAdornment position='end'>
          {error ? (
            <TooltipMessage text={error} delay={200} error>
              <ErrorIcon />
            </TooltipMessage>
          ) : endAdornment ? (
            endAdornment
          ) : (
            ''
          )}
        </InputAdornment>
      ),
      classes: {
        root: 'custom-input',
        focused: 'input-focused',
        error: 'input-error',
        adornedEnd: 'input-adorned',
        multiline: 'input-multiline',
        disabled: 'input-disabled',
      },
    }}
    InputLabelProps={{
      classes: {
        root: 'input-label',
        focused: 'input-label-focused',
        shrink: 'input-label-active',
        error: 'input-label-error',
        disabled: 'input-label-disabled',
      },
    }}
  />
);

InputField.propTypes = propTypes;

export default InputField;
