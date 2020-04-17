import constants from '../constants';

const {
  initialState,
  types,
} = constants;

export default (state = initialState.csv, action) => {
  switch (action.type) {
    case types.LOAD_CSV: {
      // const { access_token, } = action;
      /* eslint-disable-next-line camelcase */
      const {
        payload,
      } = action.payload;
      const returnedTarget = {
        ...state,
        payload,
      };

      // MAY NEED TO CHANGE OBJECT.ASSIGN TO EITHER A CREATE OR SIMPLE VAR SO TOKENS DONT STACK?
      return returnedTarget;
    }
    case types.SET_CSV_HEADER: {
      const {
        payload
      } = action;
      const returnedTarget = {
        ...state,
        csvHeader: payload,
      };
      return returnedTarget;
    }
    default:
      return state;
  }
};