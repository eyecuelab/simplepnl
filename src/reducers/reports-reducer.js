import constants from '../constants';

const { initialState, types } = constants;

export default (state = initialState.reports, action) => {
  switch (action.type) {
    case types.DRIVE_REQUEST_REPORTS:
      return { ...state, isLoading: true };
    case types.DRIVE_GET_REPORTS_SUCCESS:
      return { ...state,
        isLoading: false,
        reports: action.reports };
    case types.DRIVE_GET_REPORTS_FAILURE:
      return { ...state,
        isLoading: false,
        error: action.error };
    default:
      return state;
  }
};
