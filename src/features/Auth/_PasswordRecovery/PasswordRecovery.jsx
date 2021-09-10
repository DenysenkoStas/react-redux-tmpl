import React, {useState} from 'react';
import {Form, Field} from 'react-final-form';
import {FORM_ERROR} from 'final-form';
import {Link} from 'react-router-dom';
import ButtonMUI from '../../../shared/ButtonMUI';
import InputMUI from '../../../shared/InputMUI/InputMUI';
import {useToggle} from '../../../helpers/hooks';
import {email, required, composeValidators} from '../../../helpers/formValidation';
import {useDispatch, useSelector} from 'react-redux';
import {postPassRecovery} from '../authActions';
import SnackbarMUI from '../../../shared/SnackbarMUI/SnackbarMUI';

import {ReactComponent as ArrowBlue} from '../../../assets/icons/arrow-blue.svg';
import {ReactComponent as EnvelopeIcon} from '../../../assets/icons/envelope.svg';
import {authPath} from '../../../helpers/const';

const PasswordRecovery = () => {
  const dispatch = useDispatch();
  const {loading} = useSelector(({app}) => app);
  const {passRecoveryError} = useSelector(({auth}) => auth);

  const [sent, setSent] = useState(false);
  const [error, toggleError] = useToggle(false);
  const onPassRecoverySuccess = () => {
    // dispatch(reset('PasswordRecovery'));
    setSent(true);
  };

  const submitForm = (data) => {
    return dispatch(postPassRecovery(data)).then((res) => {
      if (res.payload && res.payload.status && res.payload.status === 200) {
        onPassRecoverySuccess();
      } else {
        toggleError();
        // throw new SubmissionError({...res.error.response.data, _error: res.error.response.data.detail});
      }
    });
  };

  return (
    <Form onSubmit={submitForm}>
      {({handleSubmit, submitting, pristine, invalid}) => (
        <form className='auth-box max-w-530' onSubmit={handleSubmit}>
          <Link className='backlink' to={authPath.signIn}>
            <ArrowBlue />
            <span>SIGN IN</span>
          </Link>

          <h1 className='h1 mt-10 mb-15'>Reset password</h1>
          <p>
            {!sent ? 'Enter your email to continue' : 'We have sent you an email with a link to reset your password'}
          </p>

          {!sent ? (
            <>
              <Field
                component={InputMUI}
                className='auth-box__input mt-85 min-w-530'
                name='email'
                type='email'
                label='Email'
                validate={composeValidators(required, email)}
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
      )}
    </Form>
  );
};

export default PasswordRecovery;
