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
        <MultiSelectMUI value={item} items={selectItems} onChange={onSelectChange} />
      </section>
    </>
  );
};

export default MultiSelectMUIExample;
