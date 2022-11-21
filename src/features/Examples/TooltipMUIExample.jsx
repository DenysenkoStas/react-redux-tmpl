import React from 'react';
import {ExampleLayout} from './Examples';
import {ButtonMUI, TooltipMUI} from '../../shared';

const TooltipMUIExample = () => {
  return (
    <ExampleLayout
      propsList='arrow, children, className, disableFocusListener, disableHoverListener, disableTouchListener,
          enterDelay, enterNextDelay, enterTouchDelay, errorColor, id, interactive, leaveDelay, leaveTouchDelay,
          onClose, onOpen, open, placement, title'
    >
      <p className='mb-10 mt-25'>arrow</p>
      <div className='flex'>
        <TooltipMUI title='Arrow' arrow>
          <span>
            <ButtonMUI>Arrow</ButtonMUI>
          </span>
        </TooltipMUI>
      </div>

      <p className='mb-10 mt-25'>errorColor</p>
      <div className='flex'>
        <TooltipMUI title='Arrow' errorColor>
          <span>
            <ButtonMUI>Error color</ButtonMUI>
          </span>
        </TooltipMUI>
      </div>

      <p className='mb-10 mt-25'>
        placement="bottom-end / bottom-start / bottom / left-end / left-start / left / right-end / right-start / right /
        top-end / top-start / top"
      </p>

      <div className='flex gap-25'>
        <TooltipMUI title='Placement top'>
          <span>
            <ButtonMUI>Top</ButtonMUI>
          </span>
        </TooltipMUI>

        <TooltipMUI title='Position bottom' placement='bottom'>
          <span>
            <ButtonMUI variant='outlined'>Bottom</ButtonMUI>
          </span>
        </TooltipMUI>

        <TooltipMUI title='Position left' placement='left'>
          <span>
            <ButtonMUI color='primary'>Left</ButtonMUI>
          </span>
        </TooltipMUI>

        <TooltipMUI title='Position right' placement='right'>
          <span>
            <ButtonMUI variant='outlined' color='primary'>
              Right
            </ButtonMUI>
          </span>
        </TooltipMUI>
      </div>
    </ExampleLayout>
  );
};

export default TooltipMUIExample;
