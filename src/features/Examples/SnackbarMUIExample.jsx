import React, {useState} from 'react';
import {ExampleLayout} from './Examples';
import {SnackbarMUI, ButtonMUI} from '../../shared';

const SnackbarMUIExample = () => {
  const [error, setError] = useState(false);
  const [warning, setWarning] = useState(false);
  const [info, setInfo] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
    <ExampleLayout propsList='autoHideDuration, children, errors, onClose, open, severity'>
      <p className='mb-10 mt-25'>severity="error / warning / info / success"</p>
      <div className='flex gap-25'>
        <ButtonMUI color='secondary' onClick={() => setError(true)}>
          Open error snackbar
        </ButtonMUI>
        <ButtonMUI color='primary' onClick={() => setWarning(true)}>
          Open warning snackbar
        </ButtonMUI>
        <ButtonMUI onClick={() => setInfo(true)}>Open info snackbar</ButtonMUI>
        <ButtonMUI variant='outlined' onClick={() => setSuccess(true)}>
          Open success snackbar
        </ButtonMUI>
      </div>

      <SnackbarMUI open={error} onClose={() => setError(false)}>
        Error snackbar
      </SnackbarMUI>
      <SnackbarMUI open={warning} onClose={() => setWarning(false)} severity='warning'>
        Warning snackbar
      </SnackbarMUI>
      <SnackbarMUI open={info} onClose={() => setInfo(false)} severity='info'>
        Info snackbar
      </SnackbarMUI>
      <SnackbarMUI open={success} onClose={() => setSuccess(false)} severity='success'>
        Success snackbar
      </SnackbarMUI>
    </ExampleLayout>
  );
};

export default SnackbarMUIExample;
