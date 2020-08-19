import { combineReducers } from 'redux';

import { counterReducer } from 'models/counter';

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
