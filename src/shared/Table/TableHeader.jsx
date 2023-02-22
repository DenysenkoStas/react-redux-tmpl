import React from 'react';
import {classList} from '../../helpers/functions';
import {ReactComponent as SortIcon} from './icons/sort.svg';
import styles from './Table.module.scss';

export default function TableHeader({className, column, params, setParams}) {
  const {name, value, renderKey} = column;

  let headerName = name;
  const renderPosition = name?.renderPosition;
  if (typeof name === 'object') headerName = name?.name;

  const renderElement = () => {
    let element = null;

    if (typeof name === 'object' && !!name?.render) {
      if (typeof renderKey === 'string') element = renderKey;
      if (Array.isArray(renderKey) && renderKey.length > 0) element = renderKey[0];
      return name.render(element);
    } else {
      return null;
    }
  };

  const handleSortClass = (value) => {
    let sortClass;

    if (params?.ordering?.includes(value)) {
      params?.ordering?.includes('-') ? (sortClass = styles.down) : (sortClass = styles.up);
    }
    return classList(styles.sortBtn, sortClass);
  };

  const handleSort = (value) => () => {
    let order = '';
    if (value === params?.ordering) order = '-';
    setParams({...params, ordering: `${order}${value}`});
  };

  return (
    <th className={className}>
      <div className={styles.headerInner}>
        {renderPosition === 'start' && renderElement()}
        {value ? (
          <button className={handleSortClass(value)} type='button' onClick={handleSort(value)}>
            <span className={styles.headerName}>{headerName}</span>
            <SortIcon className={styles.sortIcon} />
          </button>
        ) : (
          headerName && <span className={styles.headerName}>{headerName}</span>
        )}
        {(!renderPosition || renderPosition === 'end') && renderElement()}
      </div>
    </th>
  );
}
