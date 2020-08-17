import constants from '../constants';

const { initialState, types } = constants;

export default (state = initialState.sheets, action) => {
  switch (action.type) {
    case types.SHEETS_POST_CREATE: {
      return { ...state, isLoading: true };
    }
    case types.SHEETS_POST_CREATE_SUCCESS: {
      const newSheet = {
        id: action.reports.spreadsheetId,
        kind: 'drive#file',
        mimeType: 'application/vnd.google-apps.spreadsheet',
        percentage: 0,
        name: action.reports.properties.title,
      };
      return { ...state, isLoading: false, sheets: newSheet };
    }
    case types.SHEETS_POST_CREATE_FAILURE: {
      return { ...state, isLoading: false, error: action.error };
    }
    case types.SHEETS_POST_UPDATE_START: {
      return { ...state, isLoading: true };
    }
    case types.SHEETS_POST_UPDATE_SUCCESS: {
      const id = action.reports.responses[0].spreadsheetId;
      const { values } = action.reports.responses[0].updatedData;
      return { ...state, isLoading: false, [id]: { values } };
    }
    case types.SHEETS_POST_UPDATE_FAILURE: {
      return { ...state, isLoading: false, error: action.error };
    }
    case types.SHEET_CATEGORY_UPDATE_SUCCESS: {
      const data = action.reports.data[0][0];
      const { spreadsheetId } = action.reports.jsonifiedResponse;
      const updatedRange = parseInt(action.reports.jsonifiedResponse.responses[0].updatedRange.slice(14, 18)) - 1;
      const newState = state[spreadsheetId].values.map((obj, index) => {
        if (updatedRange === index) {
          const newObj = obj;
          if (newObj.length >= 4) {
            newObj.pop();
          }
          if (data === '') {
            return newObj;
          }
          newObj.push(data);

          return newObj;
        }
        return obj;
      });
      return { ...state, [spreadsheetId]: { values: newState }, isLoading: false };
    }
    case types.SHEET_CATEGORY_UPDATE_FAILURE: {
      return { ...state, isLoading: false, error: action.error };
    }

    case types.SPREADSHEETS_VALUES_GET_START: {
      return { ...state, isLoading: true };
    }
    case types.SPREADSHEETS_VALUES_GET_SUCCESS: {
      const id = action.reports.thisSpreadsheetId;
      const { values } = action.reports.jsonifiedResponse;
      // let values = [
      //   ['Loading5', 'Loading5', 'Loading5'],
      //   ['Loading6', 'Loading6', 'Loading6', 'Loading6'],
      //   ['Loading5', 'Loading5', 'Loading5'],
      //   ['Loading6', 'Loading6', 'Loading6', 'Loading6'],
      //   ['Loading5', 'Loading5', 'Loading5'],
      //   ['Loading6', 'Loading6', 'Loading6', 'Loading6'],
      // ];

      return { ...state, isLoading: false, [id]: { values } };
    }
    case types.SPREADSHEETS_VALUES_GET_FAILURE: {
      return { ...state, isLoading: false, error: action.error };
    }

    default:
      return state;
  }
};
