import React from 'react';
import SelectComponent from '../../shared/SelectComponent';

const SelectComponentExample = () => {
  const options = [
    {value: 'chocolate', label: 'Chocolate'},
    {value: 'strawberry', label: 'Strawberry'},
    {value: 'vanilla', label: 'Vanilla'}
  ];
  let noOptions = [];

  return (
    <>
      <h2 className='mb-15'>SelectComponent</h2>

      <section className='card-wrap'>
        <p>
          <b>Props:</b> className, disabled, id, input, isClearable, isSearchable, loading, loadingMessage, menuIsOpen,
          noOptionsMessage, onBlur, onChange, onKeyDown, options, placeholder, reduxForm, value, withSearchIcon
        </p>

        <p className='mb-10 mt-25'>
          disabled / isSearchable withSearchIcon / isClearable / loading loadingMessage='Loading message'
        </p>
        <div className='flex gap-25'>
          <SelectComponent options={options} disabled />
          <SelectComponent options={options} isSearchable withSearchIcon />
          <SelectComponent options={options} isClearable />
          <SelectComponent options={noOptions} loading loadingMessage='Loading message' />
        </div>

        <p className='mb-10 mt-25'>menuIsOpen / noOptionsMessage='No options message' / placeholder='Выберите...'</p>
        <div className='flex gap-25'>
          <SelectComponent options={options} menuIsOpen />
          <SelectComponent options={noOptions} noOptionsMessage='No options message' />
          <SelectComponent options={options} placeholder='Выберите...' />
        </div>
      </section>
    </>
  );
};

export default SelectComponentExample;
