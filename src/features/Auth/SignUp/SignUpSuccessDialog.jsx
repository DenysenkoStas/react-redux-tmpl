import React from 'react';
import {Link} from 'react-router-dom';
import DialogMUI from '../../../shared/DialogMUI';
import ButtonMUI from '../../../shared/ButtonMUI';
import {authPath} from '../../../helpers/const';

const SuccessAuthDialog = ({open, onClose}) => {
  return (
    <DialogMUI open={open} onClose={onClose}>
      <h1 className='h1 mb-35'>Thank you for your registration</h1>
      <p className='mb-30'>We have sent you an email with a link to confirm your registration.</p>
      <ButtonMUI variant='outlined' size='small' component={Link} type='link' to={authPath.signIn}>
        Ok
      </ButtonMUI>
    </DialogMUI>
  );
};

export default SuccessAuthDialog;
