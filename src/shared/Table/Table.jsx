import React, {useState, useEffect, useRef} from 'react';
import {useDispatch} from 'react-redux';
import {classList, objectToQueryString, scrollToElement} from '../../helpers/functions';
import {tablePropTypes} from './tablePropTypes';
import TableHeader from './TableHeader';
import TableData from './TableData';
import {NotFound, Pagination} from '../index';
import styles from './Table.module.scss';

const Table = ({
  className = '',
  classes = {},
  columns = [],
  rows = [],
  rowsCount = 0,
  params = {},
  setParams,
  action,
  loading = false,
  reloadDependency = null,
  disableRedux = false,
  fixedLayout = false,
  noRowsComponent = <NotFound className='p-12 min-h-350' noData small />,
  selectedRows,
  selectedRowKey = 'id'
}) => {
  const tableRef = useRef(null);
  const dispatch = useDispatch();
  const [activePage, setActivePage] = useState(0);
  const skeletonArray = new Array(params?.page_size).fill({});
  const tableRows = loading ? skeletonArray : rows;
  const pageCount = !!(rowsCount && params?.page_size) && Math.ceil(rowsCount / params?.page_size);

  const sendRequest = (page) => {
    const queryParams = {page, ...params};
    const queryString = objectToQueryString(queryParams);
    disableRedux ? action({queryString, queryParams}) : dispatch(action({queryString, queryParams}));
  };

  const changePage = (selected = 0, isReload = true) => {
    setActivePage(selected);
    if (isReload) sendRequest(selected + 1);
  };

  const handlePagination = (event) => {
    if (tableRef) scrollToElement(tableRef);
    changePage(event?.selected);
  };

  useEffect(() => {
    changePage();
  }, [params]);

  useEffect(() => {
    if (reloadDependency) changePage(activePage);
  }, [reloadDependency]);

  if (!Array.isArray(columns) || columns?.length === 0) return null;
  return (
    <div className={classList(styles.root, classes.root, className)} ref={tableRef}>
      <table className={classList(styles.table, fixedLayout && styles.tableFixed, classes.table)}>
        <thead className={classList(styles.head, classes.head)}>
          <tr className={classList(styles.row, classes.row)}>
            {columns?.map(({width, columnClass, headerClass, ...column}, index) => (
              <TableHeader
                key={index}
                className={classList(styles.header, classes.header, width && `w-${width}`, columnClass, headerClass)}
                column={column}
                params={params}
                setParams={setParams}
              />
            ))}
          </tr>
        </thead>

        <tbody className={classList(styles.body, classes.body)}>
          {tableRows?.length > 0 &&
            tableRows?.map((row, index) => {
              let selectedClass;
              if (
                (typeof selectedRows === 'string' && selectedRows === row?.[selectedRowKey]) ||
                (Array.isArray(selectedRows) &&
                  (selectedRows.includes(row?.[selectedRowKey]) ||
                    selectedRows.find((selected) => selected?.[selectedRowKey] === row?.[selectedRowKey])))
              ) {
                selectedClass = styles.rowSelected;
              }

              return (
                <tr key={row?.id || index} className={classList(styles.row, classes.row, selectedClass)}>
                  {columns.map(({width, columnClass, dataClass, ...column}, columnIndex) => (
                    <TableData
                      key={columnIndex}
                      className={classList(styles.data, classes.data, width && `w-${width}`, columnClass, dataClass)}
                      column={column}
                      row={row}
                      rowIndex={row?.id || index}
                      loading={loading}
                    />
                  ))}
                </tr>
              );
            })}
        </tbody>
      </table>

      {!loading && tableRows?.length === 0 && noRowsComponent}

      {rowsCount > params?.page_size && (
        <Pagination active={activePage} pageCount={pageCount} onChange={handlePagination} />
      )}
    </div>
  );
};

Table.propTypes = tablePropTypes;

export default Table;
