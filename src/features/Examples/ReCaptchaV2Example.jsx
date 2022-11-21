import React from 'react';
import {ExampleLayout} from './Examples';
import {ReCaptchaV2} from '../../shared/ReCaptchaV2';

const ReCaptchaV2Example = () => {
  return (
    <ExampleLayout propsList='center, className, onChange, reduxForm, siteKey, theme'>
      <p className='mb-10 mt-25'>center</p>
      <div className='flex gap-25'>
        <ReCaptchaV2 center />
      </div>

      <p className='mb-10 mt-25'>theme="light / dark"</p>
      <div className='flex gap-25'>
        <ReCaptchaV2 />
        <ReCaptchaV2 theme='dark' />
      </div>
    </ExampleLayout>
  );
};

export default ReCaptchaV2Example;
