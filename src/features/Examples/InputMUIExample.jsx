import React from 'react';
import {ExampleLayout} from './Examples';
import InputMUI from '../../shared/InputMUI';

const InputMUIExample = () => {
  return (
    <ExampleLayout
      propsList='autoComplete, autoFocus, className, defaultValue, disabled, error, endAdornment, fullWidth,
          helperText, id, inputProps, inputRef, label, maxRows, minRows, multiline, name, onChange, placeholder,
          readOnly, required, select, shrink, size, type, value, variant'
    >
      <p className='mb-10 mt-25'>autoFocus / defaultValue="Default value" / disabled</p>
      <div className='flex gap-25'>
        <InputMUI autoFocus />
        <InputMUI defaultValue='Default value' />
        <InputMUI label='Disabled' defaultValue='Disabled' disabled />
      </div>

      <p className='mb-10 mt-25'>error="Error text" / helperText="Helper text" / label="Label"</p>
      <div className='flex gap-25'>
        <InputMUI error='Error text' />
        <InputMUI helperText='Helper text' />
        <InputMUI label='Label' />
      </div>

      <p className='mb-10 mt-25'>fullWidth</p>
      <InputMUI fullWidth />

      <p className='mb-10 mt-25'>
        multiline minRows={'{3}'} maxRows={'{5}'}
      </p>
      <InputMUI multiline minRows={3} maxRows={5} />

      <p className='mb-10 mt-25'>readOnly / placeholder / shrink</p>
      <div className='flex gap-25'>
        <InputMUI readOnly defaultValue='Read only' />
        <InputMUI placeholder='Placeholder' />
        <InputMUI shrink label='Shrink' />
      </div>

      <p className='mb-10 mt-25'>size="small / medium"</p>
      <div className='flex gap-25'>
        <InputMUI size='small' />
        <InputMUI size='medium' />
      </div>

      <p className='mb-10 mt-25'>variant="outlined / filled / standard"</p>
      <div className='flex gap-25'>
        <InputMUI label='Outlined' placeholder='Outlined' />
        <InputMUI label='Filled' placeholder='Filled' variant='filled' />
        <InputMUI label='Standard' placeholder='Standard' variant='standard' />
      </div>
    </ExampleLayout>
  );
};

export default InputMUIExample;
