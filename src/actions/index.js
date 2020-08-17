import * as types from '../constants/ActionTypes';

import { batchUpdate } from './batchUpdate';

// =====

export const setToken = (payload) => ({
  type: types.SET_TOKEN,
  payload,
});

export const agreeToEula = (payload) => ({
  type: types.AGREE_TO_EULA,
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
export const shrinkCsvToHeader = (payload) => ({
  type: types.SHRINK_CSV_TO_HEADER,
  payload,
});

export const setCsvName = (payload) => ({
  type: types.SET_CSV_NAME,
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
export const setCsvAmountDebit = (payload) => ({
  type: types.SET_CSV_AMOUNT_DEBIT,
  payload,
});

// =====

export const getDriveFolderStart = () => ({
  type: types.GET_DRIVE_FOLDER_START,
});

export const getDriveFolderSuccess = (folder) => ({
  type: types.GET_DRIVE_FOLDER_SUCCESS,
  folder,
});

export const getDriveFolderFailure = (error) => ({
  type: types.GET_DRIVE_FOLDER_FAILURE,
  error,
});

export const getDriveFolder = (props) => (dispatch) => {
  dispatch(getDriveFolderStart());
  return fetch(
    'https://www.googleapis.com/drive/v3/files?orderBy=modifiedTime%20desc&pageSize=100&q=name%20contains%20%27SimplePNL%20from%20MKBKllc%27and%20mimeType%20%3D%20%27application%2Fvnd.google-apps.folder%27andtrashed%3Dfalse',
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${props}`,
        'Content-type': 'application/json; charset=UTF-8',
      },
    }
  )
    .then((response) => response.json())
    .then((jsonifiedResponse) => {
      if (jsonifiedResponse.files.length < 1) {
        dispatch(postDriveFolder(props));
      } else {
        dispatch(getDriveFolderSuccess(jsonifiedResponse.files[0].id));
      }
      return jsonifiedResponse;
    })
    .catch((error) => {
      dispatch(getDriveFolderFailure(error));
    });
};

// =====

export const postDriveFolderStart = () => ({
  type: types.POST_DRIVE_FOLDER_START,
});

export const postDriveFolderSuccess = (folder) => ({
  type: types.POST_DRIVE_FOLDER_SUCCESS,
  folder,
});

export const postDriveFolderFailure = (error) => ({
  type: types.POST_DRIVE_FOLDER_FAILURE,
  error,
});

export const postDriveFolder = (props) => (dispatch) => {
  dispatch(postDriveFolderStart());
  return fetch('https://www.googleapis.com/drive/v3/files/', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${props}`,
      'Content-type': 'application/json; charset=UTF-8',
    },

    body: JSON.stringify({
      name: 'SimplePNL from MKBKllc',
      mimeType: 'application/vnd.google-apps.folder',
    }),
  })
    .then((response) => response.json())
    .then((jsonifiedResponse) => {
      dispatch(getDriveFolderSuccess(jsonifiedResponse.id));
      dispatch(postDriveFolderSuccess(jsonifiedResponse.id));
      return jsonifiedResponse.id;
    })
    .catch((error) => {
      dispatch(postDriveFolderFailure(error));
    });
};

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
  dispatch(driveRequestReports());
  return fetch(
    'https://www.googleapis.com/drive/v3/files?orderBy=modifiedTime%20desc&pageSize=1000&q=name%20contains%20%27SimplePNL%3A%27%20and%20mimeType%20%3D%20%27application%2Fvnd.google-apps.spreadsheet%27andtrashed%3Dfalse',
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${props}`,
        'Content-type': 'application/json; charset=UTF-8',
      },
    }
  )
    .then((response) => response.json())
    .then((jsonifiedResponse) => {
      dispatch(driveGetReportsSuccess(jsonifiedResponse.files));
      return jsonifiedResponse.files;
    })
    .catch((error) => {
      dispatch(driveGetReportsFailure(error));
    });
};

// =====

export const sheetsRequestPercentage = () => ({
  type: types.SHEETS_REQUEST_PERCENTAGE,
});

export const sheetsGetPercentageFailure = (error) => ({
  type: types.SHEETS_GET_PERCENTAGE_FAILURE,
  error,
});

export const sheetsGetPercentageSuccess = (reports) => ({
  type: types.SHEETS_GET_PERCENTAGE_SUCCESS,
  reports,
});

export const makeSheetsFirstApiCall = (props) => (dispatch) => {
  const { accessToken } = props;
  const { folderId } = props;
  const {
    reports: { reports },
  } = props;
  const returnedTarget = reports.map((x) => x.id);

  returnedTarget.forEach((spreadsheetId) => {
    dispatch(sheetsRequestPercentage());
    return fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/d1`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((jsonifiedResponse) => {
        const { values } = jsonifiedResponse;
        let percentage;
        if (values) {
          const actual = (parseFloat(values) * 100).toFixed(0);
          percentage = actual;
        } else {
          percentage = 0;
        }
        const payload = {
          percentage,
          spreadsheetId,
        };
        dispatch(sheetsGetPercentageSuccess(payload));
        return payload;
      })
      .catch((error) => {
        dispatch(sheetsGetPercentageFailure(error));
      });
  });

  returnedTarget.forEach((spreadsheetId) =>
    fetch(`https://www.googleapis.com/drive/v3/files/${spreadsheetId}?addParents=${folderId}`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${props.accessToken}`,
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
  );
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
  const temp1 = new Date();
  const temp2 = temp1.toISOString();
  dispatch(sheetsPostCreate());
  return fetch('https://sheets.googleapis.com/v4/spreadsheets?alt=json', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${props.accessToken}`,
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      properties: {
        title: `SimplePNL: ${props.csvName} [created ${temp2.slice(0, 10)} ${temp1.toString().slice(16, 21)}]`,
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
              red: 0.92,
              green: 0.28,
              blue: 0.36,
            },
          },
        },
        {
          properties: {
            title: 'Profit & Loss Summary',
            gridProperties: {
              columnCount: 3,
              rowCount: 48,
              frozenRowCount: 2,
            },
            tabColor: {
              red: 0.0,
              green: 0.63,
              blue: 0.86,
            },
          },
        },
        {
          properties: {
            title: 'Key',
            gridProperties: {
              columnCount: 2,
              rowCount: 35,
              frozenRowCount: 2,
            },
            tabColor: {
              red: 0.13,
              green: 0.13,
              blue: 0.13,
            },
          },
        },
      ],
    }),
  })
    .then((response) => response.json())
    .then((jsonifiedResponse) => {
      dispatch(driveNewSheetCreated(jsonifiedResponse));
      dispatch(sheetsPostCreateSuccess(jsonifiedResponse));
      const {
        properties: { title },
      } = jsonifiedResponse;
      const { spreadsheetId } = jsonifiedResponse;
      const { accessToken } = props;
      const { csvAmount } = props;
      const { csvAmountDebit } = props;
      const { csvDate } = props;
      const { csvDescription } = props;
      const { csvHeader } = props;
      const { csvRawData } = props;
      const payload2 = {
        title,
        spreadsheetId,
        accessToken,
        csvAmount,
        csvAmountDebit,
        csvDate,
        csvDescription,
        csvHeader,
        csvRawData,
      };
      dispatch(batchUpdate(payload2));
      return jsonifiedResponse;
    })
    .then((jsonifiedResponse) => {
      const { spreadsheetId } = jsonifiedResponse;

      const sheetIdTransactions = jsonifiedResponse.sheets[0].properties.sheetId;
      const sheetIdPNLS = jsonifiedResponse.sheets[1].properties.sheetId;

      return fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}:batchUpdate?alt=json`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${props.accessToken}`,
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
          requests: [
            {
              updateDimensionProperties: {
                range: {
                  sheetId: sheetIdTransactions,
                  dimension: 'COLUMNS',
                  startIndex: 0,
                  endIndex: 1,
                },
                properties: {
                  pixelSize: 100,
                },
                fields: 'pixelSize',
              },
            },
            {
              updateDimensionProperties: {
                range: {
                  sheetId: sheetIdTransactions,
                  dimension: 'COLUMNS',
                  startIndex: 1,
                  endIndex: 2,
                },
                properties: {
                  pixelSize: 400,
                },
                fields: 'pixelSize',
              },
            },
            {
              updateDimensionProperties: {
                range: {
                  sheetId: sheetIdTransactions,
                  dimension: 'COLUMNS',
                  startIndex: 2,
                  endIndex: 3,
                },
                properties: {
                  pixelSize: 100,
                },
                fields: 'pixelSize',
              },
            },
            {
              updateDimensionProperties: {
                range: {
                  sheetId: sheetIdTransactions,
                  dimension: 'COLUMNS',
                  startIndex: 3,
                  endIndex: 4,
                },
                properties: {
                  pixelSize: 300,
                },
                fields: 'pixelSize',
              },
            },
            {
              updateDimensionProperties: {
                range: {
                  sheetId: sheetIdPNLS,
                  dimension: 'COLUMNS',
                  startIndex: 0,
                  endIndex: 1,
                },
                properties: {
                  pixelSize: 300,
                },
                fields: 'pixelSize',
              },
            },
            {
              updateDimensionProperties: {
                range: {
                  sheetId: sheetIdPNLS,
                  dimension: 'COLUMNS',
                  startIndex: 1,
                  endIndex: 2,
                },
                properties: {
                  pixelSize: 100,
                },
                fields: 'pixelSize',
              },
            },
            {
              updateDimensionProperties: {
                range: {
                  sheetId: sheetIdPNLS,
                  dimension: 'COLUMNS',
                  startIndex: 2,
                  endIndex: 3,
                },
                properties: {
                  pixelSize: 75,
                },
                fields: 'pixelSize',
              },
            },
            {
              repeatCell: {
                range: {
                  sheetId: sheetIdPNLS,
                  startRowIndex: 0,
                  endRowIndex: 1,
                  startColumnIndex: 0,
                  endColumnIndex: 3,
                },
                cell: {
                  userEnteredFormat: {
                    backgroundColor: {
                      red: 0.92,
                      green: 0.28,
                      blue: 0.36,
                      alpha: 0.5,
                    },
                    borders: {
                      bottom: {
                        style: 'SOLID_THICK',
                        color: {
                          red: 0.1,
                          green: 0.1,
                          blue: 0.1,
                        },
                      },
                    },
                  },
                },
                fields: 'userEnteredFormat.backgroundColor, userEnteredFormat.borders',
              },
            },
            {
              repeatCell: {
                range: {
                  sheetId: sheetIdPNLS,
                  startRowIndex: 43,
                  endRowIndex: 48,
                  startColumnIndex: 0,
                  endColumnIndex: 3,
                },
                cell: {
                  userEnteredFormat: {
                    backgroundColor: {
                      red: 0.9,
                      green: 0.9,
                      blue: 0.9,
                      alpha: 0.9,
                    },
                  },
                },
                fields: 'userEnteredFormat.backgroundColor',
              },
            },
          ],
        }),
      });
    })

    .catch((error) => {
      dispatch(sheetsPostCreateFailure(error));
    });
};
