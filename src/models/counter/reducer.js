import { increment, decrement } from './actions';

const initialState = 0;

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case increment.type:
      return state + 1;

    case decrement.type:
      return state - 1;

    default:
      return state;
  }
};

export default counterReducer;
