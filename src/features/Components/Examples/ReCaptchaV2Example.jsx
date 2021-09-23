import React from 'react';
import {ReCaptchaV2} from '../../../shared/ReCaptchaV2';

const ReCaptchaV2Example = () => {
  return (
    <>
      <h2 className='mb-15'>ReCaptchaV2</h2>

      <section className='card-wrap'>
        <p>
          <b>Props:</b> center, className, onChange, reduxForm, siteKey, theme
        </p>

        <p className='mb-10 mt-25'>center</p>
        <div className='flex gap-25'>
          <ReCaptchaV2 center />
        </div>

        <p className='mb-10 mt-25'>theme="light / dark"</p>
        <div className='flex gap-25'>
          <ReCaptchaV2 />
          <ReCaptchaV2 theme='dark' />
        </div>
      </section>
    </>
  );
};

export default ReCaptchaV2Example;
