import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';

import './IconButtonMUI.scss';

const propTypes = {
  src: PropTypes.string,
  children: PropTypes.node,
  alt: PropTypes.string.isRequired,
  classes: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  imageAsComponent: PropTypes.bool,
};

const IconButtonMUI = ({src, children, classes, onClick, alt, imageAsComponent}) => (
  <IconButton
    onClick={onClick}
    classes={{
      root: classes,
    }}
  >
    {imageAsComponent ? children : <img src={src} alt={alt} />}
  </IconButton>
);

IconButtonMUI.propTypes = propTypes;

export default IconButtonMUI;
