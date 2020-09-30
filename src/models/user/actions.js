import { ActionCreator } from 'core/models/actions';

const namespacedActionCreator = ActionCreator('//user');

const signIn = namespacedActionCreator('signIn');
const signout = namespacedActionCreator('signout');

export { signIn, signout };
