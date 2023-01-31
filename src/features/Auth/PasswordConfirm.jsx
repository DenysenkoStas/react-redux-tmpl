import React, {useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {authPath} from '../../routes/paths';
import {postPassConfirm} from './authActions';
import {passwordConfirmSchema} from './authSchema';
import {useQueryParams} from '../../helpers/hooks';
import {InputMUI, ButtonMUI} from '../../shared';
import {ReactComponent as LockIcon} from '../../assets/icons/lock.svg';
import styles from './Auth.module.scss';

const PasswordConfirm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const queryParams = useQueryParams();
  const {loading} = useSelector(({app}) => app);
  const [token, setToken] = useState({});
  const [sent, setSent] = useState(false);

  const deleteQuery = () => {
    queryParams.delete('security_token');
    history.replace({search: queryParams.toString()});
  };

  useEffect(() => {
    if (queryParams.has('security_token')) {
      setToken({security_token: queryParams.get('security_token')});
    } else {
      history.push(authPath.signIn.path);
    }
  }, []);

  const {
    control,
    handleSubmit,
    setError,
    formState: {errors, isValid}
  } = useForm({
    mode: 'onTouched',
    reValidateMode: 'onChange',
    resolver: yupResolver(passwordConfirmSchema),
    shouldFocusError: true,
    defaultValues: {
      password: '',
      confirm_password: ''
    }
  });

  const onSubmit = async (data) => {
    const res = await dispatch(postPassConfirm({...data, ...token}));
    const errors = res?.error?.response?.data;

    if (res?.payload) {
      setSent(true);
      deleteQuery();
    }
    if (res?.error) {
      errors?.password && setError('password', {type: 'manual', message: errors.password});
      errors?.confirm_password && setError('confirm_password', {type: 'manual', message: errors.confirm_password});
    }
  };

  return (
    <form className={styles.root} onSubmit={handleSubmit(onSubmit)}>
      <h1 className={styles.title}>{authPath.passConfirm.name}</h1>
      <p className={styles.desc}>
        {!sent ? 'Enter and confirm your new password' : 'Your new password have been set successfully.'}
      </p>
      {sent && <p>Now you can sign in.</p>}

      {!sent ? (
        <>
          <Controller
            name='password'
            control={control}
            render={({field}) => (
              <InputMUI
                className={styles.input}
                type='password'
                label='New password'
                fullWidth
                error={errors.password?.message}
                inputProps={field}
              />
            )}
          />

          <Controller
            name='confirm_password'
            control={control}
            render={({field}) => (
              <InputMUI
                className={styles.input}
                type='password'
                label='Repeat Password'
                fullWidth
                error={errors.confirm_password?.message}
                inputProps={field}
              />
            )}
          />

          <ButtonMUI className={styles.btn} disabled={!isValid || loading} loading={loading} formAction>
            Next
          </ButtonMUI>
        </>
      ) : (
        <>
          <div className={`${styles.roundedWrap} mt-40`}>
            <LockIcon />
          </div>

          <ButtonMUI className={styles.btn} component={Link} to={authPath.signIn.path}>
            {authPath.signIn.name}
          </ButtonMUI>
        </>
      )}
    </form>
  );
};

export default PasswordConfirm;
