import React from 'react';
import CheckboxMUI from '../../../shared/CheckboxMUI';

const CheckboxMUIExample = () => {
  return (
    <>
      <h2 className='mb-15'>CheckboxMUI</h2>

      <section className='card-wrap flex gap-25'>
        <CheckboxMUI defaultChecked />
        <CheckboxMUI color='secondary' defaultChecked />
        <CheckboxMUI color='default' defaultChecked />
      </section>
    </>
  );
};

export default CheckboxMUIExample;
