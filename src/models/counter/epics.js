import { delay, mapTo } from 'rxjs/operators';
import { ofType, combineEpics } from 'redux-observable';

import { increment, decrement } from './actions';

// mapTo(decrement,.type wont work. Cause it dispatch a string and not an object)
const incrementEpic = (action$) =>
  action$.pipe(
    ofType(increment.type),
    delay(2000),
    mapTo({ type: decrement.type }),
  );

const decrementEpic = (action$) =>
  action$.pipe(
    ofType(decrement.type),
    delay(2000),
    mapTo({ type: increment.type }),
  );

const counterEpic = combineEpics(incrementEpic, decrementEpic);

export { counterEpic };
