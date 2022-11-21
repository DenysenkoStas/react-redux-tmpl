import React, {useState} from 'react';
import {multiSelectOptions} from '../../helpers/mockData';
import {ExampleLayout} from './Examples';
import MultiSelectMUI from '../../shared/MultiSelectMUI';

const MultiSelectMUIExample = () => {
  const [item, setItem] = useState([]);
  const onSelectChange = (event) => setItem(event.target.value);

  return (
    <ExampleLayout propsList='className, disabled, items, label, moreText, onChange, placeholder, value'>
      <p className='mb-10 mt-25'>label="Select label" / disabled</p>
      <div className='flex gap-25'>
        <MultiSelectMUI label='Select label' value={item} items={multiSelectOptions} onChange={onSelectChange} />
        <MultiSelectMUI
          label='Select label'
          disabled
          value={item}
          items={multiSelectOptions}
          onChange={onSelectChange}
        />
      </div>

      <p className='mb-10 mt-25'>moreText="ещё" / placeholder="Выберите..."</p>
      <div className='flex gap-25'>
        <MultiSelectMUI moreText='ещё' value={item} items={multiSelectOptions} onChange={onSelectChange} />
        <MultiSelectMUI placeholder='Выберите...' value={item} items={multiSelectOptions} onChange={onSelectChange} />
      </div>
    </ExampleLayout>
  );
};

export default MultiSelectMUIExample;
