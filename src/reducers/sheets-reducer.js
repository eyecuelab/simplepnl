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
        percentage: 33,
        name: action.reports.properties.title,
      };
      return { ...state,
        isLoading: false,
        sheets: newSheet };
    }
    case types.SHEETS_POST_CREATE_FAILURE: {
      return { ...state,
        isLoading: false,
        error: action.error };
    }
    case types.SHEETS_POST_UPDATE: {
      return { ...state,
        isLoading: true };
    }
    case types.SHEETS_POST_UPDATE_SUCCESS: {
      const id = action.reports.responses[0].spreadsheetId;
      const { values } = action.reports.responses[0].updatedData;
      return { ...state,
        isLoading: false,
        [id]: { values } };
    }
    case types.SHEETS_POST_UPDATE_FAILURE: {
      return { ...state,
        isLoading: false,
        error: action.error };
    }
    case types.SHEETS_POST_UPDATE_START: {
      return { ...state, isLoading: true };
    }
    case types.SHEET_CATEGORY_UPDATE_SUCCESS: {
      // [id]: { ...values }
      return { ...state,
        isLoading: false };
    }
    case types.SHEET_CATEGORY_UPDATE_FAILURE: {
      return { ...state,
        isLoading: false,
        error: action.error };
    }
    default:
      return state;
  }
};
