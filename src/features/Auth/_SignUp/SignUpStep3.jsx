import React from 'react';
import {Form, Field} from 'react-final-form';
import InputMUI from '../../../shared/InputMUI/InputMUI';
import ButtonMUI from '../../../shared/ButtonMUI';
import {passwordMatch, required, composeValidators} from '../../../helpers/formValidation';

const SignUpStep3 = ({onSubmit}) => {
  return (
    <Form onSubmit={onSubmit}>
      {({handleSubmit, loading, pristine, submitting, invalid}) => (
        <form onSubmit={handleSubmit}>
          <Field
            component={InputMUI}
            className='auth-box__input min-w-530 mb-55'
            name='password'
            type='password'
            label='Password'
            validate={required}
          />
          <Field
            component={InputMUI}
            className='auth-box__input min-w-530'
            name='repeat_password'
            type='password'
            label='Repeat Password'
            // validate={composeValidators(required, passwordMatch)}
            validate={composeValidators(required)}
          />

          <div className='auth-box__btn-wrap mt-65 mb-185 mx-auto'>
            <ButtonMUI disabled={submitting || pristine || invalid} loading={loading} formAction>
              Next
            </ButtonMUI>
          </div>
        </form>
      )}
    </Form>
  );
};

export default SignUpStep3;
