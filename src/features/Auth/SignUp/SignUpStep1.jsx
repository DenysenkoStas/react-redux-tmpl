import React from 'react';
import {Field, reduxForm} from 'redux-form';
import InputMUI from '../../../shared/InputMUI/InputMUI';
import ButtonMUI from '../../../shared/ButtonMUI';
import {email, required} from '../../../helpers/formValidation';

import captcha from '../../../assets/images/captcha.png';

const SignUpStep1 = ({handleSubmit, pristine, invalid, userRole}) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        component={InputMUI}
        className='auth-box__input min-w-530 mb-55'
        name='email'
        type='email'
        label='Email'
        validate={[required, email]}
      />
      {userRole.role === 'user' ? (
        <div className='auth-box__input-group mb-30'>
          <Field
            component={InputMUI}
            className='auth-box__input w-48'
            name='first_name'
            type='text'
            label='First name'
            validate={[required]}
          />
          <Field
            component={InputMUI}
            className='auth-box__input w-48'
            name='last_name'
            type='text'
            label='Last name'
            validate={[required]}
          />
        </div>
      ) : (
        <Field
          component={InputMUI}
          className='auth-box__input min-w-530 mb-30'
          name='name'
          type='text'
          label='Name'
          validate={[required]}
        />
      )}

      <img className='auth-box__captcha mx-auto' src={captcha} alt='captcha' />

      <div className='auth-box__btn-wrap mt-65 mb-105 mx-auto'>
        <ButtonMUI disabled={pristine || invalid} formAction>
          Next
        </ButtonMUI>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'SignUp',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(SignUpStep1);
