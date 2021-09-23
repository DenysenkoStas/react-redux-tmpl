import React from 'react';
import CheckboxMUI from '../../../shared/CheckboxMUI';
import AlarmOnIcon from '@material-ui/icons/AlarmOn';
import AlarmOffIcon from '@material-ui/icons/AlarmOff';

const CheckboxMUIExample = () => {
  return (
    <>
      <h2 className='mb-15'>CheckboxMUI</h2>

      <section className='card-wrap'>
        <p>
          <b>Props:</b> checked, checkedIcon, className, color, defaultChecked, disableRipple, disabled, icon, id,
          indeterminate, indeterminateIcon, inputProps, inputRef, onChange, padding, required, size, value
        </p>

        <p className='mb-10 mt-25'>color="default / primary / secondary"</p>
        <div className='flex gap-25'>
          <CheckboxMUI defaultChecked />
          <CheckboxMUI color='primary' defaultChecked />
          <CheckboxMUI color='secondary' defaultChecked />
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
      </section>
    </>
  );
};

export default CheckboxMUIExample;
