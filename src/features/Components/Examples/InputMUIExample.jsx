import React from 'react';
import {Form, Field} from 'react-final-form';
import InputMUI from '../../../shared/InputMUI';
import {composeValidators, email, minLength8, required} from '../../../helpers/formValidation';

const InputMUIExample = () => {
  const onSubmit = (values) => {
    window.alert(JSON.stringify(values, 0, 2));
  };

  return (
    <>
      <h2 className='mb-15'>InputMUI</h2>
      <Form onSubmit={onSubmit}>
        {({handleSubmit}) => (
          <form className='card-wrap flex gap-25' onSubmit={handleSubmit}>
            <Field
              component={InputMUI}
              className='mt-15'
              name='name'
              type='text'
              label='Name'
              validate={composeValidators(required, minLength8)}
            />
            <Field
              component={InputMUI}
              className='mt-15'
              name='email'
              type='email'
              label='Email'
              validate={composeValidators(required, email)}
            />
            <Field
              component={InputMUI}
              className='mt-15'
              name='password'
              type='password'
              label='Password'
              validate={required}
              disabled
            />
          </form>
        )}
      </Form>
    </>
  );
};

export default InputMUIExample;
