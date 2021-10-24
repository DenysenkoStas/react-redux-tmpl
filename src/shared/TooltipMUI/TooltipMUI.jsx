import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';

import './TooltipMUI.scss';

const TooltipMUI = ({
  arrow = false,
  children,
  className = '',
  disableFocusListener = false,
  disableHoverListener = false,
  disableTouchListener = false,
  enterDelay = 100,
  enterNextDelay = 0,
  enterTouchDelay = 700,
  errorColor = false,
  id,
  interactive = false,
  leaveDelay = 0,
  leaveTouchDelay = 1500,
  onClose,
  onOpen,
  open,
  placement = 'top',
  title
}) => {
  return (
    <Tooltip
      arrow={arrow}
      className={className}
      disableFocusListener={disableFocusListener}
      disableHoverListener={disableHoverListener}
      disableTouchListener={disableTouchListener}
      enterDelay={enterDelay}
      enterNextDelay={enterNextDelay}
      enterTouchDelay={enterTouchDelay}
      id={id}
      interactive={interactive}
      leaveDelay={leaveDelay}
      leaveTouchDelay={leaveTouchDelay}
      onClose={onClose}
      onOpen={onOpen}
      open={open}
      placement={placement}
      title={title}
      classes={{
        tooltip: `tooltip-mui${errorColor ? ' tooltip-mui--error-color' : ''}`,
        arrow: 'tooltip-mui__arrow'
      }}
    >
      {children}
    </Tooltip>
  );
};

TooltipMUI.propTypes = {
  arrow: PropTypes.bool,
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
  disableFocusListener: PropTypes.bool,
  disableHoverListener: PropTypes.bool,
  disableTouchListener: PropTypes.bool,
  enterDelay: PropTypes.number,
  enterNextDelay: PropTypes.number,
  enterTouchDelay: PropTypes.number,
  errorColor: PropTypes.bool,
  id: PropTypes.string,
  interactive: PropTypes.bool,
  leaveDelay: PropTypes.number,
  leaveTouchDelay: PropTypes.number,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  open: PropTypes.bool,
  placement: PropTypes.oneOf([
    'bottom-end',
    'bottom-start',
    'bottom',
    'left-end',
    'left-start',
    'left',
    'right-end',
    'right-start',
    'right',
    'top-end',
    'top-start',
    'top'
  ]),
  title: PropTypes.node.isRequired
};

export default TooltipMUI;
