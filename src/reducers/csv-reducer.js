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
      const { csvRawData } = action.payload;
      const returnedTarget = {
        ...state,
        csvRawData,
      };

      // MAY NEED TO CHANGE OBJECT.ASSIGN TO EITHER A CREATE OR SIMPLE VAR SO TOKENS DONT STACK?
      return returnedTarget;
    }
    case types.SET_CSV_NAME: {
      const {
        payload,
      } = action;
      const returnedTarget = {
        ...state,
        csvName: payload,
      };
      return returnedTarget;
    }
    case types.SET_CSV_HEADER: {
      const {
        payload,
      } = action;
      const returnedTarget = {
        ...state,
        csvHeader: payload,
      };
      return returnedTarget;
    }
    case types.SET_CSV_DATE: {
      const {
        payload,
      } = action;
      const returnedTarget = {
        ...state,
        csvDate: payload,
      };
      return returnedTarget;
    }

    case types.SET_CSV_DESCRIPTION: {
      const {
        payload,
      } = action;
      const returnedTarget = {
        ...state,
        csvDescription: payload,
      };
      return returnedTarget;
    }

    case types.SET_CSV_AMOUNT: {
      const {
        payload,
      } = action;
      const returnedTarget = {
        ...state,
        csvAmount: payload,
      };
      return returnedTarget;
    }
    case types.SET_CSV_AMOUNT_DEBIT: {
      const {
        payload,
      } = action;
      const returnedTarget = {
        ...state,
        csvAmountDebit: payload,
      };
      return returnedTarget;
    }
    default:
      return state;
  }
};
