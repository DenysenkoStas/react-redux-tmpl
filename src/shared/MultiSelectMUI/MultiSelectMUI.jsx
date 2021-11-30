import PropTypes from 'prop-types';
import React from 'react';
import {ListItemText, MenuItem, Select} from '@material-ui/core';
import CheckboxMUI from '../CheckboxMUI';

import './MultiSelectMUI.scss';

import {ReactComponent as ArrowIcon} from './icons/chevron-down.svg';

const MultiSelectMUI = ({
  className = '',
  disabled,
  items,
  label,
  moreText = 'more',
  onChange,
  placeholder = 'Select...',
  value
}) => {
  let disabledLabel = ' multi-select-mui__label--disabled';
  if (!disabled) disabledLabel = '';

  return (
    <div className={`multi-select-mui${label ? ' multi-select-mui--with-label' : ''}${className && ` ${className}`}`}>
      {label && <label className={`multi-select-mui__label${disabledLabel}`}>{label}</label>}
      {value.length === 0 && <span className='multi-select-mui__placeholder'>{placeholder}</span>}
      <Select
        className='multi-select-mui__select-wrap'
        classes={{
          select: 'multi-select-mui__select',
          disabled: 'multi-select-mui__select--disabled',
          icon: 'multi-select-mui__icon'
        }}
        disabled={disabled}
        multiple
        value={value}
        onChange={onChange}
        IconComponent={ArrowIcon}
        renderValue={(selected) => {
          if (selected.length <= 3) {
            return selected.join(', ');
          }
          return `${selected[0]}, ${selected[1]} + ${moreText} ${selected.length - 2}`;
        }}
        MenuProps={{
          classes: {paper: 'multi-select-mui__list'},
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left'
          },
          transformOrigin: {
            vertical: 'top',
            horizontal: 'left'
          },
          getContentAnchorEl: null
        }}
      >
        {items
          .filter((value) => value.indexOf(value) > -1)
          .map((name) => (
            <MenuItem className='multi-select-mui__menu-item' key={name} value={name}>
              <CheckboxMUI className='multi-select-mui__checkbox' checked={value.indexOf(name) > -1}>
                <span />
              </CheckboxMUI>
              <ListItemText classes={{primary: 'multi-select-mui__list-item'}} primary={name} />
            </MenuItem>
          ))}

        {items.filter((value) => value.indexOf(value) > -1).length > 0 && (
          <div className='multi-select-mui__line-check' />
        )}

        {items
          .filter((value) => value.indexOf(value) === -1)
          .map((name) => (
            <MenuItem className='multi-select-mui__menu-item' key={name} value={name}>
              <CheckboxMUI className='multi-select-mui__checkbox' checked={value.indexOf(name) > -1} />
              <ListItemText classes={{primary: 'multi-select-mui__list-item'}} primary={name} />
            </MenuItem>
          ))}
      </Select>
    </div>
  );
};

MultiSelectMUI.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  items: PropTypes.array.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.array.isRequired
};

export default MultiSelectMUI;
