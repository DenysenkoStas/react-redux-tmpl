import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {Controller, useForm} from 'react-hook-form';
import _ from 'lodash';

import {postSignUp} from '../authActions';
import ButtonMUI from '../../../shared/ButtonMUI';
import {InputMUI} from '../../../shared/InputMUI';
import {ReCaptchaV2} from '../../../shared/ReCaptchaV2';
import {authPath, rootMainPath} from '../../../routes/paths';

const SignUp = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {buttonLoading} = useSelector(({app}) => app);
  // const {signUpError} = useSelector(({auth}) => auth);

  const schema = yup.object({
    email: yup.string().required('Required').email('Incorrect email'),
    password: yup.string().required('Required').min(8, 'Min 8 characters'),
    repeat_password: yup
      .string()
      .required('Required')
      .min(8, 'Min 8 characters')
      .oneOf([yup.ref('password'), null], 'Passwords must match')
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
    const res = await dispatch(postSignUp(data));
    if (res?.payload) console.log('Success');
    if (res?.error) setError('email', {type: 'manual', message: 'The user does not exist'});
  };

  return (
    <form className='auth-box max-w-530' onSubmit={handleSubmit(onSubmit)}>
      <h1 className='h1 mb-15'>Sign up</h1>
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

      <Controller
        name='password'
        control={control}
        render={({field}) => (
          <InputMUI
            className='auth-box__input mb-55'
            type='password'
            label='Password'
            fullWidth
            error={errors.password?.message}
            {..._.omit(field, 'ref')}
          />
        )}
      />

      <Controller
        name='repeat_password'
        control={control}
        render={({field}) => (
          <InputMUI
            className='auth-box__input mb-30'
            type='password'
            label='Repeat Password'
            fullWidth
            error={errors.repeat_password?.message}
            {..._.omit(field, 'ref')}
          />
        )}
      />

      <Controller
        name='recaptcha'
        control={control}
        render={({field: {onChange}}) => <ReCaptchaV2 center onChange={onChange} />}
      />

      <div className='auth-box__btn-wrap mt-65 mx-auto'>
        <ButtonMUI disabled={!isValid || buttonLoading} loading={buttonLoading} formAction>
          Sign up
        </ButtonMUI>
      </div>

      <div className='auth-box__footer mt-105'>
        <span className='auth-box__text mr-15'>Already a member?</span>
        <Link className='auth-box__link' to={authPath.signIn}>
          SIGN IN
        </Link>
      </div>
    </form>
  );
};

export default SignUp;
