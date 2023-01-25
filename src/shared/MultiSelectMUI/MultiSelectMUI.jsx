import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';
import {ListItemText, MenuItem} from '@mui/material';
import {CheckboxMUI, InputMUI} from '../index';
import {ReactComponent as ArrowIcon} from './icons/chevron-down.svg';
import styles from './MultiSelectMUI.module.scss';

const renderValue = (moreText, placeholder) => (selected) => {
  if (selected.length === 0 && placeholder) return <span className={styles.placeholder}>{placeholder}</span>;
  if (selected.length <= 3) return selected.join(', ');
  return `${selected[0]}, ${selected[1]} + ${moreText} ${selected.length - 2}`;
};

const option = (el, value) => {
  return (
    <MenuItem key={el} className={styles.option} value={el}>
      <CheckboxMUI className={styles.optionCheckbox} checked={value.indexOf(el) > -1} />
      <ListItemText classes={{primary: styles.optionText}} primary={<>{el}</>} />
    </MenuItem>
  );
};

const MultiSelectMUI = forwardRef(
  (
    {className = '', disabled, label, moreText = 'more', onChange, options, placeholder = 'Select...', value, ...props},
    ref
  ) => {
    const rootClasses = [styles.root];
    if (label) rootClasses.push(styles.withLabel);
    if (className) rootClasses.push(className);

    return (
      <InputMUI
        className={rootClasses.join(' ')}
        disabled={disabled}
        label={label}
        variant='outlined'
        value={value}
        onChange={onChange}
        select
        SelectProps={{
          classes: {icon: styles.icon},
          displayEmpty: !!placeholder,
          multiple: true,
          IconComponent: ArrowIcon,
          renderValue: renderValue(moreText, placeholder),
          MenuProps: {
            classes: {paper: styles.menu},
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'left'
            },
            transformOrigin: {
              vertical: 'top',
              horizontal: 'left'
            }
          }
        }}
        {...props}
        ref={ref}
      >
        {options?.filter((el) => value?.indexOf(el) > -1)?.map((el) => option(el, value))}
        {options?.filter((el) => value?.indexOf(el) > -1).length > 0 && <div className={styles.menuDivider} />}
        {options?.filter((el) => value?.indexOf(el) === -1)?.map((el) => option(el, value))}
      </InputMUI>
    );
  }
);

MultiSelectMUI.muiName = 'Select';
MultiSelectMUI.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.array.isRequired
};

export default MultiSelectMUI;
