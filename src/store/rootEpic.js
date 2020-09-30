import { combineEpics } from 'redux-observable';

import { counterEpic } from 'models/counter';

export const rootEpic = combineEpics(
  counterEpic,
  // Here all other epics will be added.
);

export default rootEpic;
