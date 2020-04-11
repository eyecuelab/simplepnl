import constants from './../constants';
const { initialState, types } = constants;

export default (state = initialState.oauth, action) => {
  switch (action.type) {
    case types.SET_TOKEN:
    // const { access_token, } = action;
    const { access_token, currentUser, err, isSignedIn, } = action.payload
    const returnedTarget = Object.assign({}, state, {
      access_token:  access_token,
      currentUser:  currentUser,
      err:  err,
      isSignedIn:  isSignedIn,
    });

    // console.log('returnedTarget', returnedTarget);

    // MAY NEED TO CHANGE OBJECT.ASSIGN TO EITHER A CREATE OR SIMPLE VAR SO TOKENS DONT STACK?
    return returnedTarget;
    default:
    return state;
  }
};
