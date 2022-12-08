import React, {Children, cloneElement} from 'react';
import PropTypes from 'prop-types';
import {capitalize} from '../../helpers/functions';
import {ReactComponent as NotFoundIcon} from './images/404-error.svg';
import {ReactComponent as BoxIcon} from './images/box.svg';
import styles from './NotFound.module.scss';

const Icon = ({children}) => {
  if (!children) return null;
  return Children.map(children, (child) => cloneElement(child, {className: styles.icon}));
};

const NotFound = ({
  children,
  className = '',
  color = '',
  icon,
  noData = false,
  small = false,
  title = 'Sorry, page not found',
}) => {
  let defIcon = <NotFoundIcon className={styles.icon} alt='Computer monitor' />;
  if (noData) {
    defIcon = <BoxIcon className={styles.icon} alt='Empty box' />;
    title = 'No data';
  }

  return (
    <div className={`${styles.root}${small ? ` ${styles.small}` : ''}${className && ` ${className}`}`}>
      {icon ? <Icon children={icon} /> : defIcon}
      {title && <h2 className={`${styles.title}${color && ` ${styles[`title${capitalize(color)}`]}`}`}>{title}</h2>}
      {children && (
        <div className={styles.children}>
          {children}
        </div>
      )}
    </div>
  );
};

NotFound.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary']),
  icon: PropTypes.element,
  noData: PropTypes.bool,
  small: PropTypes.bool,
  text: PropTypes.string,
  title: PropTypes.string
};

export default NotFound;
