import React, {Children, useState} from 'react';
import PropTypes from 'prop-types';
import styles from './Tabs.module.scss';

export const TabItem = (props) => <div {...props} />;

TabItem.propTypes = {
  label: PropTypes.string.isRequired,
  index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export const Tabs = ({children, className = '', defaultIndex = 0, onTabClick}) => {
  const [bindIndex, setBindIndex] = useState(defaultIndex);
  const items = children?.length > 0 && Children.map(children, (child) => child?.type?.name === TabItem?.name && child);

  const changeTab = (newIndex) => () => {
    if (typeof onTabClick === 'function') onTabClick(newIndex);
    setBindIndex(newIndex);
  };

  if (!items || !items?.length) return null;
  return (
    <div className={`${styles.root}${className && ` ${className}`}`}>
      <div className={styles.menu}>
        {items.map(({props}) =>
          props?.index || props?.index === 0 ? (
            <button
              key={`tab-btn-${props.index}`}
              className={`${styles.btn}${bindIndex === props.index ? ` ${styles.btnActive}` : ''}`}
              type='button'
              role='tab'
              onClick={changeTab(props.index)}
            >
              {props?.label ? props.label : props.index}
            </button>
          ) : null
        )}
      </div>
      <div className={styles.panel}>
        {items.map(({props}) =>
          bindIndex === props?.index ? (
            <div {...props} key={`tab-item-${props?.index}`} className={styles.item} />
          ) : null
        )}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape({TabItem})).isRequired,
  className: PropTypes.string,
  defaultIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onTabClick: PropTypes.func
};
