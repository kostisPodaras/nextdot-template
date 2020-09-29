const router = (state) => state.router || {};
const pathname = (state) => state.router?.location.pathname;

export { router, pathname };
