import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {InputMUIReduxForm} from '../../../shared/InputMUI';
import ButtonMUI from '../../../shared/ButtonMUI';
import {email, required} from '../../../helpers/formValidation';

import captcha from '../../../assets/images/captcha.png';

const SignUpStep1 = ({handleSubmit, pristine, invalid, userRole}) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        component={InputMUIReduxForm}
        className='auth-box__input w-100'
        name='email'
        type='email'
        label='Email'
        validate={[required, email]}
      />
      {userRole.role === 'user' ? (
        <div className='auth-box__input-group'>
          <Field
            component={InputMUIReduxForm}
            className='auth-box__input'
            name='first_name'
            type='text'
            label='First name'
            validate={[required]}
          />
          <Field
            component={InputMUIReduxForm}
            className='auth-box__input'
            name='last_name'
            type='text'
            label='Last name'
            validate={[required]}
          />
        </div>
      ) : (
        <Field
          component={InputMUIReduxForm}
          className='auth-box__input w-100'
          name='name'
          type='text'
          label='Name'
          validate={[required]}
        />
      )}

      <img className='mx-auto' src={captcha} alt='captcha' />

      <ButtonMUI className='auth-box__btn' disabled={pristine || invalid} formAction>
        Next
      </ButtonMUI>
    </form>
  );
};

export default reduxForm({
  form: 'SignUp',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(SignUpStep1);
