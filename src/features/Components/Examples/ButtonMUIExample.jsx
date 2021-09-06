import React from 'react';
import ButtonMUI from '../../../shared/ButtonMUI';

import {ReactComponent as FolderIcon} from '../../../assets/icons/folder-white.svg';

const ButtonMUIExample = () => {
  return (
    <>
      <h2 className='mb-15'>ButtonMUI</h2>

      <section className='card-wrap'>
        <p className='mb-10'>variant="contained" (default)</p>
        <div className='flex gap-25 mb-25'>
          <ButtonMUI>Default</ButtonMUI>
          <ButtonMUI color='primary'>Primary</ButtonMUI>
          <ButtonMUI color='secondary'>Secondary</ButtonMUI>
          <ButtonMUI disabled>Disabled</ButtonMUI>
          <ButtonMUI href='#link'>Link</ButtonMUI>
        </div>

        <p className='mb-10'>variant="outlined"</p>
        <div className='flex gap-25 mb-25'>
          <ButtonMUI variant='outlined'>Default</ButtonMUI>
          <ButtonMUI variant='outlined' color='primary'>
            Primary
          </ButtonMUI>
          <ButtonMUI variant='outlined' color='secondary'>
            Secondary
          </ButtonMUI>
          <ButtonMUI variant='outlined' disabled>
            Disabled
          </ButtonMUI>
          <ButtonMUI variant='outlined' href='#link'>
            Link
          </ButtonMUI>
        </div>

        <p className='mb-10'>variant="text"</p>
        <div className='flex gap-25 mb-25'>
          <ButtonMUI variant='text'>Default</ButtonMUI>
          <ButtonMUI variant='text' color='primary'>
            Primary
          </ButtonMUI>
          <ButtonMUI variant='text' color='secondary'>
            Secondary
          </ButtonMUI>
          <ButtonMUI variant='text' disabled>
            Disabled
          </ButtonMUI>
          <ButtonMUI variant='text' href='#link'>
            Link
          </ButtonMUI>
        </div>

        <p className='mb-10'>fullWidth</p>
        <div className='flex gap-25 mb-25'>
          <ButtonMUI fullWidth>Full width</ButtonMUI>
          <ButtonMUI variant='outlined' fullWidth>
            Full width
          </ButtonMUI>
        </div>

        <p className='mb-10'>startIcon / endIcon</p>
        <div className='flex gap-25 mb-25'>
          <ButtonMUI startIcon={<FolderIcon />}>Start icon</ButtonMUI>
          <ButtonMUI color='primary' endIcon={<FolderIcon />}>
            End icon
          </ButtonMUI>
        </div>

        <p className='mb-10'>size="small", size="medium (default), size="large"</p>
        <div className='flex gap-25 mb-25'>
          <ButtonMUI size='small'>Small</ButtonMUI>
          <ButtonMUI size='medium'>Medium</ButtonMUI>
          <ButtonMUI size='large'>Large</ButtonMUI>
        </div>
      </section>
    </>
  );
};

export default ButtonMUIExample;
