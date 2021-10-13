import React from 'react';
import {ButtonMUI, TooltipMUI} from '../../shared';

const TooltipMUIExample = () => {
  return (
    <>
      <h2 className='mb-15'>TooltipMUI</h2>

      <section className='card-wrap flex gap-25'>
        <TooltipMUI title='Position top'>
          <span>
            <ButtonMUI>Top</ButtonMUI>
          </span>
        </TooltipMUI>

        <TooltipMUI title='Position bottom' position='bottom'>
          <span>
            <ButtonMUI variant='outlined'>Bottom</ButtonMUI>
          </span>
        </TooltipMUI>

        <TooltipMUI title='Position left' position='left'>
          <span>
            <ButtonMUI color='primary'>Left</ButtonMUI>
          </span>
        </TooltipMUI>

        <TooltipMUI title='Position right' position='right'>
          <span>
            <ButtonMUI variant='outlined' color='primary'>
              Right
            </ButtonMUI>
          </span>
        </TooltipMUI>
      </section>
    </>
  );
};

export default TooltipMUIExample;
