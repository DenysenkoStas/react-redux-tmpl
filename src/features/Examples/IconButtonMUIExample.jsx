import React from 'react';
import {ExampleLayout} from './Examples';
import IconButtonMUI from '../../shared/IconButtonMUI';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EditIcon from '@mui/icons-material/Edit';
import CancelIcon from '@mui/icons-material/Cancel';

const IconButtonMUIExample = () => {
  return (
    <ExampleLayout
      propsList='children, className, color, disableFocusRipple, disableFocusRipple, disableRipple, disabled,
          edge, onClick, size'
    >
      <p className='mb-10 mt-25'>color="primary / secondary / info / success / error / warning"</p>
      <div className='flex gap-25'>
        <IconButtonMUI>
          <CheckCircleIcon />
        </IconButtonMUI>
        <IconButtonMUI color='secondary'>
          <CancelIcon />
        </IconButtonMUI>
        <IconButtonMUI color='info'>
          <EditIcon />
        </IconButtonMUI>
        <IconButtonMUI color='success'>
          <CheckCircleIcon />
        </IconButtonMUI>
        <IconButtonMUI color='error'>
          <CancelIcon />
        </IconButtonMUI>
        <IconButtonMUI color='warning'>
          <EditIcon />
        </IconButtonMUI>
      </div>

      <p className='mb-10 mt-25'>disabled</p>
      <div className='flex gap-25'>
        <IconButtonMUI disabled>
          <CheckCircleIcon />
        </IconButtonMUI>
      </div>

      <p className='mb-10 mt-25'>
        edge="false / start / end"
        <br />
        size="small / medium / large"
      </p>
      <div className='flex gap-25'>
        <IconButtonMUI>
          <CheckCircleIcon />
        </IconButtonMUI>
        <IconButtonMUI edge='start' size='medium'>
          <CheckCircleIcon />
        </IconButtonMUI>
        <IconButtonMUI edge='end' size='large'>
          <CheckCircleIcon />
        </IconButtonMUI>
      </div>
    </ExampleLayout>
  );
};

export default IconButtonMUIExample;
