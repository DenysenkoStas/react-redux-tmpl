import React, {Component} from 'react';
import {TextField, InputAdornment} from '@material-ui/core';

import './InputMUI.scss';

class InputMUI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: props.type,
    };
  }

  changeType = () => {
    this.setState(({type}) => ({
      type: type === 'password' ? 'text' : 'password',
    }));
  };

  render() {
    const {
      className,
      input,
      placeholder = 'Type here…',
      label,
      autoFocus,
      symbol,
      disabled,
      placement = 'end',
      shrink = true,
      multiline = false,
      readOnly = false,
      meta: {touched, error},
    } = this.props;
    const {type} = this.state;
    return (
      <TextField
        {...input}
        className={className}
        type={type}
        label={label}
        variant='outlined'
        disabled={disabled}
        error={touched && !!error}
        placeholder={placeholder}
        autoComplete='off'
        autoFocus={autoFocus}
        classes={{
          root: `custom-input-wrapper${readOnly ? ' readonly' : ''}`,
        }}
        multiline={multiline}
        InputProps={{
          startAdornment:
            symbol !== undefined && placement === 'start' ? (
              <InputAdornment position='start'>
                <span>{symbol}</span>
              </InputAdornment>
            ) : (
              ''
            ),
          endAdornment: (
            <InputAdornment position='start'>
              <span className={symbol ? 'symbol' : ''}>{symbol}</span>
              {touched && !!error && <span className='error-text'>{error}</span>}
            </InputAdornment>
          ),
          classes: {
            root: 'custom-input',
            focused: 'custom-input-focused',
            disabled: 'custom-input-disabled',
            error: 'custom-input-error',
            adornedEnd: 'custom-input-adorned-end',
            adornedStart: 'custom-input-adorned-start',
            notchedOutline: 'custom-input-outline',
          },
          readOnly: readOnly,
        }}
        InputLabelProps={{
          classes: {
            root: 'custom-input-label',
            focused: 'custom-input-label-focused',
            shrink: 'custom-input-label-active',
            error: 'custom-input-label-error',
          },
          shrink: shrink,
        }}
      />
    );
  }
}

export default InputMUI;
