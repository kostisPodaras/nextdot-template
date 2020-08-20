import { Action } from 'core/utils';

const namespaceAction = Action('//counter');

const increment = namespaceAction('INCREMENT');
const decrement = namespaceAction('DECREMENT');

export { increment, decrement };
