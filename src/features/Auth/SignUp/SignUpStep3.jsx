import React from 'react';
import {Field, reduxForm} from 'redux-form';
import InputMUI from '../../../shared/InputMUI/InputMUI';
import ButtonMUI from '../../../shared/ButtonMUI';
import {passwordMatch, required} from '../../../helpers/formValidation';

const SignUpStep3 = ({handleSubmit, loading, pristine, submitting, invalid}) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        component={InputMUI}
        className='auth-box__input min-w-530 mb-55'
        name='password'
        type='password'
        label='Password'
        validate={[required]}
      />
      <Field
        component={InputMUI}
        className='auth-box__input min-w-530'
        name='repeat_password'
        type='password'
        label='Repeat Password'
        validate={[required, passwordMatch]}
      />

      <div className='auth-box__btn-wrap mt-65 mb-185 mx-auto'>
        <ButtonMUI disabled={submitting || pristine || invalid} loading={loading} formAction>
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
})(SignUpStep3);
