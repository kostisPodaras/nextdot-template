import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import rootEpic from './rootEpic';
import rootReducer from './rootReducer';

const windowExist = typeof window === 'object';

const epicMiddleware = createEpicMiddleware();
const composeEnhancers =
  (windowExist && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(epicMiddleware)),
);

epicMiddleware.run(rootEpic);

export default store;
