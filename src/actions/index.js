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

export const setCsvHeader = (payload) => ({
  type: types.SET_CSV_HEADER,
  payload,
});

export const setCsvDate = (payload) => ({
  type: types.SET_CSV_DATE,
  payload,
});

export const setCsvDescription = (payload) => ({
  type: types.SET_CSV_DESCRIPTION,
  payload,
});

export const setCsvAmount = (payload) => ({
  type: types.SET_CSV_AMOUNT,
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
  return fetch('https://www.googleapis.com/drive/v3/files?orderBy=name%20desc&pageSize=1000&q=name%20contains%20%27SimplePNL%3A%27%20and%20mimeType%20%3D%20%27application%2Fvnd.google-apps.spreadsheet%27andtrashed%3Dfalse', {
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
  // console.log('makeSheetsApiPost props: ', props);


  // TITLE IS TEMPORARY NAMING CONVENTION UNTIL PROPS ARE CORRECTLY PASSED!
  const temp1 = new Date();
  const temp2 = temp1.toISOString();
  dispatch(sheetsPostCreate);
  return fetch('https://sheets.googleapis.com/v4/spreadsheets?alt=json', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${props.accessToken}`,
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      properties: {
        title: `SimplePnL: ${temp2.slice(0, 10)} ${temp1.toString().slice(16, 21)}`,
      },
      sheets: [
        {
          properties: {
            title: 'Transactions',
            gridProperties: {
              columnCount: 4,
              frozenRowCount: 2,
            },
            tabColor: {
              red: 1.0,
              green: 0.5,
              blue: 0.5,
            },
          },
        },
        {
          properties: {
            title: 'Profit & Loss Summary',
            gridProperties: {
              columnCount: 2,
              frozenRowCount: 2,
            },
            tabColor: {
              red: 0.5,
              green: 0.5,
              blue: 1.0,
            },
          },
        },
        {
          properties: {
            title: 'Key',
            gridProperties: {
              columnCount: 2,
              frozenRowCount: 2,
            },
            tabColor: {
              red: 0.5,
              green: 1.0,
              blue: 0.5,
            },
          },
        },
      ],
    }),
  })
    .then((response) => response.json())
    .then(
      (jsonifiedResponse) => {
        dispatch(sheetsPostCreateSuccess(jsonifiedResponse));
        dispatch(driveNewSheetCreated(jsonifiedResponse));
      })
    .catch((error) => {
      dispatch(sheetsPostCreateFailure(error));
    });
};
