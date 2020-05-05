import * as types from '../constants/ActionTypes';

export const spreadsheetsValuesGetStart = () => ({
  type: types.SPREADSHEETS_VALUES_GET_START,
});

export const spreadsheetsValuesGetFailure = (error) => ({
  type: types.SPREADSHEETS_VALUES_GET_FAILURE,
  error,
});

export const spreadsheetsValuesGetSuccess = (reports) => ({
  type: types.SPREADSHEETS_VALUES_GET_SUCCESS,
  reports,
});

export const spreadsheetsValuesGet = (props) => (dispatch) => {
  const { thisSpreadsheetId } = props;
  const { accessToken } = props;

  dispatch(spreadsheetsValuesGetStart());
  return fetch(`https://sheets.googleapis.com/v4/spreadsheets/${thisSpreadsheetId}/values/a1%3Ad4999`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((jsonifiedResponse) => {
      const payload = {
        jsonifiedResponse,
        thisSpreadsheetId,
      };
      dispatch(spreadsheetsValuesGetSuccess(payload));
      return jsonifiedResponse;
    })
    .catch((error) => {
      dispatch(spreadsheetsValuesGetFailure(error));
    });
};
