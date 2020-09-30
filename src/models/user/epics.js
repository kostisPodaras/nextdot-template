import { tap } from 'rxjs/operators';
import { ofType, combineEpics } from 'redux-observable';

import { signIn, signOut } from './actions';

const signInEpic = (action$) =>
  action$.pipe(ofType(signIn.type), tap(console.log('signIn')));

const signOutEpic = (action$) =>
  action$.pipe(ofType(signOut.type), tap(console.log('signOut')));

const counterEpic = combineEpics(signInEpic, signOutEpic);

export { counterEpic };
