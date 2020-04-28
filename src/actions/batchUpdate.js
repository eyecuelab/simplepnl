import * as types from '../constants/ActionTypes';
import { profitAndLossSummary } from '../constants/profitAndLossSummary';

export const sheetsPostUpdate = () => ({
  type: types.SHEETS_POST_UPDATE,
});

export const sheetsPostUpdateFailure = (error) => ({
  type: types.SHEETS_POST_UPDATE_FAILURE,
  error,
});

export const sheetsPostUpdateSuccess = (reports) => ({
  type: types.SHEETS_POST_UPDATE_SUCCESS,
  reports,
});

export const batchUpdate = (props) => (dispatch) => {
  const { spreadsheetId } = props;
  // const { accessToken } = props;
  const { csvAmount } = props;
  const csvIndexOfAmount = csvAmount.split('_')[1];
  const { csvDate } = props;
  const csvIndexOfDate = csvDate.split('_')[1];
  const { csvDescription } = props;
  const csvIndexOfDescription = csvDescription.split('_')[1];
  // const { csvHeader } = props;
  const { csvRawData } = props;


  const { title } = props;
  const realFirstRow = [
    'SimplePnL',
    (title.split(': ')[1].split(' [')[0]),
    '',
    '=(COUNTA(D3:D999)/COUNTA(A3:A999))',
  ];

  const transactionValues = csvRawData.map((x, index) => {
    const newRow = [];
    const oldRow = x.data;

    const tempRandomNumber = Math.round((Math.random() * 3) + 1);

    newRow.push(oldRow[csvIndexOfDate]);
    newRow.push(oldRow[csvIndexOfDescription]);
    newRow.push(oldRow[csvIndexOfAmount]);

    if (index === 0) {
      newRow.push('Category');
    } else if (index % tempRandomNumber === 0) {
      newRow.push('');
    } else {
      newRow.push('');
    }

    // oldRow.splice(csvIndexOfDate, 1)
    // oldRow.splice(csvIndexOfDescription, 1)
    // oldRow.splice(csvIndexOfAmount, 1)
    // const array3 = newRow.concat(oldRow)

    return newRow;
  });

  transactionValues.unshift(realFirstRow);


  dispatch(sheetsPostUpdate());
  return fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values:batchUpdate?alt=json`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${props.accessToken}`,
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      data: [
        {
          range: 'Transactions!A1',
          values: transactionValues,
        },
        {
          range: 'Profit & Loss Summary!A1',
          values: profitAndLossSummary,
        },
      ],
      valueInputOption: 'USER_ENTERED',
      includeValuesInResponse: 'true',
    }),

    requests: [
      {
        autoResizeDimensions: {
          dimensions: {
            sheetId: 0,
            dimension: 'COLUMNS',
            startIndex: 0,
            endIndex: 5,
          },
        },
      },
    ],

  })
    .then((response) => response.json())
    .then(
      (jsonifiedResponse) => {
        dispatch(sheetsPostUpdateSuccess(jsonifiedResponse));
        return jsonifiedResponse;
      })
    .catch((error) => {
      dispatch(sheetsPostUpdateFailure(error));
    });
};
