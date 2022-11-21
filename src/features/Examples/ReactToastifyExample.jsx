import React from 'react';
import {notifyError, notifySuccess} from '../../helpers/notifySnack';
import {ExampleLayout} from './Examples';
import ButtonMUI from '../../shared/ButtonMUI';

const ReactToastifyExample = () => {
  return (
    <ExampleLayout>
      <div className='flex gap-25'>
        <ButtonMUI onClick={() => notifySuccess('Success message')}>Notify Success</ButtonMUI>
        <ButtonMUI color='secondary' onClick={() => notifyError('Error message')}>
          Notify Error
        </ButtonMUI>
      </div>
    </ExampleLayout>
  );
};

export default ReactToastifyExample;
