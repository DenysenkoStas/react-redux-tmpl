import React from 'react';
import {ExampleLayout} from './Examples';
import {ButtonMUI, TooltipMUI} from '../../shared';

const TooltipMUIExample = () => {
  return (
    <ExampleLayout
      propsList='arrow, children, className, disableFocusListener, disableHoverListener, disableInteractive, disableTouchListener,
          enterDelay, enterNextDelay, enterTouchDelay, errorColor, id, leaveDelay, leaveTouchDelay,
          onClose, onOpen, open, placement, title'
    >
      <p className='mb-10 mt-25'>arrow</p>
      <div className='flex'>
        <TooltipMUI title='Arrow' arrow>
          <ButtonMUI>Arrow</ButtonMUI>
        </TooltipMUI>
      </div>

      <p className='mb-10 mt-25'>errorColor</p>
      <div className='flex'>
        <TooltipMUI title='Arrow' errorColor>
          <ButtonMUI>Error color</ButtonMUI>
        </TooltipMUI>
      </div>

      <p className='mb-10 mt-25'>
        placement="bottom-end / bottom-start / bottom / left-end / left-start / left / right-end / right-start / right /
        top-end / top-start / top"
      </p>

      <div className='flex gap-25'>
        <TooltipMUI title='Placement top'>
          <ButtonMUI>Top</ButtonMUI>
        </TooltipMUI>

        <TooltipMUI title='Position bottom' placement='bottom'>
          <ButtonMUI variant='outlined'>Bottom</ButtonMUI>
        </TooltipMUI>

        <TooltipMUI title='Position left' placement='left'>
          <ButtonMUI color='primary'>Left</ButtonMUI>
        </TooltipMUI>

        <TooltipMUI title='Position right' placement='right'>
          <ButtonMUI variant='outlined' color='primary'>
            Right
          </ButtonMUI>
        </TooltipMUI>
      </div>
    </ExampleLayout>
  );
};

export default TooltipMUIExample;
