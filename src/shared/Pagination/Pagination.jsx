import React from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import {capitalize} from '../../helpers/functions';
import {ReactComponent as PrevIcon} from './icons/prev.svg';
import {ReactComponent as NextIcon} from './icons/next.svg';
import styles from './Pagination.module.scss';

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
      previousLabel={<PrevIcon className={styles.icon} />}
      nextLabel={<NextIcon className={styles.icon} />}
      onPageChange={onChange}
      forcePage={active}
      containerClassName={`${styles.root}${position && ` ${styles[`position${capitalize(position)}`]}`}${
        className && ` ${className}`
      }`}
      pageClassName={styles.item}
      pageLinkClassName={styles.link}
      activeLinkClassName={styles.linkActive}
      breakClassName={styles.ellipsis}
      breakLinkClassName={styles.ellipsisLink}
      previousClassName={styles.prevItem}
      nextClassName={styles.nextItem}
      previousLinkClassName={styles.prevLink}
      nextLinkClassName={styles.nextLink}
      disabledClassName={styles.disabled}
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
