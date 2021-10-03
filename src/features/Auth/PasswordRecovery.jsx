import React, {useState} from 'react';
import {Field, reduxForm, reset, SubmissionError} from 'redux-form';
import {Link} from 'react-router-dom';
import {InputMUIReduxForm} from '../../shared/InputMUI';
import {useToggle} from '../../helpers/hooks';
import ButtonMUI from '../../shared/ButtonMUI';
import {email, required} from '../../helpers/formValidation';
import {useDispatch, useSelector} from 'react-redux';
import {postPassRecovery} from './authActions';
import SnackbarMUI from '../../shared/SnackbarMUI/SnackbarMUI';
import {authPath} from '../../routes/paths';

import {ReactComponent as ArrowBlue} from '../../assets/icons/arrow-blue.svg';
import {ReactComponent as EnvelopeIcon} from '../../assets/icons/envelope.svg';

const PasswordRecovery = ({handleSubmit, pristine, submitting, invalid}) => {
  const dispatch = useDispatch();
  const {loading} = useSelector(({app}) => app);
  const {passRecoveryError} = useSelector(({auth}) => auth);

  const [sent, setSent] = useState(false);
  const [error, toggleError] = useToggle(false);
  const onPassRecoverySuccess = () => {
    dispatch(reset('PasswordRecovery'));
    setSent(true);
  };

  const submitForm = (data) => {
    return dispatch(postPassRecovery(data)).then((res) => {
      if (res.payload && res.payload.status && res.payload.status === 200) {
        onPassRecoverySuccess();
      } else {
        toggleError();
        throw new SubmissionError({...res.error.response.data, _error: res.error.response.data.detail});
      }
    });
  };

  return (
    <form className='auth-box max-w-530' onSubmit={handleSubmit(submitForm)}>
      <Link className='backlink' to={authPath.signIn}>
        <ArrowBlue />
        <span>SIGN IN</span>
      </Link>

      <h1 className='h1 mt-10 mb-15'>Reset password</h1>
      <p>{!sent ? 'Enter your email to continue' : 'We have sent you an email with a link to reset your password'}</p>

      {!sent ? (
        <>
          <Field
            component={InputMUIReduxForm}
            className='auth-box__input mt-85 min-w-530'
            name='email'
            type='email'
            label='Email'
            validate={[required, email]}
          />

          <div className='auth-box__btn-wrap mt-65 mx-auto'>
            <ButtonMUI disabled={submitting || pristine || invalid} loading={loading} formAction>
              Next
            </ButtonMUI>
          </div>
        </>
      ) : (
        <div className='auth-box__rounded-wrap mt-65 pt-25 pb-30 min-w-530 t-center'>
          <EnvelopeIcon />
        </div>
      )}

      <SnackbarMUI open={error} autoHideDuration={6000} onClose={toggleError} errors={passRecoveryError} />
    </form>
  );
};

export default reduxForm({
  form: 'PasswordRecovery',
})(PasswordRecovery);
