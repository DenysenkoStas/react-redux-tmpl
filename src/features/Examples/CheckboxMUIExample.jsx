import React from 'react';
import {ExampleLayout} from './Examples';
import CheckboxMUI from '../../shared/CheckboxMUI';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import AlarmOffIcon from '@mui/icons-material/AlarmOff';

const CheckboxMUIExample = () => {
  return (
    <ExampleLayout
      propsList='checked, checkedIcon, className, color, defaultChecked, disableRipple, disabled, icon, id,
          indeterminate, indeterminateIcon, inputProps, inputRef, onChange, padding, required, size, value'
    >
      <p className='mb-10 mt-25'>color="primary / secondary / info / success / error / warning"</p>
      <div className='flex gap-25'>
        <CheckboxMUI defaultChecked />
        <CheckboxMUI color='secondary' defaultChecked />
        <CheckboxMUI color='info' defaultChecked />
        <CheckboxMUI color='success' defaultChecked />
        <CheckboxMUI color='error' defaultChecked />
        <CheckboxMUI color='warning' defaultChecked />
      </div>

      <p className='mb-10 mt-25'>disabled</p>
      <div className='flex gap-25'>
        <CheckboxMUI disabled />
        <CheckboxMUI disabled defaultChecked />
      </div>

      <p className='mb-10 mt-25'>
        checkedIcon={'{<AlarmOnIcon />}'} / icon={'{<AlarmOffIcon />}'}
      </p>
      <div className='flex gap-25'>
        <CheckboxMUI checkedIcon={<AlarmOnIcon />} icon={<AlarmOffIcon />} defaultChecked />
        <CheckboxMUI checkedIcon={<AlarmOnIcon />} icon={<AlarmOffIcon />} />
      </div>

      <p className='mb-10 mt-25'>padding</p>
      <div className='flex gap-25'>
        <CheckboxMUI padding />
      </div>

      <p className='mb-10 mt-25'>size="small / medium"</p>
      <div className='flex gap-25'>
        <CheckboxMUI defaultChecked size='small' />
        <CheckboxMUI defaultChecked />
      </div>
    </ExampleLayout>
  );
};

export default CheckboxMUIExample;
