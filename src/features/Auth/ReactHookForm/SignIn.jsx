import React, {useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {authPath, rootMainPath} from '../../../routes/paths';
import {useDispatch, useSelector} from 'react-redux';
import {postSignIn} from '../authActions';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {Controller, useForm} from 'react-hook-form';
import _ from 'lodash';
import {useToggle} from '../../../helpers/hooks';
import {InputMUI} from '../../../shared/InputMUI';
import ButtonMUI from '../../../shared/ButtonMUI';
import {ReCaptchaV2} from '../../../shared/ReCaptchaV2';
import SnackbarMUI from '../../../shared/SnackbarMUI';
import EmailVerification from '../EmailVerification';

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
    email: yup.string().required('Required').email('Incorrect email'),
    password: yup.string().required('Required').min(8, 'Min 8 characters'),
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
    shouldFocusError: true,
    defaultValues: {
      email: '',
      password: '',
      recaptcha: ''
    }
  });

  const onSubmit = async (data) => {
    const res = await dispatch(postSignIn(data));

    if (res?.payload) {
      localStorage.setItem('token', res.payload.data.token);
      history.push(rootMainPath);
    }
    if (res?.error) {
      setError('email', {type: 'manual', message: 'The user does not exist'});
      toggleError();
    }
  };

  return (
    <form className='auth-box min-w-530' onSubmit={handleSubmit(onSubmit)}>
      <h1 className='h1 mb-15'>Sign in</h1>
      <p className='mb-85'>React Hook Form example</p>

      <Controller
        name='email'
        control={control}
        render={({field}) => (
          <InputMUI
            className='auth-box__input mb-55'
            type='email'
            label='Email'
            fullWidth
            error={errors.email?.message}
            {..._.omit(field, 'ref')}
          />
        )}
      />

      <div className='auth-box__res-pass-wrap'>
        <Link to={authPath.passRecovery} className='auth-box__res-pass-link'>
          Forgot password?
        </Link>
        <Controller
          name='password'
          control={control}
          render={({field}) => (
            <InputMUI
              className='auth-box__input mb-30'
              type='password'
              label='Password'
              fullWidth
              error={errors.password?.message}
              {..._.omit(field, 'ref')}
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

      <ButtonMUI className='flex mt-65 mx-auto' disabled={!isValid || buttonLoading} loading={buttonLoading} formAction>
        Sign in
      </ButtonMUI>

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

export default SignIn;
