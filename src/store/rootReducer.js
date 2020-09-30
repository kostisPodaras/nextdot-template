import { combineReducers } from 'redux';

import { counterReducer } from 'models/counter';
import { userReducer } from 'models/user';

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

export default rootReducer;
