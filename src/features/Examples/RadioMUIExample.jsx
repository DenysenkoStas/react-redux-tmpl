import React, {useState} from 'react';
import {ExampleLayout} from './Examples';
import RadioMUI from '../../shared/RadioMUI';
import GradeIcon from '@material-ui/icons/Grade';
import GradeOutlinedIcon from '@material-ui/icons/GradeOutlined';

const RadioMUIExample = () => {
  const [value, setValue] = useState(null);
  const handleChange = (event) => setValue(event.target.value);

  return (
    <ExampleLayout
      propsList='checked, checkedIcon, className, color, disableRipple, disabled, icon, id, inputProps, inputRef,
          padding, onChange, required, size, value'
    >
      <p className='mb-10 mt-25'>color="default / primary / secondary"</p>
      <div className='flex gap-25'>
        <RadioMUI checked={value === 'default'} onChange={handleChange} value='default' />
        <RadioMUI color='primary' checked={value === 'primary'} onChange={handleChange} value='primary' />
        <RadioMUI color='secondary' checked={value === 'secondary'} onChange={handleChange} value='secondary' />
      </div>

      <p className='mb-10 mt-25'>disabled</p>
      <div className='flex gap-25'>
        <RadioMUI disabled />
        <RadioMUI disabled checked />
      </div>

      <p className='mb-10 mt-25'>
        checkedIcon={'{<GradeIcon />}'} / icon={'{<GradeOutlinedIcon />}'}
      </p>
      <RadioMUI
        checkedIcon={<GradeIcon />}
        icon={<GradeOutlinedIcon />}
        checked={value === 'icon'}
        onChange={handleChange}
        value='icon'
      />

      <p className='mb-10 mt-25'>padding</p>
      <RadioMUI padding checked={value === 'padding'} onChange={handleChange} value='padding' />

      <p className='mb-10 mt-25'>size="medium / small"</p>
      <div className='flex gap-25'>
        <RadioMUI checked={value === 'medium'} onChange={handleChange} value='medium' />
        <RadioMUI size='small' checked={value === 'small'} onChange={handleChange} value='small' />
      </div>
    </ExampleLayout>
  );
};

export default RadioMUIExample;
