import React, {useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Controller, useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {authPath} from '../../routes/paths';
import {postPassConfirm} from './authActions';
import {useQueryParams, useToggle} from '../../helpers/hooks';
import InputMUI from '../../shared/InputMUI';
import ButtonMUI from '../../shared/ButtonMUI';
import SnackbarMUI from '../../shared/SnackbarMUI/SnackbarMUI';

import {ReactComponent as LockIcon} from '../../assets/icons/lock.svg';

const PasswordConfirm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const queryParams = useQueryParams();
  const {loading} = useSelector(({app}) => app);
  const {passConfirmError} = useSelector(({auth}) => auth);

  const [token, setToken] = useState({});

  const deleteQuery = () => {
    queryParams.delete('security_token');
    history.replace({search: queryParams.toString()});
  };

  useEffect(() => {
    if (queryParams.has('security_token')) {
      setToken({security_token: queryParams.get('security_token')});
    } else {
      history.push(authPath.signIn);
    }
  }, []);

  const [sent, setSent] = useState(false);
  const [error, toggleError] = useToggle(false);

  const schema = yup.object({
    password: yup.string().min(8, 'Min 8 characters').required('Field is required'),
    confirm_password: yup
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
    shouldFocusError: true,
    defaultValues: {
      password: '',
      confirm_password: ''
    }
  });

  const onSubmit = async (data) => {
    const res = await dispatch(postPassConfirm({...data, ...token}));
    const errors = res.error?.response.data;

    if (res?.payload) {
      setSent(true);
      deleteQuery();
    }
    if (res?.error) {
      errors.password && setError('password', {type: 'manual', message: errors.password});
      errors.confirm_password && setError('confirm_password', {type: 'manual', message: errors.confirm_password});
      toggleError();
    }
  };

  return (
    <form className='auth-box' onSubmit={handleSubmit(onSubmit)}>
      <h1 className='auth-box__title'>Reset password</h1>
      <p className='auth-box__desc'>
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
                className='auth-box__input'
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
                className='auth-box__input'
                type='password'
                label='Repeat Password'
                fullWidth
                error={errors.confirm_password?.message}
                inputProps={field}
              />
            )}
          />

          <ButtonMUI className='auth-box__btn' disabled={!isValid || loading} loading={loading} formAction>
            Next
          </ButtonMUI>
        </>
      ) : (
        <>
          <div className='auth-box__rounded-wrap mt-40'>
            <LockIcon />
          </div>

          <ButtonMUI className='auth-box__btn' component={Link} to={authPath.signIn}>
            Sign in
          </ButtonMUI>
        </>
      )}

      <SnackbarMUI open={error} autoHideDuration={6000} onClose={toggleError} errors={passConfirmError} />
    </form>
  );
};

export default PasswordConfirm;
