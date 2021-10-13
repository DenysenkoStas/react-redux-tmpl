import React from 'react';
import ButtonMUI from '../../shared/ButtonMUI';
import {notifyError, notifySuccess} from '../../helpers/notifySnack';

const ReactToastifyExample = () => {
  return (
    <>
      <h2 className='mb-15'>React-Toastify</h2>

      <section className='card-wrap flex gap-25'>
        <ButtonMUI onClick={() => notifySuccess('Success message')}>Notify Success</ButtonMUI>
        <ButtonMUI color='secondary' onClick={() => notifyError('Error message')}>
          Notify Error
        </ButtonMUI>
      </section>
    </>
  );
};

export default ReactToastifyExample;
