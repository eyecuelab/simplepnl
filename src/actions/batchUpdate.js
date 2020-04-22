import * as types from '../constants/ActionTypes';

export const sheetPostUpdate = () => ({
  type: types.SHEETS_POST_UPDATE,
});

export const driveGetReportsFailure = (error) => ({
  type: types.SHEETS_POST_UPDATE_FAILURE,
  error,
});

export const driveGetReportsSuccess = (reports) => ({
  type: types.SHEETS_POST_UPDATE_SUCCESS,
  reports,
});

export const batchUpdate = (props) => (dispatch) => {
  const { spreadsheetId } = props;

  dispatch(sheetsPostUpdate)
  return fetch('https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values:batchUpdate?alt=json', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${props.accessToken}`,
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({

        data: [{
          values: [
            [
              'SimplePnL',
              '',
              '',
              '=(COUNTA(D3:D999)/COUNTA(A3:A999))',
            ],
            [],
            [
              'Hello Muddah,',
              'hello Fadduh.',
              'Here I am at',
              'Camp Granada.',
            ],
            [
              'Camp is very',
              'entertaining.',
              "And they say we'll have some fun if it stops raining.",
            ],
          ],
          range: 'a1',
        }, ],
        valueInputOption: 'USER_ENTERED',

        //   requests: [
        //     {
        //     insertRange: {
        //      range: {
        //       startRowIndex: 0,
        //       endRowIndex: 1,
        //       sheetId: string,
        //     },
        //      shiftDimension: "ROWS"
        //     }
        //   },
        //   {
        //      pasteData: {
        //       data: "Date, Description, Amount, Category",
        //       type: "PASTE_NORMAL",
        //       delimiter: ",",
        //       coordinate: {
        //         sheetId: string,
        //         rowIndex: 0,
        //         },
        //       },
        //       // fields: '*',
        //   },
        //  ],
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