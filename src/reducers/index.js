import {
  combineReducers,
} from 'redux';
import oauthReducer from './oauth-reducer';
import csvReducer from './csv-reducer';

const rootRedcuer = combineReducers({
  oauthReducer,
  csvReducer,
});

export default rootRedcuer;
