import { combineReducers } from 'redux';

import usersReducer from './usersReducer';
import chatsReducer from './chatsReducer';
import messagesReducer from './messagesReducer';

export default combineReducers({
  usersReducer,
  chatsReducer,
  messagesReducer,
});