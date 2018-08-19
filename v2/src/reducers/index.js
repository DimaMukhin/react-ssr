import { combineReducers } from 'redux';
import postReducer from './postReducer';
import messageReducer from './messageReducer';

export default combineReducers({
  posts: postReducer,
  message: messageReducer
});