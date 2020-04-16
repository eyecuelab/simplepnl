import constants from '../constants';

const { initialState, types } = constants;

export default (state = initialState.reports, action) => {
  switch (action.type) {
    case types.DRIVE_REQUEST_REPORTS: {
      return { ...state,
        isLoading: true };
    }
    case types.DRIVE_GET_REPORTS_SUCCESS: {
      return { ...state,
        isLoading: false,
        reports: action.reports };
    }
    case types.DRIVE_GET_REPORTS_FAILURE: {
      return { ...state,
        isLoading: false,
        error: action.error };
    }
    case types.DRIVE_NEW_SHEET_CREATED: {
      const newSheet = {
        id: action.reports.spreadsheetId,
        kind: 'drive#file',
        mimeType: 'application/vnd.google-apps.spreadsheet',
        name: action.reports.properties.title,
      };
      const returnedTarget = state.reports.map((x) => x);
      returnedTarget.push(newSheet);
      return { ...state,
        isLoading: false,
        reports: returnedTarget };
    }
    default:
      return state;
  }
};
