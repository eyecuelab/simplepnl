import constants from '../constants';

const { initialState, types } = constants;

export default (state = initialState.reports, action) => {
  switch (action.type) {
    case types.DRIVE_REQUEST_REPORTS: {
      return { ...state,
        isLoading: true };
    }
    case types.DRIVE_GET_REPORTS_SUCCESS: {
      // console.log("action.reports", action.reports);


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


    case types.SHEETS_REQUEST_PERCENTAGE: {
      return { ...state, isLoading: true };
    }
    case types.SHEETS_GET_PERCENTAGE_SUCCESS: {
      const { currentReports } = action.reports;
      const { spreadsheetId } = action.reports;
      const { percentage } = action.reports;

      console.log('currentReports', currentReports);
      console.log('spreadsheetId', spreadsheetId);
      console.log('percentage', percentage);
      console.log('=====Great, now what?=====');

      // let newState = Object.assign({}, ...state, newSheet);
      return { ...state,
        isLoading: false,
        reports: currentReports };
    }
    case types.SHEETS_GET_PERCENTAGE_FAILURE: {
      return { ...state,
        isLoading: false,
        error: action.error };
    }

    default:
      return state;
  }
};
