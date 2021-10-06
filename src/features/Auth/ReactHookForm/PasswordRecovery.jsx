import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Controller, useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {authPath} from '../../../routes/paths';
import {postPassRecovery} from '../authActions';
import {useToggle} from '../../../helpers/hooks';
import {InputMUI} from '../../../shared/InputMUI';
import ButtonMUI from '../../../shared/ButtonMUI';
import SnackbarMUI from '../../../shared/SnackbarMUI';

import {ReactComponent as ArrowBlue} from '../../../assets/icons/arrow-blue.svg';
import {ReactComponent as EnvelopeIcon} from '../../../assets/icons/envelope.svg';

const PasswordRecovery = () => {
  const dispatch = useDispatch();
  const {loading} = useSelector(({app}) => app);
  const {passRecoveryError} = useSelector(({auth}) => auth);

  const [sent, setSent] = useState(false);
  const [error, toggleError] = useToggle(false);

  const schema = yup.object({
    email: yup.string().required('Required').email('Incorrect email')
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
      email: ''
    }
  });

  const onSubmit = async (data) => {
    const res = await dispatch(postPassRecovery(data));
    const errors = res.error?.response.data;

    if (res?.payload) setSent(true);
    if (res?.error) {
      errors.email && setError('email', {type: 'manual', message: errors.email});
      toggleError();
    }
  };

  return (
    <form className='auth-box' onSubmit={handleSubmit(onSubmit)}>
      <Link className='backlink' to={authPath.signIn}>
        <ArrowBlue />
        <span>SIGN IN</span>
      </Link>

      <h1 className='auth-box__title mt-8'>Password recovery</h1>
      <p className='auth-box__desc mb-80'>
        {!sent ? 'Enter your email to continue' : 'We have sent you an email with a link to reset your password'}
      </p>

      {!sent ? (
        <>
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

          <ButtonMUI className='auth-box__btn' disabled={!isValid || loading} loading={loading} formAction>
            Next
          </ButtonMUI>
        </>
      ) : (
        <div className='auth-box__rounded-wrap'>
          <EnvelopeIcon />
        </div>
      )}

      <SnackbarMUI open={error} autoHideDuration={6000} onClose={toggleError} errors={passRecoveryError} />
    </form>
  );
};

export default PasswordRecovery;
