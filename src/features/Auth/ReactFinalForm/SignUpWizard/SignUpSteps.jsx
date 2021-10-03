import React from 'react';
import {Field} from 'react-final-form';
import SignUpWizard from './SignUpWizard';
import {InputMUIFinalForm} from '../../../../shared/InputMUI';
import {composeValidators, email, number, required} from '../../../../helpers/formValidation';

const SignUpSteps = () => {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const onSubmit = async (values) => {
    await sleep(300);
    window.alert(JSON.stringify(values, 0, 2));
  };

  return (
    <>
      <SignUpWizard onSubmit={onSubmit}>
        <SignUpWizard.Page>
          <Field
            component={InputMUIFinalForm}
            className='auth-box__input min-w-530 mb-55'
            name='email'
            type='email'
            label='Email'
            validate={composeValidators(required, email)}
          />
          <div className='auth-box__input-group mb-30'>
            <Field
              component={InputMUIFinalForm}
              className='auth-box__input w-48'
              name='first_name'
              type='text'
              label='First name'
              validate={required}
            />
            <Field
              component={InputMUIFinalForm}
              className='auth-box__input w-48'
              name='last_name'
              type='text'
              label='Last name'
              validate={required}
            />
          </div>
        </SignUpWizard.Page>
        <SignUpWizard.Page>
          <Field
            component={InputMUIFinalForm}
            className='auth-box__input min-w-530 mb-55'
            name='address'
            type='text'
            label='Address'
            validate={required}
          />
          <div className='auth-box__input-group mb-55'>
            <Field
              component={InputMUIFinalForm}
              className='auth-box__input w-48'
              name='city'
              type='text'
              label='City'
              validate={required}
            />
            <Field
              component={InputMUIFinalForm}
              className='auth-box__input w-48'
              name='state'
              type='text'
              label='State'
              validate={required}
            />
          </div>
          <div className='auth-box__input-group'>
            <Field
              component={InputMUIFinalForm}
              className='auth-box__input w-48'
              name='postcode'
              type='number'
              label='Post code'
              validate={composeValidators(required, number)}
            />
            <Field
              component={InputMUIFinalForm}
              className='auth-box__input w-48'
              name='country'
              type='text'
              label='Country'
              validate={required}
            />
          </div>
        </SignUpWizard.Page>
        <SignUpWizard.Page>
          <Field
            component={InputMUIFinalForm}
            className='auth-box__input min-w-530 mb-55'
            name='password'
            type='password'
            label='Password'
            validate={required}
          />
          <Field
            component={InputMUIFinalForm}
            className='auth-box__input min-w-530'
            name='repeat_password'
            type='password'
            label='Repeat Password'
            validate={required}
          />
        </SignUpWizard.Page>
      </SignUpWizard>
    </>
  );
};

export default SignUpSteps;
