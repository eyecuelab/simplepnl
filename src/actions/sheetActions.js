import * as types from '../constants/ActionTypes';

export const sheetsPostUpdate = () => ({
  type: types.DRIVE_REQUEST_REPORTS,
});

export const sheetsPostUpdateSuccess = (error) => ({
  type: types.DRIVE_GET_REPORTS_FAILURE,
  error,
});

export const sheetsPostUpdateFailure = (reports) => ({
  type: types.DRIVE_GET_REPORTS_SUCCESS,
  reports,
});

export const makeSheetsApiPost = (props) => (dispatch) => {
  dispatch(sheetsPostUpdate);
  return fetch('https://sheets.googleapis.com/v4/spreadsheets?alt=json', {
    method: 'POST',
    headers: {
      'Content-Types': 'application/json',
      Authorization: `Bearer ${props.accessToken}`,
    },
    body: JSON.stringify({
      requests: [
        {
          insertRange: {
            range: {
              startRowIndex: 0,
              endRowIndex: 1,
              sheetId: 'string',
            },
            shiftDimension: 'ROWS',
          },
        },
        {
          pasteData: {
            data: 'Date, Description, Amount, Category',
            type: 'PASTE_NORMAL',
            delimiter: ',',
            coordinate: {
              sheetId: 'string',
              rowIndex: 0,
            },
          },
          // fields: '*',
        },
      ],
    }),
  })

    .then((response) => response.json())
    .then(
      (jsonifiedResponse) => {
        dispatch(sheetsPostUpdateSuccess(jsonifiedResponse));
      })
    .catch((error) => {
      dispatch(sheetsPostUpdateFailure(error));
    });
};


// function addEventData(auth) {
//   var sheets = google.sheets('v4');
//   sheets.spreadsheets.values.append({
//     auth: auth,
//     spreadsheetId: spreadsheetId,
//     range: 'Sheet1!A:B',
//     valueInputOption:'RAW',
//     insertDataOption:'INSERT_ROWS',
//     alt:'json',
//     resource:{
//       values:[['xoxo', '12']]
//     }
//   },

//   function(err, response){
//     if(err){
//       console.log('The api returned an error:'+err);
//       return
//     }
//     console.log(response);

//   })
// }

// appendCells: {
//   sheetId: 2063764471,
//   fields: '*',
//   rows: [{
//     values: [{ // First Row
//       userEnteredValue: {stringValue: "first row"}
//     }, {
//       userEnteredValue: {numberValue: 2}
//     }, {
//       userEnteredValue: {numberValue: 3}
//     }]
//   }]
// }});
