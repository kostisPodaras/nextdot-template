import { INCREMENT, DECREMENT } from './types';

const increment = () => ({
  type: INCREMENT,
});

const decrement = () => ({
  type: DECREMENT,
});

export { increment, decrement };
