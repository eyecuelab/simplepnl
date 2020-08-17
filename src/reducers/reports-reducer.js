import constants from '../constants';

const { initialState, types } = constants;

export default (state = initialState.reports, action) => {
  switch (action.type) {
    case types.DRIVE_REQUEST_REPORTS: {
      return { ...state, isLoading: true };
    }
    case types.DRIVE_GET_REPORTS_SUCCESS: {
      return { ...state, isLoading: false, reports: action.reports };
    }
    case types.DRIVE_GET_REPORTS_FAILURE: {
      return { ...state, isLoading: false, error: action.error };
    }
    case types.DRIVE_NEW_SHEET_CREATED: {
      const newSheet = {
        id: action.reports.spreadsheetId,
        kind: 'drive#file',
        mimeType: 'application/vnd.google-apps.spreadsheet',
        percentage: null,
        name: action.reports.properties.title,
      };
      const returnedTarget = state.reports.map((x) => x);
      returnedTarget.push(newSheet);
      return { ...state, isLoading: false, reports: returnedTarget };
    }
    case types.SHEETS_REQUEST_PERCENTAGE: {
      return { ...state, isLoading: true };
    }
    case types.SHEETS_GET_PERCENTAGE_SUCCESS: {
      const { spreadsheetId } = action.reports;
      const { percentage } = action.reports;
      const currentState = state.reports;

      const newObj = { percentage };
      const newState = currentState.map((obj) => {
        if (obj.id === spreadsheetId) {
          return { ...obj, ...newObj };
        }
        return obj;
      });
      return { ...state, isLoading: false, reports: newState };
    }
    case types.SHEETS_GET_PERCENTAGE_FAILURE: {
      return { ...state, isLoading: false, error: action.error };
    }

    default:
      return state;
  }
};
