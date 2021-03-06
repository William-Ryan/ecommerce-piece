import { combineReducers } from 'redux';
import { marketReducer } from './marketReducer';
import { userReducer } from './userReducer';
import { imageReducer } from './imageReducer';

export default combineReducers({
  user: userReducer,
  market: marketReducer,
  image: imageReducer
});
