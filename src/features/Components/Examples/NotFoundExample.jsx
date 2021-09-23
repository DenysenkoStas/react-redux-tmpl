import React from 'react';
import NotFound from '../../../shared/NotFound';

import {ReactComponent as LogoIcon} from '../../../assets/images/logo.svg';

const NotFoundExample = () => {
  return (
    <>
      <h2 className='mb-15'>NotFound</h2>

      <section className='card-wrap'>
        <p>
          <b>Props:</b> className, color, icon, noData, small, title
        </p>

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
      </section>
    </>
  );
};

export default NotFoundExample;
