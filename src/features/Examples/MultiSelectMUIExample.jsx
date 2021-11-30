import React, {useState} from 'react';
import MultiSelectMUI from '../../shared/MultiSelectMUI';

const MultiSelectMUIExample = () => {
  const [item, setItem] = useState([]);
  const selectItems = ['Chocolate', 'Strawberry', 'Vanilla', 'Pineapple', 'Apple'];
  const onSelectChange = (event) => {
    setItem(event.target.value);
  };

  return (
    <>
      <h2 className='mb-15'>MultiSelectMUI</h2>

      <section className='card-wrap'>
        <p>
          <b>Props:</b> className, disabled, items, label, moreText, onChange, placeholder, value
        </p>

        <p className='mb-10 mt-25'>label="Select label" / disabled</p>
        <div className='flex gap-25'>
          <MultiSelectMUI label='Select label' value={item} items={selectItems} onChange={onSelectChange} />
          <MultiSelectMUI label='Select label' disabled value={item} items={selectItems} onChange={onSelectChange} />
        </div>

        <p className='mb-10 mt-25'>moreText="ещё" / placeholder="Выберите..."</p>
        <div className='flex gap-25'>
          <MultiSelectMUI moreText='ещё' value={item} items={selectItems} onChange={onSelectChange} />
          <MultiSelectMUI placeholder='Выберите...' value={item} items={selectItems} onChange={onSelectChange} />
        </div>
      </section>
    </>
  );
};

export default MultiSelectMUIExample;
