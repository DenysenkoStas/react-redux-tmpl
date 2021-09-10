import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {postPassConfirm} from '../authActions';
import {Field, reduxForm, SubmissionError} from 'redux-form';
import {minLength8, passwordMatch, required} from '../../../helpers/formValidation';
import InputMUI from '../../../shared/InputMUI/InputMUI';
import {useQueryParams, useToggle} from '../../../helpers/hooks';
import SnackbarMUI from '../../../shared/SnackbarMUI/SnackbarMUI';
import ButtonMUI from '../../../shared/ButtonMUI';

import {ReactComponent as LockIcon} from '../../../assets/icons/lock.svg';
import {authPath} from '../../../helpers/const';

const PasswordConfirm = ({history, handleSubmit, pristine, submitting, invalid}) => {
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
      history.push('/auth/sign-in');
    }
  }, []);

  const [sent, setSent] = useState(false);
  const [error, toggleError] = useToggle(false);

  const submitForm = (data) => {
    return dispatch(postPassConfirm({...data, ...token})).then((res) => {
      if (res.payload && res.payload.status && res.payload.status === 200) {
        setSent(true);
        deleteQuery();
      } else {
        toggleError();
        throw new SubmissionError({...res.error.response.data, _error: res.error.response.data.detail});
      }
    });
  };

  return (
    <form className='auth-box max-w-530' onSubmit={handleSubmit(submitForm)}>
      <h1 className='h1 mb-15'>Reset password</h1>
      <p className='mb-5'>
        {!sent ? 'Enter and confirm your new password' : 'Your new password have been set successfully.'}
      </p>
      {sent && <p>Now you can sign in.</p>}

      {!sent ? (
        <>
          <Field
            component={InputMUI}
            className='auth-box__input mt-85 mb-55 min-w-530'
            name='password'
            type='password'
            label='New password'
            validate={[required, minLength8]}
          />
          <Field
            component={InputMUI}
            className='auth-box__input min-w-530'
            name='confirm_password'
            type='password'
            label='Confirm password'
            validate={[required, minLength8, passwordMatch]}
          />

          <div className='auth-box__btn-wrap mt-65 mx-auto'>
            <ButtonMUI disabled={submitting || pristine || invalid} loading={loading} formAction>
              Next
            </ButtonMUI>
          </div>
        </>
      ) : (
        <>
          <div className='auth-box__rounded-wrap mt-40 pt-25 pb-30 min-w-530 t-center'>
            <LockIcon />
          </div>

          <div className='auth-box__btn-wrap mt-65 mx-auto'>
            <ButtonMUI type='link' to={authPath.signIn}>
              Sign in
            </ButtonMUI>
          </div>
        </>
      )}

      <SnackbarMUI open={error} autoHideDuration={6000} onClose={toggleError} errors={passConfirmError} />
    </form>
  );
};

export default reduxForm({
  form: 'PasswordConfirm',
})(PasswordConfirm);
