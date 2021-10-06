import React, {useEffect, useState} from 'react';
import {reset, SubmissionError} from 'redux-form';
import {useDispatch, useSelector} from 'react-redux';
import {postSignUp} from '../authActions';
import {useToggle} from '../../../helpers/hooks';
import {Link} from 'react-router-dom';
import SignUpStep1 from './SignUpStep1';
import SignUpStep2 from './SignUpStep2';
import SignUpStep3 from './SignUpStep3';
import SignUpSuccessDialog from './SignUpSuccessDialog';
import SnackbarMUI from '../../../shared/SnackbarMUI/SnackbarMUI';
import {authPath} from '../../../routes/paths';

import {ReactComponent as ArrowBlueIcon} from '../../../assets/icons/arrow-blue.svg';

const SignUpWizard = ({match}) => {
  const dispatch = useDispatch();
  const {loading} = useSelector(({app}) => app);
  const {signUpError} = useSelector(({auth}) => auth);
  const [userRole, setUserRole] = useState({role: ''});

  useEffect(() => {
    if (match.url === authPath.signUp) {
      setUserRole({role: 'user'});
    } else {
      setUserRole({role: 'admin'});
    }
  }, []);

  const [page, setPage] = useState(1);
  const nextPage = () => setPage((prev) => prev + 1);
  const previousPage = () => setPage((prev) => prev - 1);

  let descText;
  if (page === 1) {
    descText = 'Please, provide some information about yourself';
  } else if (page === 2) {
    descText = 'Please, fill out the form about your location at the moment';
  } else if (page === 3) {
    descText = 'Just a little bit left, create a password for your personal account';
  }

  const [dialog, toggleDialog] = useToggle(false);
  const [error, toggleError] = useToggle(false);
  const onSignUpSuccess = () => {
    toggleDialog();
    dispatch(reset('SignUpWizard'));
    setPage(1);
  };

  const submitForm = (data) => {
    return dispatch(postSignUp({...data, ...userRole})).then((res) => {
      if (res.payload && res.payload.status && res.payload.status === 200) {
        onSignUpSuccess();
      } else {
        toggleError();
        throw new SubmissionError({...res.error.response.data, _error: res.error.response.data.detail});
      }
    });
  };

  return (
    <div className='auth-box'>
      {(page === 2 || page === 3) && (
        <button type='button' className='backlink mb-8' onClick={previousPage}>
          <ArrowBlueIcon />
          <span>{page === 2 ? 'Step 1' : 'Step 2'}</span>
        </button>
      )}

      <h1 className='auth-box__title'>Sign up</h1>
      <p className='auth-box__desc'>{descText}</p>

      {page === 1 && <SignUpStep1 userRole={userRole} onSubmit={nextPage} />}
      {page === 2 && <SignUpStep2 onSubmit={nextPage} />}
      {page === 3 && <SignUpStep3 onSubmit={submitForm} loading={loading} />}

      <div className='auth-box__footer'>
        <span className='auth-box__footer-text'>Already a member?</span>
        <Link className='auth-box__link' to={authPath.signIn}>
          SIGN IN
        </Link>
      </div>

      <SnackbarMUI open={error} autoHideDuration={6000} onClose={toggleError} errors={signUpError} />

      <SignUpSuccessDialog open={dialog} onClose={toggleDialog} />
    </div>
  );
};

export default SignUpWizard;
