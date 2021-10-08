import PropTypes from 'prop-types';
import React from 'react';
import {Input, ListItemText, MenuItem, Select} from '@material-ui/core';
import CheckboxMUI from '../CheckboxMUI';

import './MultiSelectMUI.scss';

import {ReactComponent as ArrowIcon} from './icons/chevron-down.svg';

const MultiSelectMUI = ({
  className = '',
  items,
  label = 'Label',
  maxItems = 3,
  onChange,
  placeholder = 'Select...',
  value
}) => {
  return (
    <div className={`multi-select-mui${className && ` ${className}`}`}>
      {label && <label className='multi-select-mui__label'>{label}</label>}
      {value.length === 0 && <span className='multi-select-mui__placeholder'>{placeholder}</span>}
      <Select
        className='multi-select-mui__select-wrap'
        classes={{
          icon: 'multi-select-mui__icon',
          select: 'multi-select-mui__select'
        }}
        labelId='multiple-checkbox-label'
        id='multiple-checkbox'
        multiple
        value={value}
        onChange={onChange}
        input={<Input />}
        IconComponent={ArrowIcon}
        renderValue={(selected) => {
          if (selected.length <= maxItems) {
            return selected.join(', ');
          }
          return `${selected[0]}, ${selected[1]} + еще ${selected.length - 2}`;
        }}
        MenuProps={{
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
            <MenuItem className='multi-select-mui__list' key={name} value={name}>
              <CheckboxMUI className='multi-select-mui__checkbox' checked={value.indexOf(name) > -1}>
                <span />
              </CheckboxMUI>

              <ListItemText classes={{primary: 'multi-select-mui__list-item'}} primary={name} />
            </MenuItem>
          ))}
        {items.filter((value) => value.indexOf(value) > -1).length > 0 && <div className='line-check' />}
        {items
          .filter((value) => value.indexOf(value) === -1)
          .map((name) => (
            <MenuItem className='multi-select-mui__list' key={name} value={name}>
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
  items: PropTypes.array.isRequired,
  label: PropTypes.string,
  maxItems: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.array.isRequired
};

export default MultiSelectMUI;
