const EPIC_MIDDLEWARE = Symbol('EPIC_MIDDLEWARE');

const attachEpicMiddlewareToStore = (store, epicMiddleware) => {
  store[EPIC_MIDDLEWARE] = epicMiddleware;
};

const getEpicMiddlewareFromStore = (store) => store[EPIC_MIDDLEWARE];

export { attachEpicMiddlewareToStore, getEpicMiddlewareFromStore };
