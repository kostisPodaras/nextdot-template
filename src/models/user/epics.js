import {
  //  ofType,
  combineEpics,
} from 'redux-observable';

// import { signIn, signOut } from './actions';

// const signInEpic = (action$, state$) =>
//   action$.pipe(ofType(signIn.type), navigate to App page );

// const signOutEpic = (action$, state$) =>
//   action$.pipe(ofType(signOut.type), delete userToken/navigate);

const userEpic = combineEpics();
// signInEpic, signOutEpic

export { userEpic };
