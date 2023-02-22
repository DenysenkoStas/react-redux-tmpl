import React from 'react';
import {SkeletonMUI} from '../index';

export default function TableData({className, column, row, rowIndex, loading}) {
  const {renderKey, SkeletonProps} = column;

  const renderData = () => {
    let element = null;

    if (!!column?.render) {
      if (typeof renderKey === 'string') element = row[renderKey];
      if (Array.isArray(renderKey)) {
        element = Object.fromEntries(
          renderKey.filter((key) => Object.keys(row).some((someKey) => someKey === key)).map((key) => [[key], row[key]])
        );
      }
      return column.render(element, rowIndex);
    } else {
      return row[renderKey];
    }
  };

  return <td className={className}>{loading ? <SkeletonMUI loading={loading} {...SkeletonProps} /> : renderData()}</td>;
}
