import React from 'react';
import SwitchMUI from '../../../shared/SwitchMUI';

const SwitchMUIExample = () => {
  return (
    <>
      <h2 className='mb-15'>SwitchMUI</h2>

      <section className='card-wrap flex gap-25'>
        <SwitchMUI defaultChecked />
        <SwitchMUI color='secondary' defaultChecked />
        <SwitchMUI color='default' defaultChecked />
      </section>
    </>
  );
};

export default SwitchMUIExample;
