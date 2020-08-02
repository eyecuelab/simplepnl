import constants from '../constants';

const { initialState, types } = constants;

export default (state = initialState.folder, action) => {
  switch (action.type) {
    case types.GET_DRIVE_FOLDER_START: {
      return { ...state, isLoading: true };
    }
    case types.GET_DRIVE_FOLDER_SUCCESS: {
      const { folder } = action;
      return { ...state, isLoading: false, folderId: folder };
    }
    case types.GET_DRIVE_FOLDER_FAILURE: {
      return { ...state, isLoading: false, error: action.error };
    }

    default:
      return state;
  }
};
