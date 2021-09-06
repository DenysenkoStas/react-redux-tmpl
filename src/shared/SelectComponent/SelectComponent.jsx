import React from 'react';
import Select, {components} from 'react-select';
import expand_icon from './icons/chevron-down.svg';

import './SelectComponent.scss';

export const DropdownIndicator = (props) => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <div className={props.selectProps.menuIsOpen ? 'select-indicator indicator-active' : 'select-indicator'}>
          <img src={expand_icon} alt='expand icon' />
        </div>
      </components.DropdownIndicator>
    )
  );
};

const SelectComponent = ({
  id,
  input,
  menuIsOpen,
  className,
  reduxForm = false,
  value,
  onKeyDown,
  options,
  loading,
  loadingMessage = 'Loading filters...',
  onChange,
  onBlur,
  placeholder,
  isClearable,
  isSearchable = false,
  withSearchIcon,
  disabled,
}) => (
  <Select
    {...input}
    inputId={id}
    menuIsOpen={menuIsOpen}
    className={`select-component${isSearchable ? ' select-component--searchable' : ''}${
      withSearchIcon ? ' select-component--search-icon' : ''
    }${className ? ` ${className}` : ''}`}
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
    noOptionsMessage={() => 'No options'}
  />
);

export default SelectComponent;
