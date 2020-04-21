import React from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import { ConfirmButton } from '../styles/components';

class EditPnl extends React.Component {
  updateSheetValues = () => {
    fetch(`https://sheets.googleapis.com/v4/spreadsheets?alt=json`, {
      method: "POST",
      headers: {
        "Content-Types": "application/json",
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
                   userEnteredFormat: {
                     "textFormat": {
                         "bold": true
                     }
                   },
                },
                fields: "*"
              }
            }]

          })
        })
      }

      reqs = [
          {'repeatCell': {
            'range' : {'endRowIndex': 1},
            'cell': {'userEnteredFormat': {'textFormat': {'bold': True}}},
            'fields': 'userEnteredFormat/textFormat/bold'
          }},
      ]
    

      render() {
        return (
            <div>
                <ConfirmButton onClick={this.updateSheetValues}>Edit PNL</ConfirmButton>
            </div>
        );
         
      }
}

export default EditPnl