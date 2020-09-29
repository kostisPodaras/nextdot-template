import { globalHistory } from '@reach/router';
import { createBrowserHistory, createMemoryHistory } from 'history';
import { createReduxHistoryContext, reachify } from 'redux-first-history';

import { isBrowser } from 'utils';

const reachHistoryAdapter = (reachHistory) => {
  const originalHistory = isBrowser()
    ? createBrowserHistory(window)
    : createMemoryHistory();

  const adaptedHistory = Object.create(originalHistory);

  adaptedHistory.listen = (callback) => {
    reachHistory.listen(({ location }) => callback(location));

    originalHistory.listen((location) =>
      reachHistory.navigate(location.pathname, { replace: true }),
    );
  };

  return adaptedHistory;
};

const {
  createReduxHistory,
  routerMiddleware,
  routerReducer,
} = createReduxHistoryContext({
  history: reachHistoryAdapter(globalHistory),
});

const createHistory = (store) => reachify(createReduxHistory(store));

export { createHistory, routerMiddleware, routerReducer };
