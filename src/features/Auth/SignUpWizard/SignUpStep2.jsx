import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {InputMUIReduxForm} from '../../../shared/InputMUI';
import ButtonMUI from '../../../shared/ButtonMUI';
import {number, required} from '../../../helpers/formValidation';

const SignUpStep2 = ({handleSubmit, pristine, invalid}) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        component={InputMUIReduxForm}
        className='auth-box__input w-100'
        name='address'
        type='text'
        label='Address'
        validate={[required]}
      />
      <div className='auth-box__input-group'>
        <Field
          component={InputMUIReduxForm}
          className='auth-box__input'
          name='city'
          type='text'
          label='City'
          validate={[required]}
        />
        <Field
          component={InputMUIReduxForm}
          className='auth-box__input'
          name='state'
          type='text'
          label='State'
          validate={[required]}
        />
      </div>
      <div className='auth-box__input-group'>
        <Field
          component={InputMUIReduxForm}
          className='auth-box__input'
          name='postcode'
          type='number'
          label='Post code'
          validate={[required, number]}
        />
        <Field
          component={InputMUIReduxForm}
          className='auth-box__input'
          name='country'
          type='text'
          label='Country'
          validate={[required]}
        />
      </div>

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
})(SignUpStep2);
