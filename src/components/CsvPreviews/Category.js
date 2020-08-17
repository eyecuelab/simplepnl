import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import ComboBox from '../../utils/ComboBox';
import { spreadsheetsValuesGet } from '../../actions/spreadsheetsValuesGet';

function createData(date, description, amount, category, sheetIndex) {
  const jsDate = new Date(date);
  const currency = Number(amount.replace(/[^0-9-.]+/g, ''));
  return { jsDate, description, currency, category, sheetIndex };
}

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'asc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'jsDate',
    alignment: 'left',
    disablePadding: true,
    label: 'Date',
  },
  { id: 'description', alignment: 'center', disablePadding: true, label: 'Description' },
  { id: 'currency', alignment: 'right', disablePadding: true, label: 'Amount' },
  { id: 'category', alignment: 'right', disablePadding: true, label: 'Category' },
];

function EnhancedTableHead(props) {
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.alignment}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
/* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
  table: {
    // minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

function EnhancedTable(sheetItems, thisSpreadsheetId, categoryDisplay) {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('jsDate');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);
  const [sheetData, setSheetData] = React.useState(sheetItems);

  useEffect(() => {
    setSheetData(sheetItems);
  }, [sheetItems]);

  /* eslint-disable no-unused-vars */
  const rows = [];
  const rows2 = sheetData?.map((x, index) => {
    if (index < 2) {
      return false;
    }
    if (categoryDisplay === 'all' || categoryDisplay === x.length) {
      return rows.push(createData(x[0], x[1], x[2], x[3], index));
    }
    return false;
  });
  /* eslint-enable no-unused-vars */

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value, 10);
    setPage(0);
  };

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <TablePagination
        rowsPerPageOptions={[25, 50, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
      <TableContainer>
        <Table
          className={classes.table}
          // stickyHeader="true"
          aria-labelledby="tableTitle"
          size="small"
          aria-label="enhanced table"
        >
          <EnhancedTableHead
            classes={classes}
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
            rowCount={rows.length}
          />
          <TableBody>
            {stableSort(rows, getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                const labelId = `enhanced-table-checkbox-${row.sheetIndex}`;
                return (
                  <TableRow
                    hover
                    tabIndex={-1}
                    key={row.sheetIndex}
                    // onClick={(event) => handleClick(event, row.date)}
                    // role="checkbox"
                    // aria-checked={isItemSelected}
                    // selected={isItemSelected}
                  >
                    <TableCell component="th" id={labelId} scope="row" padding="none" size="small">
                      {row.jsDate?.toLocaleString().split(',')[0]}
                    </TableCell>
                    <TableCell align="center" padding="none" size="small">
                      {row.description.length < 20 ? (
                        <Tooltip title={row.description} arrow>
                          <Button>{row.description}</Button>
                        </Tooltip>
                      ) : (
                        <Tooltip title={row.description} arrow>
                          <Button>{row.description.slice(0, 20)}...</Button>
                        </Tooltip>
                      )}
                    </TableCell>
                    <TableCell align="right" padding="none" size="small">
                      {Math.sign(row.currency) === -1
                        ? `-$${row.currency.toFixed(2).substr(1)}`
                        : `$${row.currency.toFixed(2)}`}
                    </TableCell>
                    <TableCell align="center" padding="default" size="small">
                      <ComboBox
                        spreadsheetId={thisSpreadsheetId}
                        rowId={row.sheetIndex}
                        rowLength={row.length}
                        categoryData={row.category}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
            {emptyRows > 0 && (
              <TableRow style={{ height: 1 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

const Category = ({ thisSpreadsheetId }) => {
  const dispatch = useDispatch();
  const sheet = useSelector((state) => state.sheetsReducer[thisSpreadsheetId]);
  const accessToken = useSelector((state) => state.oauthReducer.access_token);
  const [categoryDisplay, setCategoryDisplay] = useState('all');

  function handleDisplayClick(num) {
    setCategoryDisplay(num);
  }

  useEffect(() => {
    if (!sheet) {
      dispatch(spreadsheetsValuesGet({ accessToken, thisSpreadsheetId }));
    }
  }, [dispatch, accessToken, thisSpreadsheetId, sheet]);

  const sheetItems = useMemo(() => sheet?.values || [], [sheet]);

  return (
    <div>
      <div className="displayOptions">
        <span className="displayText">Display: </span>

        <FormControl component="fieldset">
          <RadioGroup row aria-label="position" name="position" defaultValue="all">
            <FormControlLabel
              value="all"
              control={<Radio />}
              label="All"
              onChange={() => handleDisplayClick('all')}
              labelPlacement="right"
            />
            <FormControlLabel
              value="3"
              control={<Radio />}
              label="Uncategorized"
              onChange={() => handleDisplayClick(3)}
              labelPlacement="right"
            />
            <FormControlLabel
              value="4"
              control={<Radio />}
              label="Categorized"
              onChange={() => handleDisplayClick(4)}
              labelPlacement="right"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <div>
        {sheetItems
          ? EnhancedTable(sheetItems, thisSpreadsheetId, categoryDisplay)
          : 'There was an error gathering your data.'}
      </div>

      <br />

      <style>
        {`
        .PrivateSwitchBase-root-21 {
          padding: 0px;
        }

        .MuiFormControlLabel-root {
          margin-bottom: 0;
        }

        .MuiButton-root  {
          position: relative;
          bottom: -3px;
          color: #555555;
          padding: 0px 5px;
          background-color: rgba(233, 245, 251, 0.20);
          box-shadow: -1px -1px 2px rgba(85, 85, 85, 0.20);
          border-radius: 5px;
        }

        .MuiTooltip-tooltip {
          background-color: rgba(233, 245, 251, 0.97);
          color: black;
          font-size: 14px;
          border-radius: 5px;
          box-shadow: 2px 2px 3px rgba(85, 85, 85, 0.5);

        }

        .displayOptions {
          // padding-top: 8px;
          border-top: 1px solid rgba(85, 85, 85, .7);
          // margin-bottom: 8px;
          // border-bottom: 1px solid rgba(85, 85, 85, .7);
          text-align: center;
        }

        .displayText {
          position: relative;
          top: 6px;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.5;
          color: #555555;
          // padding-bottom: 9px;
        }

        .MuiAutocomplete-popper {
          width: 350px !important;
        }

        .MuiInputBase-adornedEnd {
          position: relative;
          bottom: -1px;
        }

        .MuiTableContainer-root {
          overflow-x: hidden;
        }

        // SELECT CATEGORY
        .MuiInputLabel-root { text-align: center; width: 100px;}
        .MuiFormLabel-root { text-align: center; width: 100px;}
        .MuiInputLabel-formControl { text-align: center; width: 100px;}
        .MuiInputLabel-animated { text-align: center; width: 100px;}

        // SELECT CATEGORY LABEL
        // .MuiInputLabel-root {text-align: left;}
        // .MuiFormLabel-root {text-align: left;}
        // .MuiInputLabel-formControl {text-align: left;}
        // .MuiInputLabel-animated {text-align: left;}
        // .MuiFormLabel-filled {text-align: left;}
        .MuiInputLabel-shrink {text-align: left;}

        `}
      </style>
    </div>
  );
};

export default Category;
