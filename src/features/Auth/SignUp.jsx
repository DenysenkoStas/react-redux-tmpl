import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Controller, useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {authPath} from '../../routes/paths';
import {postSignUp} from './authActions';
import {useToggle} from '../../helpers/hooks';
import InputMUI from '../../shared/InputMUI';
import ButtonMUI from '../../shared/ButtonMUI';
import {ReCaptchaV2} from '../../shared/ReCaptchaV2';
import SnackbarMUI from '../../shared/SnackbarMUI';
import SignUpSuccessDialog from './SignUpSuccessDialog';

const SignUp = () => {
  const dispatch = useDispatch();
  const {loading} = useSelector(({app}) => app);
  const {signUpError} = useSelector(({auth}) => auth);

  const [dialog, toggleDialog] = useToggle(false);
  const [error, toggleError] = useToggle(false);

  const schema = yup.object({
    email: yup.string().email('Enter a valid email').required('Field is required'),
    password: yup.string().min(8, 'Min 8 characters').required('Field is required'),
    repeat_password: yup
      .string()
      .min(8, 'Min 8 characters')
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required('Required')
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
      repeat_password: ''
    }
  });

  const onSubmit = async (data) => {
    const res = await dispatch(postSignUp(data));
    const errors = res.error?.response.data;

    if (res?.payload) toggleDialog();
    if (res?.error) {
      errors.email && setError('email', {type: 'manual', message: errors.email});
      errors.password && setError('password', {type: 'manual', message: errors.password});
      errors.repeat_password && setError('repeat_password', {type: 'manual', message: errors.repeat_password});
      toggleError();
    }
  };

  return (
    <form className='auth-box' onSubmit={handleSubmit(onSubmit)}>
      <h1 className='auth-box__title'>Sign up</h1>
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

      <Controller
        name='repeat_password'
        control={control}
        render={({field}) => (
          <InputMUI
            className='auth-box__input'
            type='password'
            label='Repeat Password'
            fullWidth
            error={errors.repeat_password?.message}
            inputProps={field}
          />
        )}
      />

      <Controller
        name='recaptcha'
        control={control}
        render={({field: {onChange}}) => <ReCaptchaV2 center onChange={onChange} />}
      />

      <ButtonMUI className='auth-box__btn' disabled={!isValid || loading} loading={loading} formAction>
        Sign up
      </ButtonMUI>

      <div className='auth-box__footer'>
        <span className='auth-box__footer-text'>Already a member?</span>
        <Link className='auth-box__link' to={authPath.signIn}>
          SIGN IN
        </Link>
      </div>

      <SnackbarMUI open={error} autoHideDuration={6000} onClose={toggleError} errors={signUpError} />

      <SignUpSuccessDialog open={dialog} onClose={toggleDialog} />
    </form>
  );
};

export default SignUp;
