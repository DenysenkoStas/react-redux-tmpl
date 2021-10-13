import React from 'react';
import InputMUI from '../../shared/InputMUI';

const InputMUIExample = () => {
  return (
    <>
      <h2 className='mb-15'>InputMUI</h2>
      <div className='card-wrap flex gap-25'>
        <InputMUI label='Outlined' placeholder='Outlined' />
        <InputMUI label='Filled' placeholder='Filled' variant='filled' />
        <InputMUI label='Standard' placeholder='Standard' variant='standard' />
      </div>
    </>
  );
};

export default InputMUIExample;
