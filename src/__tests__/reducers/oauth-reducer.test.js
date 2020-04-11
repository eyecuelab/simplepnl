import oauthReducer from '../../reducers/oauth-reducer.js';

describe('oauthReducer', () => {

  let action;
  const payload = {
    access_token: '12345abcde',
    err: null,
    currentUser: "CelNo",
    isSignedIn: true,
  };


  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(oauthReducer({}, { type: null })).toEqual({});
  });


  test('Should successfully add new ticket data to masterTicketList', () => {
    const { access_token, err, currentUser, isSignedIn, } = payload;
    action = {
      type: 'SET_TOKEN',
      payload: payload,
    };

    expect(oauthReducer({}, action)).toEqual({
      access_token: '12345abcde',
      err: null,
      currentUser: "CelNo",
      isSignedIn: true,
    });
  });


});
