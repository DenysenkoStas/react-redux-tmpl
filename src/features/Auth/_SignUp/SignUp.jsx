import React, {useEffect, useState, Children} from 'react';
import {Form} from 'react-final-form';
import {FORM_ERROR} from 'final-form';
import {useDispatch, useSelector} from 'react-redux';
import ButtonMUI from '../../../shared/ButtonMUI';
import {postSignUp} from '../authActions';
import {useToggle} from '../../../helpers/hooks';
import {Link} from 'react-router-dom';
import SignUpStep1 from './SignUpStep1';
import SignUpStep2 from './SignUpStep2';
import SignUpStep3 from './SignUpStep3';
import SignUpSuccessDialog from './SignUpSuccessDialog';
import SnackbarMUI from '../../../shared/SnackbarMUI/SnackbarMUI';
import {authPath} from '../../../helpers/const';

import {ReactComponent as ArrowBlueIcon} from '../../../assets/icons/arrow-blue.svg';

const SignUp = ({match, ...props}) => {
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
  const [values, setValues] = useState({values: props.initialValues || {}});

  const nextPage = (values) => {
    setPage((prev) => prev + 1);
    setValues(values);
  };

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
    // dispatch(reset('SignUp'));
    setPage(1);
  };

  const submitForm = (data) => {
    return dispatch(postSignUp({...data, ...userRole})).then((res) => {
      if (res.payload && res.payload.status && res.payload.status === 200) {
        onSignUpSuccess();
      } else {
        toggleError();
        // throw new SubmissionError({...res.error.response.data, _error: res.error.response.data.detail});
      }
    });
  };

  const activePage = Children.toArray(children)[page];
  const isLastPage = page === Children.count(children) - 1;

  return (
    <Form onSubmit={submitForm} initialValues={values}>
      {({handleSubmit, submitting, values, pristine, invalid}) => (
        <form className='auth-box max-w-530' onSubmit={handleSubmit}>
          {(page === 2 || page === 3) && (
            <button type='button' className='backlink mb-10' onClick={previousPage}>
              <ArrowBlueIcon />
              <span>{page === 2 ? 'Step 1' : 'Step 2'}</span>
            </button>
          )}

          <h1 className='h1 mb-15'>Sign up</h1>
          <p className='mb-85'>{descText}</p>

          {activePage}

          {/*{page === 1 && <SignUpStep1 userRole={userRole} onSubmit={nextPage} />}*/}
          {/*{page === 2 && <SignUpStep2 onSubmit={nextPage} />}*/}
          {/*{page === 3 && <SignUpStep3 onSubmit={submitForm} loading={loading} />}*/}

          {isLastPage && (
            <div className='auth-box__btn-wrap mt-65 mb-185 mx-auto'>
              <ButtonMUI disabled={submitting || pristine || invalid} loading={loading} formAction>
                Next
              </ButtonMUI>
            </div>
          )}

          <div className='auth-box__footer'>
            <span className='auth-box__text mr-15'>Already a member?</span>
            <Link className='auth-box__link' to={authPath.signIn}>
              SIGN IN
            </Link>
          </div>

          <SnackbarMUI open={error} autoHideDuration={6000} onClose={toggleError} errors={signUpError} />

          <SignUpSuccessDialog open={dialog} onClose={toggleDialog} />
        </form>
      )}
    </Form>
  );
};

export default SignUp;
