import merge from 'lodash/merge';
import { combineReducers } from 'redux';

const REDUCER = Symbol('REDUCER');

const injectReducer = (store, reducer) => {
  if (!store[REDUCER]) {
    store[REDUCER] = {};
  }

  store[REDUCER] = merge(store[REDUCER], reducer);
  store.replaceReducer(combineReducers(store[REDUCER]));
};

export { injectReducer, REDUCER };
