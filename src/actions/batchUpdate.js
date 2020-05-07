import * as types from '../constants/ActionTypes';
import { profitAndLossSummary } from '../constants/profitAndLossSummary';

export const sheetsPostUpdateStart = () => ({
  type: types.SHEETS_POST_UPDATE_START,
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
  const { csvAmount } = props;
  const csvIndexOfAmount = csvAmount.split('_')[1];
  const { csvAmountDebit } = props;
  const csvIndexOfAmountDebit = csvAmountDebit.split('_')[1];
  const { csvDate } = props;
  const csvIndexOfDate = csvDate.split('_')[1];
  const { csvDescription } = props;
  const csvIndexOfDescription = csvDescription.split('_')[1];
  const { csvRawData } = props;
  const { title } = props;

  const realFirstRow = [
    'SimplePnL',
    (title.split(': ')[1].split(' [')[0]),
    '',
    '=(COUNTA(D3:D4999)/COUNTA(A3:A4999))',
  ];

  const transactionValues = csvRawData.map((x, index) => {
    const oldRow = x.data;
    const newRow = [];

    // COLUMN 0 (DATE):
    newRow.push(oldRow[csvIndexOfDate]);
    // COLUMN 1 (DESCRIPTION):
    newRow.push(oldRow[csvIndexOfDescription]);

    // COLUMN 2 (AMOUNT):
    let newAmountCell;
    if (csvIndexOfAmountDebit === 'none') {
      newAmountCell = `$${oldRow[csvIndexOfAmount]}`;
      newRow.push(newAmountCell);
    } else if (index === 0) {
      newAmountCell = 'Amount';
      newRow.push(newAmountCell);
    } else {
      // newAmountCell = oldRow[csvIndexOfAmount] === '' ? `$${parseFloat(Math.abs(oldRow[csvIndexOfAmountDebit]) * -1.00).toFixed(2)}` : `$${oldRow[csvIndexOfAmount]}`;

      // TEST
      newAmountCell = oldRow[csvIndexOfAmount] === '' ? `$${parseFloat(Math.abs(oldRow[csvIndexOfAmountDebit]) * -1.00).toFixed(2)}` : `$${parseFloat(Math.abs(oldRow[csvIndexOfAmount]) * 1.00).toFixed(2)}`;


      newRow.push(newAmountCell);
    }

    // COLUMN 3 (category):
    const tempRandomNumber = Math.round((Math.random() * 3) + 1);
    if (index === 0) {
      newRow.push('Category');
    } else if (index % tempRandomNumber === 0) {
      newRow.push('');
    } else {
      newRow.push('');
    }

    return newRow;
  });

  transactionValues.unshift(realFirstRow);

  dispatch(sheetsPostUpdateStart());
  return fetch(`https://sheets.googleapis.com/v4/spreadsheets/${props.spreadsheetId}/values:batchUpdate?alt=json`, {
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
