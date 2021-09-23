import React from 'react';
import IconButtonMUI from '../../../shared/IconButtonMUI';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import EditIcon from '@material-ui/icons/Edit';
import CancelIcon from '@material-ui/icons/Cancel';

const IconButtonMUIExample = () => {
  return (
    <>
      <h2 className='mb-15'>IconButtonMUI</h2>

      <section className='card-wrap'>
        <p>
          <b>Props:</b> children, className, color, disableFocusRipple, disableFocusRipple, disableRipple, disabled,
          edge, onClick, size
        </p>

        <p className='mb-10 mt-25'>color="default / primary / secondary"</p>
        <div className='flex gap-25'>
          <IconButtonMUI>
            <CheckCircleIcon />
          </IconButtonMUI>
          <IconButtonMUI color='primary'>
            <EditIcon />
          </IconButtonMUI>
          <IconButtonMUI color='secondary'>
            <CancelIcon />
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
          size="small / medium"
        </p>
        <div className='flex gap-25'>
          <IconButtonMUI>
            <CheckCircleIcon />
          </IconButtonMUI>
          <IconButtonMUI edge='start' size='medium'>
            <CheckCircleIcon />
          </IconButtonMUI>
          <IconButtonMUI edge='end' size='medium'>
            <CheckCircleIcon />
          </IconButtonMUI>
        </div>
      </section>
    </>
  );
};

export default IconButtonMUIExample;
