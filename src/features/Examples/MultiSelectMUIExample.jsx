import React, {useState} from 'react';
import {multiSelectOptions} from '../../helpers/mockData';
import {ExampleLayout} from './Examples';
import MultiSelectMUI from '../../shared/MultiSelectMUI';

const MultiSelectMUIExample = () => {
  const [item, setItem] = useState([]);
  const onSelectChange = (event) => setItem(event.target.value);

  return (
    <ExampleLayout propsList='className, disabled, label, moreText, onChange, options, placeholder, value'>
      <p className='mb-10 mt-25'>disabled / label="Label"</p>
      <div className='flex gap-25'>
        <MultiSelectMUI disabled value={item} options={multiSelectOptions} onChange={onSelectChange} />
        <MultiSelectMUI label='Label' value={item} options={multiSelectOptions} onChange={onSelectChange} />
      </div>

      <p className='mb-10 mt-25'>moreText="ще" / placeholder="Виберіть..."</p>
      <div className='flex gap-25'>
        <MultiSelectMUI moreText='ще' value={item} options={multiSelectOptions} onChange={onSelectChange} />
        <MultiSelectMUI placeholder='Виберіть...' value={item} options={multiSelectOptions} onChange={onSelectChange} />
      </div>
    </ExampleLayout>
  );
};

export default MultiSelectMUIExample;
