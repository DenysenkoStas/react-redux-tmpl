import React from 'react';
import {selectOptions} from '../../helpers/mockData';
import {ExampleLayout} from './Examples';
import SelectComponent from '../../shared/SelectComponent';

const SelectComponentExample = () => {
  return (
    <ExampleLayout
      propsList='className, disabled, id, input, isClearable, isSearchable, loading, loadingMessage, menuIsOpen,
          noOptionsMessage, onBlur, onChange, onKeyDown, options, placeholder, reduxForm, value, withSearchIcon'
    >
      <p className='mb-10 mt-25'>
        disabled / isSearchable withSearchIcon / isClearable / loading loadingMessage="Loading message"
      </p>
      <div className='flex gap-25'>
        <SelectComponent options={selectOptions} disabled />
        <SelectComponent options={selectOptions} isSearchable withSearchIcon />
        <SelectComponent options={selectOptions} isClearable />
        <SelectComponent options={[]} loading loadingMessage='Loading message' />
      </div>

      <p className='mb-10 mt-25'>menuIsOpen / noOptionsMessage="No options message" / placeholder="Выберите..."</p>
      <div className='flex gap-25'>
        <SelectComponent options={selectOptions} menuIsOpen />
        <SelectComponent options={[]} noOptionsMessage='No options message' />
        <SelectComponent options={selectOptions} placeholder='Выберите...' />
      </div>
    </ExampleLayout>
  );
};

export default SelectComponentExample;
