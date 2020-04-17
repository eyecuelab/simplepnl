import * as types from '../constants/ActionTypes';

// =====

export const setToken = (payload) => ({
  type: types.SET_TOKEN,
  payload,
});

// =====

export const loadCSV = (payload) => ({
  type: types.LOAD_CSV,
  payload,
});

// =====

export const driveRequestReports = () => ({
  type: types.DRIVE_REQUEST_REPORTS,
});

export const driveGetReportsFailure = (error) => ({
  type: types.DRIVE_GET_REPORTS_FAILURE,
  error,
});

export const driveGetReportsSuccess = (reports) => ({
  type: types.DRIVE_GET_REPORTS_SUCCESS,
  reports,
});

export const makeDriveApiCall = (props) => (dispatch) => {
  dispatch(driveRequestReports);
  return fetch('https://www.googleapis.com/drive/v3/files?orderBy=name%20desc&pageSize=1000&q=name%20contains%20%27SimplePNL%3A%27%20and%20mimeType%20%3D%20%27application%2Fvnd.google-apps.spreadsheet%27', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${props}`,
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then(
      (jsonifiedResponse) => {
        dispatch(driveGetReportsSuccess(jsonifiedResponse.files));
      })
    .catch((error) => {
      dispatch(driveGetReportsFailure(error));
    });
};

// =====

export const sheetsPostCreate = () => ({
  type: types.SHEETS_POST_CREATE,
});

export const sheetsPostCreateFailure = (error) => ({
  type: types.SHEETS_POST_CREATE_FAILURE,
  error,
});

export const sheetsPostCreateSuccess = (reports) => ({
  type: types.SHEETS_POST_CREATE_SUCCESS,
  reports,
});

export const driveNewSheetCreated = (reports) => ({
  type: types.DRIVE_NEW_SHEET_CREATED,
  reports,
});

export const makeSheetsApiPost = (props) => (dispatch) => {
  // TEMPORARY NAMING CONVENTION UNTIL PROPS ARE CORRECTLY PASSED!
  const temp = new Date();
  dispatch(sheetsPostCreate);
  return fetch('https://sheets.googleapis.com/v4/spreadsheets?alt=json', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${props}`,
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      properties: {
        title: `SimplePnL: ${temp.toISOString().slice(0, 10)} ${temp.getHours()}:${temp.getMinutes()}`,
      },
    }),
  })
    .then((response) => response.json())
    .then(
      (jsonifiedResponse) => {
        console.log('actions/index/jsonifiedResponse', jsonifiedResponse);
        dispatch(sheetsPostCreateSuccess(jsonifiedResponse));
        dispatch(driveNewSheetCreated(jsonifiedResponse));
      })
    .catch((error) => {
      dispatch(sheetsPostCreateFailure(error));
    });
};
