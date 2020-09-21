import React from 'react'
import PropTypes from 'prop-types'
import {
  CustomPaging,
  DataTypeProvider,
  FilteringState,
  GroupingState,
  IntegratedFiltering,
  IntegratedGrouping,
  IntegratedPaging,
  IntegratedSelection,
  IntegratedSorting,
  PagingState,
  RowDetailState,
  SearchState,
  SelectionState,
  SortingState
} from '@devexpress/dx-react-grid'
import {
  Grid,
  PagingPanel,
  SearchPanel,
  Table,
  TableColumnResizing,
  TableGroupRow,
  TableHeaderRow,
  TableRowDetail,
  TableSelection,
  Toolbar,
  VirtualTable
} from '@devexpress/dx-react-grid-bootstrap4'
import Skeleton from "react-loading-skeleton";


export interface providerInterface {
  value: any,
  row: any
}

interface Props {
  rows?: any,
  columns?: any,
  toolbar?: any,
  loading?: boolean,
  search?: any,
  selection?: any,
  sorting?: any,
  paging?: any,
  table?: any,
  tableHeaderRow?: any,
  defaultColumnWidths?: any,
  showColumnResizing?: any,
  providers?: any,
  filters?: any,
  height?: any,
  groupBy?: any,
  rowDetail?: any
}

const DataGrid: React.FC<Props> = ({
                                     rows = [],
                                     columns = [],
                                     toolbar,
                                     loading = false,
                                     search,
                                     selection,
                                     sorting,
                                     paging,
                                     table,
                                     tableHeaderRow,
                                     defaultColumnWidths,
                                     showColumnResizing,
                                     providers = [],
                                     filters,
                                     height,
                                     groupBy,
                                     rowDetail,
                                     ...rest
                                   }) => {


  return (
    loading
      ? <div className='px-2 py-5'>
        <Skeleton count={1} height={50} className='my-2'/>
      </div>
      : <>
        <Grid
          rows={rows}
          columns={columns}
          {...rest}
        >
          {providers.length > 0
            ? providers.map((provider: any) => (
                <DataTypeProvider
                  key={provider.for}
                  {...provider}
                />
              )
            ) : null}

          <SelectionState {...selection} />
          <SearchState {...search} />
          <SortingState {...sorting} />

          {groupBy && <GroupingState
            {...groupBy.groupingState}
          />}

          {groupBy && <IntegratedGrouping/>}

          <PagingState {...paging} />

          {filters ? <FilteringState filters={filters}/> : null}

          {(search && !search.onValueChange) || (filters) ? <IntegratedFiltering columnExtensions={filters}/> : null}
          {selection && selection.showSelectAll ? <IntegratedSelection/> : null}
          {sorting && !sorting.onSortingChange ? <IntegratedSorting/> : null}
          {paging && !paging.onCurrentPageChange ? <IntegratedPaging/> : <CustomPaging {...paging} />}

          {rowDetail && <RowDetailState
            defaultExpandedRowIds={Array.isArray(rowDetail.defaultExpanded) && rowDetail.defaultExpanded.length > 0 ? rowDetail.defaultExpanded : []}
          />}

          <Table
            {...table}
          />
          {(showColumnResizing && defaultColumnWidths.length > 0)
            ? <TableColumnResizing defaultColumnWidths={defaultColumnWidths}/> : null}
          {height ? <VirtualTable height={height}/> : null}
          <TableHeaderRow
            showSortingControls={sorting && sorting.showSortingControls}
            {...tableHeaderRow}
          />

          {rowDetail && <TableRowDetail
            contentComponent={(el) => rowDetail.callback(el)}
          />}

          {(search || toolbar) && <Toolbar/>}
          {search && <SearchPanel/>}
          {selection && <TableSelection {...selection} />}
          {groupBy && <TableGroupRow {...groupBy.tableGroupRow} />}
          {paging && <PagingPanel {...paging} />}
        </Grid>
      </>
  )
}

DataGrid.defaultProps = {
  showColumnResizing: false,
  defaultColumnWidths: []
}

DataGrid.propTypes = {
  height: PropTypes.number,
  rows: PropTypes.array,
  columns: PropTypes.array,
  loading: PropTypes.bool,
  providers: PropTypes.array,
  filters: PropTypes.array,
  groupBy: PropTypes.object,
  showColumnResizing: PropTypes.bool,
  defaultColumnWidths: PropTypes.array,
  search: PropTypes.object,
  toolbar: PropTypes.any,
  selection: PropTypes.object,
  table: PropTypes.object,
  tableHeaderRow: PropTypes.object,
  sorting: PropTypes.object,
  paging: PropTypes.object,
  rowDetail: PropTypes.object
}

export default DataGrid
