import { createBrowserHistory, createMemoryHistory } from 'history';

import { isBrowser } from 'utils';

const reachHistoryAdapter = (reachHistory) => {
  const originalHistory = isBrowser()
    ? createBrowserHistory(window)
    : createMemoryHistory();

  const adaptedHistory = Object.create(originalHistory);

  adaptedHistory.listen = (callback) => {
    reachHistory.listen(({ location }) => callback(location));
    originalHistory.listen((location) =>
      reachHistory.navigate(location.pathname),
    );
  };

  return adaptedHistory;
};

export default reachHistoryAdapter;
