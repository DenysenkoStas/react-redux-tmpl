import {useState} from 'react';

import './Tabs.scss';

export const TabItem = (props) => <div {...props} />;

export const Tabs = ({className = '', defaultIndex = 0, onTabClick, children}) => {
  const [bindIndex, setBindIndex] = useState(defaultIndex);

  const changeTab = (newIndex) => {
    if (typeof onTabClick === 'function') onTabClick(newIndex);
    setBindIndex(newIndex);
  };

  const items = children.filter((item) => item.type.name === 'TabItem');

  return (
    <div className={`tabs${className && ` ${className}`}`}>
      <div className='tabs__menu'>
        {items.map(({props: {index, label}}) => (
          <button
            key={`tab-btn-${index}`}
            className={`tabs__btn${bindIndex === index ? ' tabs__btn--active' : ''}`}
            type='button'
            role='tab'
            onClick={() => changeTab(index)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className='tabs__panel'>
        {items.map(({props}) => (
          <div
            {...props}
            key={`tab-item-${props.index}`}
            className={`tabs__item${bindIndex === props.index ? ' tabs__item--active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};
