import React, {useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {authPath, rootMainPath} from '../../routes/paths';
import {postSignIn} from './authActions';
import {signInSchema} from './authSchema';
import {InputMUI, ButtonMUI} from '../../shared';
import EmailVerificationDialog from './Dialogs/EmailVerificationDialog';
import styles from './Auth.module.scss';

const SignIn = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {buttonLoading} = useSelector(({app}) => app);

  useEffect(() => {
    localStorage.getItem('token') && history.push(rootMainPath);
  }, []);

  const {
    control,
    handleSubmit,
    setError,
    formState: {errors, isValid}
  } = useForm({
    mode: 'onTouched',
    reValidateMode: 'onChange',
    resolver: yupResolver(signInSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = async (data) => {
    const res = await dispatch(postSignIn(data));
    const errors = res?.error?.response?.data;

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
      errors?.email && setError('email', {type: 'manual', message: errors.email});
      errors?.password && setError('password', {type: 'manual', message: errors.password});
    }
  };

  return (
    <form className={styles.root} onSubmit={handleSubmit(onSubmit)}>
      <h1 className={styles.title}>{authPath.signIn.name}</h1>
      <p className={styles.desc}>Provide your credentials below</p>

      <Controller
        name='email'
        control={control}
        render={({field}) => (
          <InputMUI
            className={styles.input}
            type='email'
            label='Email'
            fullWidth
            error={errors.email?.message}
            inputProps={field}
          />
        )}
      />

      <div className={styles.resPassWrap}>
        <Link to={authPath.passRecovery.path} className={`${styles.resPassLink} good-hover`}>
          Forgot password?
        </Link>
        <Controller
          name='password'
          control={control}
          render={({field}) => (
            <InputMUI
              className={styles.input}
              type='password'
              label='Password'
              fullWidth
              error={errors.password?.message}
              inputProps={field}
            />
          )}
        />
      </div>

      <ButtonMUI className={styles.btn} disabled={!isValid || buttonLoading} loading={buttonLoading} formAction>
        {authPath.signIn.name}
      </ButtonMUI>

      <div className={styles.footer}>
        <span className={styles.footerText}>Don’t have account yet?</span>
        <Link className={styles.link} to={authPath.signUp.path}>
          {authPath.signUp.name.toUpperCase()}
        </Link>
      </div>

      <EmailVerificationDialog />
    </form>
  );
};

export default SignIn;
