import constants from '../constants';

const {
  initialState,
  types,
} = constants;

export default (state = initialState.csv, action) => {
  switch (action.type) {
    case types.LOAD_CSV: {
      /* eslint-disable-next-line camelcase */
      const { csvRawData } = action.payload;
      const returnedTarget = {
        ...state,
        csvRawData,
      };
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
      const { payload } = action;
      const returnedTarget = {
        ...state,
        csvHeader: payload,
      };
      return returnedTarget;
    }
    case types.SHRINK_CSV_TO_HEADER: {
      const { payload } = action;
      const { csvRawData } = state;
      const headerIndex = payload.split('_')[1];
      const newCsvRawData = [];
      csvRawData.map((obj, index) => {
        if (headerIndex === 'none' && index === 0) {
          const newData = [];
          for (let i = 0; i < obj.data.length; i++) {
            newData.push(`Col_${i + 1}:`);
          }
          newCsvRawData.push({ data: newData });
          if (obj.data.length > 3) {
            newCsvRawData.push(obj);
          }
          return false;
        } if (headerIndex === 'none') {
          if (obj.data.length > 3) {
            newCsvRawData.push(obj);
          }
          return false;
        } if (index < headerIndex) {
          return false;
        }
        if (obj.data.length > 3) {
          newCsvRawData.push(obj);
        }
        return false;
      });
      const returnedTarget = {
        ...state,
        csvRawData: newCsvRawData,
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
