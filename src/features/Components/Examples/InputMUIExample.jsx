import React from 'react';
import {Field, reduxForm} from 'redux-form';
import InputMUI from '../../../shared/InputMUI';
import {email, minLength8, required} from '../../../helpers/formValidation';

const InputMUIExample = () => {
  return (
    <>
      <h2 className='mb-15'>InputMUI</h2>

      <section className='card-wrap flex gap-25'>
        <Field
          className='mt-15'
          component={InputMUI}
          name='name'
          type='text'
          label='Name'
          validate={[required, minLength8]}
        />
        <Field
          className='mt-15'
          component={InputMUI}
          name='email'
          type='email'
          label='Email'
          validate={[required, email]}
        />
        <Field
          className='mt-15'
          component={InputMUI}
          name='password'
          type='password'
          label='Password'
          validate={[required]}
          disabled
        />
      </section>
    </>
  );
};

export default reduxForm({
  form: 'InputMUIExample',
})(InputMUIExample);
