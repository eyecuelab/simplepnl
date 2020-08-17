import * as types from '../constants/ActionTypes';

export const sheetCategoryUpdateStart = () => ({
  type: types.SHEET_CATEGORY_UPDATE_START,
});

export const sheetCategoryUpdateFailure = (error) => ({
  type: types.SHEET_CATEGORY_UPDATE_FAILURE,
  error,
});

export const sheetCategoryUpdateSuccess = (reports) => ({
  type: types.SHEET_CATEGORY_UPDATE_SUCCESS,
  reports,
});

export const batchUpdateCategory = (props) => (dispatch) => {
  const { spreadsheetId } = props;
  const { accessToken } = props;

  const { rowId } = props;
  const data = [[props.data]];

  dispatch(sheetCategoryUpdateStart());
  return fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values:batchUpdate?alt=json`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      data: [
        {
          range: `Transactions!d${rowId + 1}`,
          values: data,
        },
      ],
      valueInputOption: 'USER_ENTERED',
    }),
  })
    .then((response) => response.json())
    .then((jsonifiedResponse) => {
      const successPayload = {
        jsonifiedResponse,
        data,
      };
      dispatch(sheetCategoryUpdateSuccess(successPayload));
      return jsonifiedResponse;
    })
    .catch((error) => {
      dispatch(sheetCategoryUpdateFailure(error));
    });
};
