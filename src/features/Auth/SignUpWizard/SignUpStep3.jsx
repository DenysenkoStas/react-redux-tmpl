import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {InputMUIReduxForm} from '../../../shared/InputMUI';
import ButtonMUI from '../../../shared/ButtonMUI';
import {passwordMatch, required} from '../../../helpers/formValidation';

const SignUpStep3 = ({handleSubmit, loading, pristine, submitting, invalid}) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        component={InputMUIReduxForm}
        className='auth-box__input w-100'
        name='password'
        type='password'
        label='Password'
        validate={[required]}
      />
      <Field
        component={InputMUIReduxForm}
        className='auth-box__input w-100'
        name='repeat_password'
        type='password'
        label='Repeat Password'
        validate={[required, passwordMatch]}
      />

      <ButtonMUI className='auth-box__btn' disabled={submitting || pristine || invalid} loading={loading} formAction>
        Next
      </ButtonMUI>
    </form>
  );
};

export default reduxForm({
  form: 'SignUp',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(SignUpStep3);
