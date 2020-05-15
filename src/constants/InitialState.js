/* eslint-disable-next-line import/prefer-default-export */
export const initialState = {
  oauth: {
    isSignedIn: null,
    agreeToEula: null,
    currentUser: null,
    err: null,
    access_token: null,
  },
  csv: {},
  sheets: {
    isLoading: false,
    error: null,
  },
  reports: {
    isLoading: false,
    reports: [],
    error: null,
  },
};
