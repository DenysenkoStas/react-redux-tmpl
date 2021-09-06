import React from 'react';
import PropTypes from 'prop-types';
import {Popper, Fade, ClickAwayListener} from '@material-ui/core';

import './PopperMUI.scss';

const propTypes = {
  open: PropTypes.bool.isRequired,
  anchorEl: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),
  clickAway: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  classes: PropTypes.string,
  placement: PropTypes.string,
};

const PopperMUI = ({open, anchorEl, clickAway, children, classes, placement = 'bottom-start'}) => {
  return (
    <Popper
      id='popper'
      open={open}
      anchorEl={anchorEl}
      transition
      placement={placement}
      style={{
        zIndex: 999,
      }}
    >
      {({TransitionProps}) => (
        <ClickAwayListener onClickAway={clickAway}>
          <Fade {...TransitionProps} timeout={350}>
            <div className={`popper-wrapper ${classes}`}>{children}</div>
          </Fade>
        </ClickAwayListener>
      )}
    </Popper>
  );
};

PopperMUI.propTypes = propTypes;

export default PopperMUI;
