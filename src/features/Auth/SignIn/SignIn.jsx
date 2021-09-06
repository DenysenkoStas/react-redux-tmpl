import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {postSignIn} from '../authActions';
import {Field, reduxForm, SubmissionError} from 'redux-form';
import InputMUI from '../../../shared/InputMUI';
import ButtonMUI from '../../../shared/ButtonMUI';
import {email, minLength8, required} from '../../../helpers/formValidation';
import SnackbarMUI from '../../../shared/SnackbarMUI';
import EmailVerification from '../EmailVerification/EmailVerification';
import {useToggle} from '../../../helpers/hooks';

import captcha from '../../../assets/images/captcha.png';
import {authPath, rootMainPath} from '../../../helpers/const';

const SignIn = ({history, handleSubmit, submitting, pristine, invalid}) => {
  const dispatch = useDispatch();
  const {buttonLoading} = useSelector(({app}) => app);
  const {signInError} = useSelector(({auth}) => auth);

  const [error, toggleError] = useToggle(false);

  useEffect(() => {
    localStorage.getItem('token') && history.push(rootMainPath);
  }, []);

  const submitForm = (data) => {
    return dispatch(postSignIn(data)).then((res) => {
      if (res.payload && res.payload.status && res.payload.status === 200) {
        localStorage.setItem('token', res.payload.data.token);
        history.push(rootMainPath);
      } else {
        toggleError();
        throw new SubmissionError({...res.error.response.data, _error: res.error.response.data.detail});
      }
    });
  };

  return (
    <form className='auth-box max-w-530' onSubmit={handleSubmit(submitForm)}>
      <h1 className='h1 mb-15'>Sign in</h1>
      <p className='mb-85'>Provide your credentials below</p>

      <Field
        component={InputMUI}
        className='auth-box__input min-w-530 mb-55'
        name='email'
        type='email'
        label='Email'
        validate={[required, email]}
      />
      <div className='auth-box__res-pass-wrap'>
        <Link to={authPath.passRecovery} className='auth-box__res-pass-link'>
          Forgot password?
        </Link>
        <Field
          component={InputMUI}
          className='auth-box__input mb-30 min-w-530'
          name='password'
          type='password'
          label='Password'
          validate={[required, minLength8]}
        />
      </div>

      <img className='auth-box__captcha mx-auto' src={captcha} alt='captcha' />

      <div className='auth-box__btn-wrap mt-65 mx-auto'>
        <ButtonMUI disabled={submitting || pristine || invalid} loading={buttonLoading} formAction>
          Sign in
        </ButtonMUI>
      </div>

      <div className='auth-box__footer mt-105'>
        <span className='auth-box__text mr-15'>Don’t have account yet?</span>
        <Link className='auth-box__link' to={authPath.signUp}>
          SIGN UP
        </Link>
      </div>

      <SnackbarMUI open={error} autoHideDuration={6000} onClose={toggleError} errors={signInError} />

      <EmailVerification />
    </form>
  );
};

export default reduxForm({
  form: 'SignIn',
})(SignIn);
