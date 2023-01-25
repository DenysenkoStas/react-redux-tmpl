import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@mui/material/Tooltip';
import styles from './TooltipMUI.module.scss';

const TooltipMUI = forwardRef(
  (
    {
      arrow = false,
      children,
      className = '',
      disableFocusListener = false,
      disableHoverListener = false,
      disableInteractive = false,
      disableTouchListener = false,
      enterDelay = 100,
      enterNextDelay = 0,
      enterTouchDelay = 700,
      errorColor = false,
      id,
      leaveDelay = 0,
      leaveTouchDelay = 1500,
      onClose,
      onOpen,
      open,
      placement = 'top',
      title,
      ...props
    },
    ref
  ) => {
    return (
      <Tooltip
        arrow={arrow}
        className={className}
        classes={{
          tooltip: `${styles.root}${errorColor ? ` ${styles.errorColor}` : ''}`,
          arrow: styles.arrow
        }}
        disableFocusListener={disableFocusListener}
        disableHoverListener={disableHoverListener}
        disableInteractive={disableInteractive}
        disableTouchListener={disableTouchListener}
        enterDelay={enterDelay}
        enterNextDelay={enterNextDelay}
        enterTouchDelay={enterTouchDelay}
        id={id}
        leaveDelay={leaveDelay}
        leaveTouchDelay={leaveTouchDelay}
        onClose={onClose}
        onOpen={onOpen}
        open={open}
        placement={placement}
        title={title}
        {...props}
        ref={ref}
      >
        {children}
      </Tooltip>
    );
  }
);

TooltipMUI.propTypes = {
  arrow: PropTypes.bool,
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
  disableFocusListener: PropTypes.bool,
  disableHoverListener: PropTypes.bool,
  disableInteractive: PropTypes.bool,
  disableTouchListener: PropTypes.bool,
  enterDelay: PropTypes.number,
  enterNextDelay: PropTypes.number,
  enterTouchDelay: PropTypes.number,
  errorColor: PropTypes.bool,
  id: PropTypes.string,
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
