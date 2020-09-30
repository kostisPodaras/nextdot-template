import { combineEpics } from 'redux-observable';

import { counterEpic } from 'models/counter';
import { userEpic } from 'models/user';

export const rootEpic = combineEpics(
  counterEpic,
  userEpic,
  // Here all other epics will be added.
);

export default rootEpic;
