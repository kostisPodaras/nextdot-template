import { ActionCreator } from 'core/models/actions';

const namespacedActionCreator = ActionCreator('//counter');

const increment = namespacedActionCreator('INCREMENT');
const decrement = namespacedActionCreator('DECREMENT');

export { increment, decrement };
