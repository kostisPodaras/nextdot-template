import {
  push,
  replace,
  go,
  goBack,
  goForward,
  LOCATION_CHANGE,
} from 'redux-first-history';

const locationChange = {
  type: LOCATION_CHANGE,
};

export { push, replace, go, goBack, goForward, locationChange };
