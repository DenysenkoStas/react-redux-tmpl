import React, {useEffect, useMemo} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {InputMUI} from '../../../shared/InputMUI';
import {useToggle} from '../../../helpers/hooks';
import SnackbarMUI from '../../../shared/SnackbarMUI';
import EmailVerification from '../EmailVerification';
import {authPath, rootMainPath} from '../../../routes/paths';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

import {Controller, useForm} from 'react-hook-form';
import ButtonMUI from '../../../shared/ButtonMUI';

const SignIn = ({history}) => {
  const dispatch = useDispatch();
  const {buttonLoading} = useSelector(({app}) => app);
  const {signInError} = useSelector(({auth}) => auth);

  const schema = useMemo(
    () =>
      yup.object().shape({
        email: yup.string().required('No email provided').email('Incorrect email'),
        password: yup.string().required('No password provided'),
      }),
    [],
  );

  const {
    control,
    handleSubmit,
    setError,
    formState: {errors},
  } = useForm({
    mode: 'onTouched',
    reValidateMode: 'onChange',
    resolver: yupResolver(schema),
    shouldFocusError: true,
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const [error, toggleError] = useToggle(false);

  useEffect(() => {
    localStorage.getItem('token') && history.push(rootMainPath);
  }, []);

  const submitForm = (data) => {
    alert(JSON.stringify(data));

    // return dispatch(postSignIn(data)).then((res) => {
    //   if (res.payload && res.payload.status && res.payload.status === 200) {
    //     localStorage.setItem('token', res.payload.data.token);
    //     history.push(rootMainPath);
    //   } else {
    //     toggleError();
    // throw new SubmissionError({...res.error.response.data, _error: res.error.response.data.detail});
    // }
    // });
  };

  return (
    <form className='auth-box min-w-530' onSubmit={handleSubmit(submitForm)}>
      <h1 className='h1 mb-15'>Sign in</h1>
      <p className='mb-85'>Provide your credentials below - React Hook Form</p>

      <Controller
        name='email'
        control={control}
        render={({field}) => (
          <InputMUI className='auth-box__input mb-55' type='email' label='Email' fullWidth inputRef={field} />
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
            <InputMUI className='auth-box__input mb-30' type='password' label='Password' fullWidth inputRef={field} />
          )}
        />
      </div>

      <div className='auth-box__btn-wrap mt-65 mx-auto'>
        <ButtonMUI disabled={buttonLoading} loading={buttonLoading} formAction>
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

export default SignIn;
