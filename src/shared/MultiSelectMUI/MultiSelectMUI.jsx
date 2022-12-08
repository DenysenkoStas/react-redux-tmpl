import React from 'react';
import PropTypes from 'prop-types';
import {ListItemText, MenuItem, Select} from '@material-ui/core';
import CheckboxMUI from '../CheckboxMUI';
import {ReactComponent as ArrowIcon} from './icons/chevron-down.svg';
import styles from './MultiSelectMUI.module.scss';

const renderValue = (moreText) => (selected) => {
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
  const rootClasses = [styles.root];
  const labelClasses = [styles.label];
  if (label) rootClasses.push(styles.withLabel);
  if (disabled) {
    rootClasses.push(styles.disabled);
    labelClasses.push(styles.disabled);
  }
  if (className) rootClasses.push(className);

  return (
    <div className={rootClasses.join(' ')}>
      {label && <label className={labelClasses.join(' ')}>{label}</label>}
      {value.length === 0 && <span className={styles.placeholder}>{placeholder}</span>}
      <Select
        className={styles.selectWrap}
        classes={{
          select: styles.select,
          disabled: styles.disabled,
          icon: styles.icon
        }}
        disabled={disabled}
        multiple
        value={value}
        onChange={onChange}
        IconComponent={ArrowIcon}
        renderValue={renderValue(moreText)}
        MenuProps={{
          classes: {paper: styles.menu},
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
        {items?.filter((el) => value.indexOf(el) > -1)?.map((el) => option(el, value))}
        {items?.filter((el) => value.indexOf(el) > -1).length > 0 && <div className={styles.menuDivider} />}
        {items?.filter((el) => value.indexOf(el) === -1)?.map((el) => option(el, value))}
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
