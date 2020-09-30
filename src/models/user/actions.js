import { ActionCreator } from 'core/models/actions';

const namespacedActionCreator = ActionCreator('//user');

const signIn = namespacedActionCreator('signIn');
const signOut = namespacedActionCreator('signOut');

export { signIn, signOut };
