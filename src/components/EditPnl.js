import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ConfirmButton } from '../styles/components';

class EditPnl extends React.Component {
  updateSheetValues = () => {
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}:batchUpdate`, {
      method: "POST",
      headers: {
        "Content-Types": "application/json",
        //update this token with yours. 
        // Authorization: `Bearer ${ACCESS_TOKEN}`,
           },
           body: JSON.stringify({

            requests: [{
              repeatCell: {
                range: {
                  startColumnIndex: 0,
                  endColumnIndex: 1,
                  startRowIndex: 0,
                  endRowIndex: 1,
                  sheetId: 0
                },
                cell: {
                   userEnteredValue: {
                     "numberValue": 10
                   },
                },
                fields: "*"
              }
            }]

          })
        })
      }

      render() {
        return (
            <div>
                <ConfirmButton onClick={this.updateSheetValues}>Edit PNL</ConfirmButton>
            </div>
        );
         
      }
}

export default EditPnl