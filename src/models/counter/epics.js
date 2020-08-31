import { delay, mapTo } from 'rxjs/operators';
import { ofType, combineEpics } from 'redux-observable';

import { increment, decrement } from './actions';

const incrementEpic = (action$) =>
  action$.pipe(ofType(increment.type), delay(2000), mapTo(decrement()));

// const decrementEpic = (action$) =>
//   action$.pipe(
//     ofType(decrement.type),
//     delay(2000),
//     mapTo(decrement()),
//   );

const counterEpic = combineEpics(
  incrementEpic,
  // decrementEpic
);

export { counterEpic };
