import React from 'react';
import SelectComponent from '../../../shared/SelectComponent';

const SelectComponentExample = () => {
  const options = [
    {value: 'chocolate', label: 'Chocolate'},
    {value: 'strawberry', label: 'Strawberry'},
    {value: 'vanilla', label: 'Vanilla'},
  ];

  return (
    <>
      <h2 className='mb-15'>SelectComponent</h2>

      <section className='card-wrap flex gap-25'>
        <SelectComponent options={options} />
        <SelectComponent options={options} isSearchable withSearchIcon />
        <SelectComponent options={options} disabled />
      </section>
    </>
  );
};

export default SelectComponentExample;
