import React, {useState} from 'react';
import {ExampleLayout} from './Examples';
import RadioMUI from '../../shared/RadioMUI';
import GradeIcon from '@mui/icons-material/Grade';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';

const RadioMUIExample = () => {
  const [value, setValue] = useState(null);
  const handleChange = (event) => setValue(event.target.value);

  return (
    <ExampleLayout
      propsList='checked, checkedIcon, className, color, disableRipple, disabled, icon, id, inputProps, inputRef,
          padding, onChange, required, size, value'
    >
      <p className='mb-10 mt-25'>color="primary / secondary / info / success / error / warning"</p>
      <div className='flex gap-25'>
        <RadioMUI checked={value === 'primary'} onChange={handleChange} value='primary' />
        <RadioMUI color='secondary' checked={value === 'secondary'} onChange={handleChange} value='secondary' />
        <RadioMUI color='info' checked={value === 'info'} onChange={handleChange} value='info' />
        <RadioMUI color='success' checked={value === 'success'} onChange={handleChange} value='success' />
        <RadioMUI color='error' checked={value === 'error'} onChange={handleChange} value='error' />
        <RadioMUI color='warning' checked={value === 'warning'} onChange={handleChange} value='warning' />
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
