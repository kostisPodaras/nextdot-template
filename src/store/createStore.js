import { createStore } from 'redux';

import rootReducer from './rootReducer';

// This is for gatsby error --> "window" is not available during server side rendering.
const windowExist = typeof window === 'object';

const store = createStore(
  rootReducer,
  windowExist &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
