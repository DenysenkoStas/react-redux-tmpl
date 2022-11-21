import React from 'react';
import {ExampleLayout} from './Examples';
import SwitchMUI from '../../shared/SwitchMUI';

const SwitchMUIExample = () => {
  return (
    <ExampleLayout
      propsList='checked, checkedIcon, className, color, defaultChecked, disableRipple, disabled, edge, icon, id,
          inputProps, inputRef, onChange, required, size, value'
    >
      <p className='mb-10 mt-25'>color="default / primary / secondary"</p>
      <div className='flex gap-25'>
        <SwitchMUI defaultChecked />
        <SwitchMUI color='primary' defaultChecked />
        <SwitchMUI color='secondary' defaultChecked />
      </div>

      <p className='mb-10 mt-25'>disabled</p>
      <div className='flex gap-25'>
        <SwitchMUI disabled />
        <SwitchMUI disabled defaultChecked />
      </div>

      <p className='mb-10 mt-25'>edge="false / start / end"</p>
      <div className='flex gap-25'>
        <SwitchMUI defaultChecked />
        <SwitchMUI edge='start' defaultChecked />
        <SwitchMUI edge='end' defaultChecked />
      </div>

      <p className='mb-10 mt-25'>size="medium / small"</p>
      <div className='flex gap-25'>
        <SwitchMUI defaultChecked />
        <SwitchMUI size='small' defaultChecked />
      </div>
    </ExampleLayout>
  );
};

export default SwitchMUIExample;
