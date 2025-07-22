import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { visuallyHidden } from '@mui/utils';
import StatusLabel from './StatusLabel';

function createData(id, dateTime, status, type, buyerName, brand, department, title, meetingDate, participants) {
  return { id, dateTime, status, type, buyerName, brand, department, title, meetingDate, participants };
}

const rows = [
  createData(1, '2025-07-22 10:00 AM', 'Completed', 'Online', 'John Doe', 'Nike', 'Footwear', 'Summer Collection', '2025-07-25', 'Alice, Bob'),
  createData(2, '2025-07-21 03:30 PM', 'Upcoming`', 'Offline', 'Jane Smith', 'Adidas', 'Apparel', 'Winter Trends', '2025-07-26', 'Charlie, Dave'),
  createData(3, '2025-07-20 11:15 AM', 'Follow-up', 'Online', 'Tom Hardy', 'Puma', 'Accessories', 'New Launch', '2025-07-27', 'Eve, Frank'),
  createData(3, '2025-07-20 11:15 AM', 'Re-schedule', 'Online', 'Tom Hardy', 'Puma', 'Accessories', 'New Launch', '2025-07-27', 'Eve, Frank'),
  createData(3, '2025-07-20 11:15 AM', 'Overdue', 'Online', 'Tom Hardy', 'Puma', 'Accessories', 'New Launch', '2025-07-27', 'Eve, Frank'),
  createData(3, '2025-07-20 11:15 AM', 'In-progress', 'Online', 'Tom Hardy', 'Puma', 'Accessories', 'New Launch', '2025-07-27', 'Eve, Frank'),
  createData(3, '2025-07-20 11:15 AM', 'Ongoing', 'Online', 'Tom Hardy', 'Puma', 'Accessories', 'New Launch', '2025-07-27', 'Eve, Frank'),
  createData(3, '2025-07-20 11:15 AM', 'Draft', 'Online', 'Tom Hardy', 'Puma', 'Accessories', 'New Launch', '2025-07-27', 'Eve, Frank'),
  createData(3, '2025-07-20 11:15 AM', 'Archived', 'Online', 'Tom Hardy', 'Puma', 'Accessories', 'New Launch', '2025-07-27', 'Eve, Frank'),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) return -1;
  if (b[orderBy] > a[orderBy]) return 1;
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

const headCells = [
  { id: 'dateTime', numeric: false, disablePadding: true, label: 'Date and Time' },
  { id: 'status', numeric: false, disablePadding: false, label: 'Status' },
  { id: 'type', numeric: false, disablePadding: false, label: 'Type' },
  { id: 'buyerName', numeric: false, disablePadding: false, label: 'Buyer Name' },
  { id: 'brand', numeric: false, disablePadding: false, label: 'Brand' },
  { id: 'department', numeric: false, disablePadding: false, label: 'Dept' },
  { id: 'title', numeric: false, disablePadding: false, label: 'Title' },
  { id: 'meetingDate', numeric: false, disablePadding: false, label: 'Meeting Date' },
  { id: 'participants', numeric: false, disablePadding: false, label: 'Participants' },
  { id: 'actions', numeric: false, disablePadding: false, label: 'Actions' },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all rows' }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="left"
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id && (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              )}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default function BuyersTable() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('dateTime');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
    } else {
      setSelected([]);
    }
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      [...rows]
        .sort(getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [order, orderBy, page, rowsPerPage]
  );

  const isSelected = (id) => selected.includes(id);

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer>
          <Table sx={{ minWidth: 750 }} size={dense ? 'small' : 'medium'}>
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{ 'aria-labelledby': labelId }}
                      />
                    </TableCell>
                    <TableCell component="th" id={labelId} scope="row" padding="none">
                      {row.dateTime}
                    </TableCell>
                    <TableCell align="left">
                      <StatusLabel status={row.status}></StatusLabel>
                    </TableCell>
                    <TableCell align="left">{row.type}</TableCell>
                    <TableCell align="left">{row.buyerName}</TableCell>
                    <TableCell align="left">{row.brand}</TableCell>
                    <TableCell align="left">{row.department}</TableCell>
                    <TableCell align="left">{row.title}</TableCell>
                    <TableCell align="left">{row.meetingDate}</TableCell>
                    <TableCell align="left">{row.participants}</TableCell>
                    <TableCell align="left">Edit | Delete</TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={11} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </Box>
  );
}
