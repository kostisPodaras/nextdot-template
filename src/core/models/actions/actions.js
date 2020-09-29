import ActionCreator from './ActionCreator';

const namespacedActionCreator = ActionCreator('@@core');

const effect = namespacedActionCreator('effect');
const startEpics = namespacedActionCreator('startEpics');
const startRouteEpics = namespacedActionCreator('startRouteEpics');
const stopRouteEpics = namespacedActionCreator('stopRouteEpics');

export { effect, startEpics, startRouteEpics, stopRouteEpics };
