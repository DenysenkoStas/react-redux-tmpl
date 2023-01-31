import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';
import Select, {components} from 'react-select';
import {ReactComponent as ExpandIcon} from './icons/chevron-down.svg';
import styles from './SelectComponent.module.scss';

export const DropdownIndicator = (props) => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <div className={`${styles.indicator} ${props.selectProps.menuIsOpen ? ` ${styles.indicatorActive}` : ''}`}>
          <ExpandIcon alt='Expand icon' />
        </div>
      </components.DropdownIndicator>
    )
  );
};

const SelectComponent = forwardRef(
  (
    {
      className = '',
      disabled,
      id,
      input,
      isClearable,
      isSearchable = false,
      loading,
      loadingMessage = 'Loading...',
      menuIsOpen,
      noOptionsMessage = 'No options',
      onBlur,
      onChange,
      onKeyDown,
      options,
      placeholder,
      reduxForm = false,
      value,
      withSearchIcon,
      ...props
    },
    ref
  ) => (
    <Select
      {...input}
      inputId={id}
      menuIsOpen={menuIsOpen}
      className={`${styles.root}${isSearchable ? ` ${styles.searchable}` : ''}${
        withSearchIcon ? ` ${styles.searchIcon}` : ''
      }${className && ` ${className}`}`}
      classNamePrefix='select'
      isDisabled={disabled}
      isLoading={loading}
      isClearable={isClearable}
      isSearchable={isSearchable}
      value={value}
      options={options}
      onChange={reduxForm ? (value) => input.onChange(value) : onChange}
      onBlur={reduxForm ? () => input.onBlur(input.value) : onBlur}
      loadingMessage={() => loadingMessage}
      placeholder={placeholder}
      onKeyDown={onKeyDown}
      components={{DropdownIndicator}}
      noOptionsMessage={() => noOptionsMessage}
      innerRef={ref}
      {...props}
    />
  )
);

SelectComponent.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  input: PropTypes.object,
  isClearable: PropTypes.bool,
  isSearchable: PropTypes.bool,
  loading: PropTypes.bool,
  loadingMessage: PropTypes.string,
  menuIsOpen: PropTypes.bool,
  noOptionsMessage: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  reduxForm: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  withSearchIcon: PropTypes.bool
};

export default SelectComponent;
