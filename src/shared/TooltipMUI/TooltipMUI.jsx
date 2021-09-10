import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';

import './TooltipMUI.scss';

const TooltipMUI = ({className, title, children, enterDelay, leaveDelay, position = 'top'}) => {
  return (
    <Tooltip
      className={className}
      title={title}
      placement={position}
      enterDelay={enterDelay}
      leaveDelay={leaveDelay}
      disableTouchListener
      disableFocusListener
      classes={{
        tooltip: 'tooltip-mui',
      }}
    >
      {children}
    </Tooltip>
  );
};

TooltipMUI.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
  enterDelay: PropTypes.number,
  leaveDelay: PropTypes.number,
  position: PropTypes.string,
  title: PropTypes.node.isRequired,
};

export default TooltipMUI;
