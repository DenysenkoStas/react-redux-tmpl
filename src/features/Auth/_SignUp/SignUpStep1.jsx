import React from 'react';
import {Form, Field} from 'react-final-form';
import InputMUI from '../../../shared/InputMUI/InputMUI';
import ButtonMUI from '../../../shared/ButtonMUI';
import {email, required, composeValidators} from '../../../helpers/formValidation';

import captcha from '../../../assets/images/captcha.png';
import SignUp from './SignUp';

const SignUpStep1 = ({userRole}) => {
  return (
    <SignUp>
      <Field
        component={InputMUI}
        className='auth-box__input min-w-530 mb-55'
        name='email'
        type='email'
        label='Email'
        validate={composeValidators(required, email)}
      />
      {userRole.role === 'user' ? (
        <div className='auth-box__input-group mb-30'>
          <Field
            component={InputMUI}
            className='auth-box__input w-48'
            name='first_name'
            type='text'
            label='First name'
            validate={required}
          />
          <Field
            component={InputMUI}
            className='auth-box__input w-48'
            name='last_name'
            type='text'
            label='Last name'
            validate={required}
          />
        </div>
      ) : (
        <Field
          component={InputMUI}
          className='auth-box__input min-w-530 mb-30'
          name='name'
          type='text'
          label='Name'
          validate={required}
        />
      )}
    </SignUp>
  );
};

export default SignUpStep1;
