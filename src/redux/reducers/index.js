import { combineReducers } from 'redux';
import { marketReducer } from './marketReducer';
import { userReducer } from './userReducer';

export default combineReducers({
  users: userReducer,
  market: marketReducer
});
