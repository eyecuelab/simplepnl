import * as types from '../constants/ActionTypes';

export const setToken = (payload) => ({
  type: types.SET_TOKEN,
  payload,
});

export const loadCSV = (payload) => ({
  type: types.LOAD_CSV,
  payload,
});
