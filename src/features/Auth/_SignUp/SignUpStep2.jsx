import React from 'react';
import {Form, Field} from 'react-final-form';
import InputMUI from '../../../shared/InputMUI/InputMUI';
import ButtonMUI from '../../../shared/ButtonMUI';
import {number, required, composeValidators} from '../../../helpers/formValidation';

const SignUpStep2 = ({onSubmit}) => {
  return (
    <Form onSubmit={onSubmit}>
      {({handleSubmit, pristine, invalid}) => (
        <form onSubmit={handleSubmit}>
          <Field
            component={InputMUI}
            className='auth-box__input min-w-530 mb-55'
            name='address'
            type='text'
            label='Address'
            validate={required}
          />
          <div className='auth-box__input-group mb-55'>
            <Field
              component={InputMUI}
              className='auth-box__input w-48'
              name='city'
              type='text'
              label='City'
              validate={required}
            />
            <Field
              component={InputMUI}
              className='auth-box__input w-48'
              name='state'
              type='text'
              label='State'
              validate={required}
            />
          </div>
          <div className='auth-box__input-group'>
            <Field
              component={InputMUI}
              className='auth-box__input w-48'
              name='postcode'
              type='number'
              label='Post code'
              validate={composeValidators(required, number)}
            />
            <Field
              component={InputMUI}
              className='auth-box__input w-48'
              name='country'
              type='text'
              label='Country'
              validate={required}
            />
          </div>

          <div className='auth-box__btn-wrap mt-65 mb-85 mx-auto'>
            <ButtonMUI disabled={pristine || invalid} formAction>
              Next
            </ButtonMUI>
          </div>
        </form>
      )}
    </Form>
  );
};

export default SignUpStep2;
