import React, { useRef, useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import { spreadsheetsValuesGet } from '../../actions/spreadsheetsValuesGet';
import ComboBox from '../../utils/ComboBox';


// import PinkPagination from '../../utils/Pagination';
import { Table, CategoryCell } from '../../styles/components';


const Category = ({ thisSpreadsheetId }) => {
  const dispatch = useDispatch();
  const sheet = useSelector((state) => state.sheetsReducer[thisSpreadsheetId]);
  const accessToken = useSelector((state) => state.oauthReducer.access_token);
  const [categoryDisplay, setCategoryDisplay] = useState('all');
  const newCategoryKey = useRef(0);


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
              labelPlacement="top"
            />
            <FormControlLabel
              value="3"
              control={<Radio />}
              label="Uncategorized"
              onChange={() => handleDisplayClick(3)}
              labelPlacement="top"
            />
            <FormControlLabel
              value="4"
              control={<Radio />}
              label="Categorized"
              onChange={() => handleDisplayClick(4)}
              labelPlacement="top"
            />
          </RadioGroup>
        </FormControl>

      </div>
      <div className="tableDiv">
        <Table>
          <tbody>
            <tr><th>Date</th><th>Description</th><th>Amount</th><th>Category</th></tr>
            {sheetItems.map((row, i) => {
              if (i < 2) {
                return false;
              }
              if (categoryDisplay === 'all') {
                return (
                  <tr id={`row_${i}`} key={newCategoryKey.current++}>
                    {row.map((column, j) => {
                      if (j <= 2) {
                        return (
                          <CategoryCell
                            id={`row_${i}-column_${j}`}
                            key={newCategoryKey.current++}
                          >

                            {(() => {
                              if (j === 1) {
                                if (column.length < 21) {
                                  return (
                                    <Tooltip title={column} arrow>
                                      <Button>{column}</Button>
                                    </Tooltip>
                                  );
                                }
                                return (
                                  <Tooltip title={column} arrow>
                                    <Button>{column.slice(0, 21)}...</Button>
                                  </Tooltip>
                                );
                              }
                              return (
                                column
                              );
                            })()}

                          </CategoryCell>
                        );
                      }
                      return false;
                    })}
                    <td>
                      <ComboBox
                        spreadsheetId={thisSpreadsheetId}
                        rowId={i}
                        rowLength={row.length}
                        categoryData={row[3]}
                      />
                    </td>
                  </tr>
                );
              } if (row.length === categoryDisplay) {
                return (
                  <tr id={`row_${i}`} key={newCategoryKey.current++}>
                    {row.map((column, j) => {
                      if (j <= 2) {
                        return (
                          <CategoryCell
                            id={`row_${i}-column_${j}`}
                            key={newCategoryKey.current++}
                          >

                            {(() => {
                              if (j === 1) {
                                if (column.length < 21) {
                                  return (
                                    <Tooltip title={column} arrow>
                                      <Button>{column}</Button>
                                    </Tooltip>
                                  );
                                }
                                return (
                                  <Tooltip title={column} arrow>
                                    <Button>{column.slice(0, 21)}...</Button>
                                  </Tooltip>
                                );
                              }
                              return (
                                column
                              );
                            })()}

                          </CategoryCell>
                        );
                      }
                      return false;
                    })}
                    <td>
                      <ComboBox
                        spreadsheetId={thisSpreadsheetId}
                        rowId={i}
                        rowLength={row.length}
                        categoryData={row[3]}
                      />
                    </td>
                  </tr>
                );
              }
              return false;
            }
            )}
          </tbody>
        </Table>


        <br />
      </div>
      <br />
      {/* <PinkPagination /> */}
      <style>{
        `

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
          padding-top: 8px;
          margin-bottom: 8px;
          border-top: 1px solid rgba(85, 85, 85, .7);
          border-bottom: 1px solid rgba(85, 85, 85, .7);
          text-align: center;
        }

        .displayText {
          position: relative;
          top: -3px;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.5;
          color: #555555;
          padding-bottom: 9px;
        }

        .MuiAutocomplete-popper {
          width: 350px !important;
        }

        .MuiInputBase-adornedEnd {
          position: relative;
          bottom: -1px;
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






        `
      }
      </style>
    </div>
  );
};

export default Category;
