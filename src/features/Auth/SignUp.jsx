import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {authPath} from '../../routes/paths';
import {signUpSchema} from './authSchema';
import {postSignUp} from './authActions';
import {useToggle} from '../../helpers/hooks';
import {InputMUI, ButtonMUI} from '../../shared';
import SignUpSuccessDialog from './Dialogs/SignUpSuccessDialog';
import styles from './Auth.module.scss';

const SignUp = () => {
  const dispatch = useDispatch();
  const {loading} = useSelector(({app}) => app);
  const [dialog, toggleDialog] = useToggle(false);

  const {
    control,
    handleSubmit,
    setError,
    formState: {errors, isValid}
  } = useForm({
    mode: 'onTouched',
    reValidateMode: 'onChange',
    resolver: yupResolver(signUpSchema),
    defaultValues: {
      email: '',
      password: '',
      repeat_password: ''
    }
  });

  const onSubmit = async (data) => {
    const res = await dispatch(postSignUp(data));
    const errors = res?.error?.response?.data;

    if (res?.payload) toggleDialog();
    if (res?.error) {
      errors?.email && setError('email', {type: 'manual', message: errors.email});
      errors?.password && setError('password', {type: 'manual', message: errors.password});
      errors?.repeat_password && setError('repeat_password', {type: 'manual', message: errors.repeat_password});
    }
  };

  return (
    <form className={styles.root} onSubmit={handleSubmit(onSubmit)}>
      <h1 className={styles.title}>{authPath.signUp.name}</h1>
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

      <Controller
        name='repeat_password'
        control={control}
        render={({field}) => (
          <InputMUI
            className={styles.input}
            type='password'
            label='Repeat Password'
            fullWidth
            error={errors.repeat_password?.message}
            inputProps={field}
          />
        )}
      />

      <ButtonMUI className={styles.btn} disabled={!isValid || loading} loading={loading} formAction>
        {authPath.signUp.name}
      </ButtonMUI>

      <div className={styles.footer}>
        <span className={styles.footerText}>Already a member?</span>
        <Link className={styles.link} to={authPath.signIn.path}>
          {authPath.signIn.name.toUpperCase()}
        </Link>
      </div>

      <SignUpSuccessDialog open={dialog} onClose={toggleDialog} />
    </form>
  );
};

export default SignUp;
