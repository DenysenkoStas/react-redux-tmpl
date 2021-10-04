import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {Controller, useForm} from 'react-hook-form';
import _ from 'lodash';

import {postPassRecovery} from '../authActions';
import ButtonMUI from '../../../shared/ButtonMUI';
import {InputMUI} from '../../../shared/InputMUI';
import {authPath} from '../../../routes/paths';
import {ReactComponent as ArrowBlue} from '../../../assets/icons/arrow-blue.svg';
import {ReactComponent as EnvelopeIcon} from '../../../assets/icons/envelope.svg';

const PasswordRecovery = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {buttonLoading} = useSelector(({app}) => app);
  // const {passRecoveryError} = useSelector(({auth}) => auth);

  const [sent, setSent] = useState(false);
  const onPassRecoverySuccess = () => {
    setSent(true);
  };

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
    shouldFocusError: true,
    defaultValues: {
      email: '',
      password: '',
      repeat_password: ''
    }
  });

  const onSubmit = async (data) => {
    const res = await dispatch(postPassRecovery(data));
    if (res?.payload) onPassRecoverySuccess();
    if (res?.error) setError('email', {type: 'manual', message: 'The user does not exist'});
  };

  return (
    <form className='auth-box min-w-530' onSubmit={handleSubmit(onSubmit)}>
      <Link className='backlink' to={authPath.signIn}>
        <ArrowBlue />
        <span>SIGN IN</span>
      </Link>

      <h1 className='h1 mt-10 mb-15'>Password recovery</h1>
      <p>{!sent ? 'Enter your email to continue' : 'We have sent you an email with a link to reset your password'}</p>

      {!sent ? (
        <>
          <Controller
            name='email'
            control={control}
            render={({field}) => (
              <InputMUI
                className='auth-box__input mt-85'
                type='email'
                label='Email'
                fullWidth
                error={errors.email?.message}
                {..._.omit(field, 'ref')}
              />
            )}
          />

          <div className='auth-box__btn-wrap mt-65 mx-auto'>
            <ButtonMUI disabled={!isValid || buttonLoading} loading={buttonLoading} formAction>
              Send
            </ButtonMUI>
          </div>
        </>
      ) : (
        <div className='auth-box__rounded-wrap mt-65 pt-25 pb-30 min-w-530 t-center'>
          <EnvelopeIcon />
        </div>
      )}
    </form>
  );
};

export default PasswordRecovery;
