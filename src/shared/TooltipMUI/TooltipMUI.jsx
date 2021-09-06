import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import './TooltipMUI.scss';

const TooltipMUI = ({
  text,
  children,
  error = false,
  delay = 1000,
  position = 'top',
  classes = 'auth-tooltip-popper',
}) => {
  return (
    <Tooltip
      title={text}
      placement={position}
      enterDelay={delay}
      leaveDelay={200}
      disableTouchListener
      disableFocusListener
      classes={{
        tooltip: error ? 'error-message-tooltip' : 'message-tooltip',
        popper: `message-popper ${classes}`,
      }}
    >
      {children}
    </Tooltip>
  );
};

export default TooltipMUI;
