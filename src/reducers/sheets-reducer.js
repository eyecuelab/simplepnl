import constants from '../constants';

const { initialState, types } = constants;

export default (state = initialState.sheets, action) => {
  switch (action.type) {
    case types.SHEETS_POST_CREATE:
      return { ...state, isLoading: true };
    case types.SHEETS_POST_CREATE_SUCCESS:
      return { ...state,
        isLoading: false,
        sheets: action.sheets };
    case types.SHEETS_POST_CREATE_FAILURE:
      return { ...state,
        isLoading: false,
        error: action.error };
    default:
      return state;
  }
};
