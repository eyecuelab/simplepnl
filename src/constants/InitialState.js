/* eslint-disable-next-line import/prefer-default-export */
export const initialState = {
  oauth: {
    isSignedIn: false,
    currentUser: null,
    err: null,
    access_token: null,
  },
  csv: {

  },
  reports: {
    isLoading: false,
    reports: [],
    error: null,
  },
};
