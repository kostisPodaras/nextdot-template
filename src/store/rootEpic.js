import { combineEpics } from 'redux-observable';

import { counterEpic } from 'models/counter';

export const rootEpic = combineEpics(
  counterEpic,
  // the other epics i will add
);

export default rootEpic;
