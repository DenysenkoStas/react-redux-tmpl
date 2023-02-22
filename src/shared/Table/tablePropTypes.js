import PropTypes from 'prop-types';

export const tablePropTypes = {
  className: PropTypes.string,
  classes: PropTypes.exact({
    root: PropTypes.string,
    table: PropTypes.string,
    head: PropTypes.string,
    body: PropTypes.string,
    row: PropTypes.string,
    header: PropTypes.string,
    data: PropTypes.string
  }),
  columns: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.exact({
          name: PropTypes.string,
          renderPosition: PropTypes.oneOf(['start', 'end']),
          render: PropTypes.func
        })
      ]),
      value: PropTypes.string,
      width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      columnClass: PropTypes.string,
      headerClass: PropTypes.string,
      dataClass: PropTypes.string,
      renderKey: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
      render: PropTypes.func,
      SkeletonProps: PropTypes.object
    })
  ).isRequired,
  rows: PropTypes.array.isRequired,
  rowsCount: PropTypes.number,
  params: PropTypes.exact({
    page_size: PropTypes.number,
    search: PropTypes.string,
    ordering: PropTypes.string
  }).isRequired,
  setParams: PropTypes.func.isRequired,
  action: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  reloadDependency: PropTypes.any,
  disableRedux: PropTypes.bool,
  fixedLayout: PropTypes.bool,
  noRowsComponent: PropTypes.element,
  selectedRows: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  selectedRowKey: PropTypes.string
};
