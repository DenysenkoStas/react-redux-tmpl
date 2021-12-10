import React from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';

import './Pagination.scss';

import {ReactComponent as PrevIcon} from './icons/prev.svg';
import {ReactComponent as NextIcon} from './icons/next.svg';

const Pagination = ({
  active,
  className = '',
  marginPagesDisplayed = 1,
  onChange,
  pageCount,
  pageRangeDisplayed = 5,
  position = ''
}) => {
  return (
    <ReactPaginate
      pageCount={pageCount}
      pageRangeDisplayed={pageRangeDisplayed}
      marginPagesDisplayed={marginPagesDisplayed}
      previousLabel={<PrevIcon className='pagination__icon' />}
      nextLabel={<NextIcon className='pagination__icon' />}
      onPageChange={onChange}
      forcePage={active}
      containerClassName={`pagination${position && ` pagination--${position}`}${className && ` ${className}`}`}
      pageClassName='pagination__item'
      pageLinkClassName='pagination__link'
      activeLinkClassName='pagination__link--active'
      breakClassName='pagination__ellipsis'
      breakLinkClassName='pagination__ellipsis-link'
      previousClassName='pagination__prev-item'
      nextClassName='pagination__next-item'
      previousLinkClassName='pagination__prev-link'
      nextLinkClassName='pagination__next-link'
    />
  );
};

Pagination.propTypes = {
  active: PropTypes.number,
  className: PropTypes.string,
  marginPagesDisplayed: PropTypes.number,
  onChange: PropTypes.func,
  pageCount: PropTypes.number.isRequired,
  pageRangeDisplayed: PropTypes.number,
  position: PropTypes.oneOf(['left', 'right', 'center'])
};

export default Pagination;
