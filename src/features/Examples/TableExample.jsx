import React, {useState} from 'react';
import {capitalize, objectToQueryString} from '../../helpers/functions';
import {ExampleLayout} from './Examples';
import {CheckboxMUI, Table} from '../../shared';
import {ReactComponent as BoxIcon} from '../../assets/icons/box.svg';

const transformQuery = (params) => ({
  _page: params?.page,
  _limit: params?.page_size,
  _sort: `${params?.ordering?.includes('-') ? params?.ordering.slice(1) : params?.ordering}`,
  _order: `${params?.ordering?.includes('-') ? 'desc' : 'asc'}`,
  _expand: 'post'
});

const TableExample = () => {
  const [loading, setLoading] = useState(true);
  const [params, setParams] = useState({
    page_size: 15,
    search: '',
    ordering: 'name'
  });
  const [data, setData] = useState({
    results: [],
    count: 0
  });
  const [selectedRows, setSelectedRows] = useState([]);

  const getData =
    (setter) =>
    ({queryParams}) => {
      const apiUrl = 'https://jsonplaceholder.typicode.com/comments/';
      const query = transformQuery(queryParams);

      if (selectedRows.length > 0) setSelectedRows([]);
      if (setter) {
        setLoading(true);
        fetch(`${apiUrl}${objectToQueryString(query)}`)
          .then((res) => res.ok && res.json())
          .then((data) => data && setter({results: data, count: 500}))
          .finally(() => setLoading(false));
      }
    };

  const allSelected = selectedRows.length > 0 && selectedRows.length === data?.results?.length;
  const someSelected = selectedRows.length > 0 && selectedRows.length < data?.results?.length;
  const selectAll = () => (allSelected ? setSelectedRows([]) : setSelectedRows(data?.results));
  const selectRow = (data) => () => {
    setSelectedRows((prev) => {
      // return prev?.includes(id) ? prev.filter((el) => el !== id) : [...prev, id]; // for ID selection only
      return prev.find((el) => el?.id === data?.id) ? prev.filter((el) => el?.id !== data?.id) : [...prev, data];
    });
  };

  const columns = [
    {
      name: {
        render: () => (
          <CheckboxMUI
            title='Select all on the page'
            color='info'
            checked={allSelected}
            indeterminate={someSelected}
            onChange={selectAll}
          />
        )
      },
      width: 5,
      renderKey: ['id', 'name', 'email'],
      render: (el) => (
        <CheckboxMUI
          checked={!!selectedRows.find((row) => row?.id === el?.id)}
          color='info'
          value={el?.id}
          onChange={selectRow(el)}
        />
      ),
      SkeletonProps: {
        variant: 'rounded',
        width: 18,
        height: 18
      }
    },
    {
      name: 'ID',
      value: 'id',
      width: 5,
      columnClass: 'table-column-id',
      headerClass: 'table-header-id',
      dataClass: 'table-data-id bold',
      renderKey: 'id'
    },
    {
      name: 'Title',
      value: 'name',
      width: 20,
      renderKey: 'name',
      render: (name) => (
        <p className='truncate-two-lines' title={capitalize(name)}>
          {capitalize(name)}
        </p>
      )
    },
    {
      name: 'Excerpt',
      value: 'body',
      width: 30,
      renderKey: 'body',
      render: (body) => (
        <p className='truncate-two-lines' title={capitalize(body)}>
          {capitalize(body)}
        </p>
      )
    },
    {name: 'Email', value: 'email', width: 20, dataClass: 'break-word max-w-200 lowercase', renderKey: 'email'},
    {
      name: {
        name: 'Post',
        renderPosition: 'start',
        render: () => <BoxIcon className='mr-8' width={16} height={16} />
      },
      value: 'postId',
      width: 20,
      renderKey: ['postId', 'post'],
      render: ({postId, post}) => {
        const postTitle = !!post?.title ? capitalize(post.title) : '';
        return (
          <>
            <p className='truncate-two-lines' title={postTitle}>
              {postId && `${postId}. `}
              {postTitle}
            </p>
          </>
        );
      }
    }
  ];

  return (
    <ExampleLayout
      propsList='className, classes, columns, rows, rowsCount, params, setParams, action, loading, reloadDependency, 
      disableRedux, fixedLayout, noRowsComponent, selectedRows, selectedRowKey'
    >
      <Table
        classes={{
          root: 'table-root',
          table: 'table-table',
          head: 'table-head',
          body: 'table-body',
          row: 'table-row',
          header: 'table-header',
          data: 'table-data'
        }}
        columns={columns}
        rows={data?.results}
        rowsCount={data?.count}
        params={params}
        setParams={setParams}
        action={getData(setData)}
        loading={loading}
        disableRedux
        selectedRows={selectedRows}
      />
    </ExampleLayout>
  );
};

export default TableExample;
