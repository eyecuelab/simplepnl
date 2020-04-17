import { combineReducers } from 'redux';
import oauthReducer from './oauth-reducer';
import csvReducer from './csv-reducer';
import reportsReducer from './reports-reducer';
import sheetsReducer from './sheets-reducer';

const rootRedcuer = combineReducers({
  oauthReducer,
  csvReducer,
  reportsReducer,
  sheetsReducer,
});

export default rootRedcuer;
