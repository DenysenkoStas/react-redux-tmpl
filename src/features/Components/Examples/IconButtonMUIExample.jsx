import React from 'react';
import IconButtonMUI from '../../../shared/IconButtonMUI';
import AlarmIcon from '@material-ui/icons/Alarm';

const IconButtonMUIExample = () => {
  return (
    <>
      <h2 className='mb-15'>IconButtonMUI</h2>

      <section className='card-wrap flex gap-25'>
        <IconButtonMUI>
          <AlarmIcon />
        </IconButtonMUI>

        <IconButtonMUI color='primary'>
          <AlarmIcon />
        </IconButtonMUI>

        <IconButtonMUI color='secondary'>
          <AlarmIcon />
        </IconButtonMUI>

        <IconButtonMUI color='inherit'>
          <AlarmIcon />
        </IconButtonMUI>
      </section>
    </>
  );
};

export default IconButtonMUIExample;
