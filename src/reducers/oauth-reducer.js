import constants from '../constants';

const { initialState, types } = constants;

export default (state = initialState.oauth, action) => {
  switch (action.type) {
    case types.SET_TOKEN: {
      /* eslint-disable-next-line camelcase */
      const { access_token, currentUser, err, isSignedIn } = action.payload;
      const returnedTarget = {
        ...state,
        access_token,
        currentUser,
        err,
        isSignedIn,
      };
      return returnedTarget;
    }
    case types.AGREE_TO_EULA: {
      const returnedTarget = {
        ...state,
        agreeToEula: true,
      };
      return returnedTarget;
    }
    default:
      return state;
  }
};
