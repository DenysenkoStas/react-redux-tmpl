import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {authPath} from '../../routes/paths';
import {postPassRecovery} from './authActions';
import {passwordRecoverySchema} from './authSchema';
import {InputMUI, ButtonMUI} from '../../shared';
import {ReactComponent as ArrowBlue} from '../../assets/icons/arrow-blue.svg';
import {ReactComponent as EnvelopeIcon} from '../../assets/icons/envelope.svg';
import styles from './Auth.module.scss';

const PasswordRecovery = () => {
  const dispatch = useDispatch();
  const {loading} = useSelector(({app}) => app);
  const [sent, setSent] = useState(false);

  const {
    control,
    handleSubmit,
    setError,
    formState: {errors, isValid}
  } = useForm({
    mode: 'onTouched',
    reValidateMode: 'onChange',
    resolver: yupResolver(passwordRecoverySchema),
    defaultValues: {
      email: ''
    }
  });

  const onSubmit = async (data) => {
    const res = await dispatch(postPassRecovery(data));
    const errors = res?.error?.response?.data;

    if (res?.payload) setSent(true);
    if (res?.error) {
      errors?.email && setError('email', {type: 'manual', message: errors.email});
    }
  };

  return (
    <form className={styles.root} onSubmit={handleSubmit(onSubmit)}>
      <Link className='backlink' to={authPath.signIn.path}>
        <ArrowBlue />
        <span>{authPath.signIn.name}</span>
      </Link>

      <h1 className={`${styles.title} mt-8`}>{authPath.passRecovery.name}</h1>
      <p className={`${styles.desc} mb-80`}>
        {!sent ? 'Enter your email to continue' : 'We have sent you an email with a link to reset your password'}
      </p>

      {!sent ? (
        <>
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

          <ButtonMUI className={styles.btn} disabled={!isValid || loading} loading={loading} formAction>
            Next
          </ButtonMUI>
        </>
      ) : (
        <div className={`${styles.roundedWrap} mt-64`}>
          <EnvelopeIcon />
        </div>
      )}
    </form>
  );
};

export default PasswordRecovery;
