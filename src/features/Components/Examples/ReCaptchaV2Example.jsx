import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {ReCaptchaV2} from '../../../shared/ReCaptchaV2';

const ReCaptchaV2Example = () => {
  return (
    <>
      <h2 className='mb-15'>ReCaptchaV2</h2>

      <section className='card-wrap flex gap-25'>
        <Field name='recaptcha' component={ReCaptchaV2} />
      </section>
    </>
  );
};

export default reduxForm({
  form: 'ReCaptchaV2Example',
})(ReCaptchaV2Example);
