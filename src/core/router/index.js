import { Location, LocationProvider, navigate } from '@reach/router';

import { createHistory, routerMiddleware, routerReducer } from './history';
import { Router, Link } from './components';
import { router as routerSelector, pathname } from './selectors';

import {
  push,
  replace,
  go,
  goBack,
  goForward,
  locationChange,
} from './actions';

export {
  Router,
  LocationProvider,
  Location,
  Link,
  createHistory,
  routerMiddleware,
  routerReducer,
  routerSelector,
  pathname,
  navigate,
  push,
  replace,
  go,
  goBack,
  goForward,
  locationChange,
};
