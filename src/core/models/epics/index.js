import { combineEpics } from 'redux-observable';

import { effect, ofType } from './operators';
import { initializeEpics, injectEpic } from './epicsManagement';
import epics from './epics';
import {
  attachEpicMiddlewareToStore,
  getEpicMiddlewareFromStore,
} from './epicMiddleware';

export {
  getEpicMiddlewareFromStore,
  attachEpicMiddlewareToStore,
  epics,
  injectEpic,
  initializeEpics,
  combineEpics,
  ofType,
  effect,
};
