import { combineReducers } from 'redux';
import oauthReducer from './oauth-reducer';
import csvReducer from './csv-reducer';
import reportsReducer from './reports-reducer';

const rootRedcuer = combineReducers({
  oauthReducer,
  csvReducer,
  reportsReducer,
});

export default rootRedcuer;
