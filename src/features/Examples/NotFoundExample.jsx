import React from 'react';
import {ExampleLayout} from './Examples';
import {NotFound, ButtonMUI} from '../../shared';
import {ReactComponent as LogoIcon} from '../../assets/images/logo.svg';

const NotFoundExample = () => {
  return (
    <ExampleLayout propsList='children, className, color, icon, noData, small, title'>
      <p className='mb-10 mt-25'>children={`{<ButtonMUI>Home</ButtonMUI>}`}</p>
      <div className='flex gap-25'>
        <NotFound color='primary' children={<ButtonMUI>Home</ButtonMUI>} />
      </div>

      <p className='mb-10 mt-25'>color="primary / secondary"</p>
      <div className='flex gap-25'>
        <NotFound color='primary' />
        <NotFound color='secondary' />
      </div>

      <p className='mb-10 mt-25'>icon={'{<LogoIcon />}'} small title="Some title"</p>
      <div className='flex gap-25'>
        <NotFound icon={<LogoIcon />} small title='Some title' />
      </div>

      <p className='mb-10 mt-25'>noData</p>
      <div className='flex gap-25'>
        <NotFound noData small />
      </div>
    </ExampleLayout>
  );
};

export default NotFoundExample;
