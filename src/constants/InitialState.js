/* eslint-disable-next-line import/prefer-default-export */
export const initialState = {
  reports: [{
    testKey: 'Test value',
  }],
  oauth: {
    isSignedIn: false,
    currentUser: null,
    err: null,
    access_token: null,
  },
  csv: {

  },
};
