import { BehaviorSubject, pipe, NEVER } from 'rxjs';
import { mergeMap, switchMap, filter, ignoreElements } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import { startEpics, startRouteEpics, stopRouteEpics } from 'models/actions';

import { getEpicMiddlewareFromStore } from './epicMiddleware';

const IS_REMOVABLE = Symbol('IS_REMOVABLE');

let epic$ = () => pipe(ignoreElements());
const epicsAdded = [];

const rootEpic = (action$, ...rest) =>
  epic$.pipe(
    mergeMap((epic) =>
      epic[IS_REMOVABLE]
        ? action$.pipe(
            ofType(startRouteEpics.type, stopRouteEpics.type),
            filter(({ payload }) => payload === epic),
            switchMap(({ type }) =>
              type === startRouteEpics.type ? epic(action$, ...rest) : NEVER,
            ),
          )
        : epic(action$, ...rest),
    ),
  );

const addEpic = (store, epic) => {
  if (!epicsAdded.includes(epic)) {
    epic$.next(epic);
    epicsAdded.push(epic);
  }

  store.dispatch(startRouteEpics(epic));
};

const removeEpic = (store, epic) => {
  store.dispatch(stopRouteEpics(epic));
};

const injectEpic = (store, epic) => {
  epic[IS_REMOVABLE] = true;
  addEpic(store, epic);

  return () => removeEpic(store, epic);
};

const initializeEpics = (store, epic = () => pipe(ignoreElements())) => {
  if (epicsAdded.length) {
    return;
  }

  epic[IS_REMOVABLE] = false;
  epic$ = new BehaviorSubject(epic);
  epicsAdded.push(epic);

  getEpicMiddlewareFromStore(store).run(rootEpic);

  store.dispatch(startEpics());
};

export { initializeEpics, injectEpic };
