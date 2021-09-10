import React from 'react';
import PropTypes from 'prop-types';

import './NotFound.scss';

import {ReactComponent as NotFoundPic} from './images/404-error.svg';

const NotFound = ({text}) => {
  return (
    <div className='not-found'>
      <NotFoundPic className='not-found__img' alt='Page not found picture' />
      <h2 className='not-found__title'>{text ? text : 'Sorry, page not found'}</h2>
    </div>
  );
};

NotFound.propTypes = {
  text: PropTypes.string,
};

export default NotFound;
