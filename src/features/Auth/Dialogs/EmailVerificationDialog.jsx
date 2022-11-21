import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {postEmailVer} from '../authActions';
import {useQueryParams, useToggle} from '../../../helpers/hooks';
import DialogMUI from '../../../shared/DialogMUI';
import ButtonMUI from '../../../shared/ButtonMUI';
import LoaderMUI from '../../../shared/LoaderMUI';

const EmailVerificationDialog = () => {
  const dispatch = useDispatch();
  const {loading} = useSelector(({app}) => app);
  const {emailVerError} = useSelector(({auth}) => auth);
  const history = useHistory();
  const queryParams = useQueryParams();

  const [dialog, toggleDialog] = useToggle(false);

  const deleteQuery = () => {
    queryParams.delete('security_token');
    history.replace({search: queryParams.toString()});
    toggleDialog();
  };

  useEffect(() => {
    if (queryParams.has('security_token')) {
      dispatch(postEmailVer({security_token: queryParams.get('security_token')}));
      toggleDialog();
    }
  }, []);

  if (loading) {
    return <LoaderMUI />;
  }

  return (
    <DialogMUI open={dialog} onClose={toggleDialog} title='Something wrong'>
      <h1 className='h1 mb-35'>{emailVerError ? 'Something wrong' : 'Thank you for your registration'}</h1>
      {emailVerError ? (
        <p className='mb-30'>Error name: {emailVerError}</p>
      ) : (
        <>
          <p className='mb-5'>Your details have been sent to our team and are currently under review.</p>
          <p className='mb-30'>You will soon receive a confirmation with log in details.</p>
        </>
      )}
      <ButtonMUI variant='outlined' size='small' onClick={deleteQuery}>
        Ok
      </ButtonMUI>
    </DialogMUI>
  );
};

export default EmailVerificationDialog;
