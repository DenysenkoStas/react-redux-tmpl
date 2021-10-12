import React, {useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Controller, useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {authPath, rootMainPath} from '../../routes/paths';
import {postSignIn} from './authActions';
import {useToggle} from '../../helpers/hooks';
import InputMUI from '../../shared/InputMUI';
import ButtonMUI from '../../shared/ButtonMUI';
import {ReCaptchaV2} from '../../shared/ReCaptchaV2';
import SnackbarMUI from '../../shared/SnackbarMUI';
import EmailVerification from './EmailVerification';

const SignIn = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {buttonLoading} = useSelector(({app}) => app);
  const {signInError} = useSelector(({auth}) => auth);

  const [error, toggleError] = useToggle(false);

  useEffect(() => {
    localStorage.getItem('token') && history.push(rootMainPath);
  }, []);

  const schema = yup.object({
    email: yup.string().email('Enter a valid email').required('Field is required'),
    password: yup.string().min(8, 'Min 8 characters').required('Field is required'),
    recaptcha: yup.string().required()
  });

  const {
    control,
    handleSubmit,
    setError,
    formState: {errors, isValid}
  } = useForm({
    mode: 'onTouched',
    reValidateMode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
      recaptcha: ''
    }
  });

  const onSubmit = async (data) => {
    const res = await dispatch(postSignIn(data));
    const errors = res.error?.response.data;

    /* test login */
    if (await (data.email === 'admin@owlab.com' && data.password === 'Qwerty123!')) {
      localStorage.setItem('token', 'test');
      history.push(rootMainPath);
    }
    /* test login */

    if (await res?.payload) {
      localStorage.setItem('token', res.payload.data.token);
      history.push(rootMainPath);
    }
    if (await res?.error) {
      errors.email && setError('email', {type: 'manual', message: errors.email});
      errors.password && setError('password', {type: 'manual', message: errors.password});
      toggleError();
    }
  };

  return (
    <form className='auth-box' onSubmit={handleSubmit(onSubmit)}>
      <h1 className='auth-box__title'>Sign in</h1>
      <p className='auth-box__desc'>Provide your credentials below</p>

      <Controller
        name='email'
        control={control}
        render={({field}) => (
          <InputMUI
            className='auth-box__input'
            type='email'
            label='Email'
            fullWidth
            error={errors.email?.message}
            inputProps={field}
          />
        )}
      />

      <div className='auth-box__res-pass-wrap'>
        <Link to={authPath.passRecovery} className='auth-box__res-pass-link good-hover'>
          Forgot password?
        </Link>
        <Controller
          name='password'
          control={control}
          render={({field}) => (
            <InputMUI
              className='auth-box__input'
              type='password'
              label='Password'
              fullWidth
              error={errors.password?.message}
              inputProps={field}
            />
          )}
        />
      </div>

      <Controller
        name='recaptcha'
        control={control}
        render={({field: {onChange}}) => (
          <ReCaptchaV2 siteKey='6LcPyr8bAAAAAOzukES36-GsPCVHFjyaZyxLJ6sO' center onChange={onChange} />
        )}
      />

      <ButtonMUI className='auth-box__btn' disabled={!isValid || buttonLoading} loading={buttonLoading} formAction>
        Sign in
      </ButtonMUI>

      <div className='auth-box__footer'>
        <span className='auth-box__footer-text'>Don’t have account yet?</span>
        <Link className='auth-box__link' to={authPath.signUp}>
          SIGN UP
        </Link>
      </div>

      <SnackbarMUI open={error} autoHideDuration={6000} onClose={toggleError} errors={signInError} />

      <EmailVerification />
    </form>
  );
};

export default SignIn;
