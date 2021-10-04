import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';

import './TooltipMUI.scss';

const TooltipMUI = ({
  arrow = false,
  children,
  className = '',
  title,
  enterDelay,
  errorColor = false,
  leaveDelay,
  position = 'top'
}) => {
  return (
    <Tooltip
      arrow={arrow}
      className={className}
      title={title}
      placement={position}
      enterDelay={enterDelay}
      leaveDelay={leaveDelay}
      disableTouchListener
      disableFocusListener
      classes={{
        tooltip: `tooltip-mui${errorColor ? ' tooltip-mui--error-color' : ''}`
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
  enterDelay: PropTypes.number,
  errorColor: PropTypes.bool,
  leaveDelay: PropTypes.number,
  position: PropTypes.string,
  title: PropTypes.node.isRequired
};

export default TooltipMUI;
