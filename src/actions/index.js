import * as types from "./../constants/ActionTypes";



export const setToken = (payload) => ({
  type: types.SET_TOKEN,
  payload: payload,
});
