import isBrowser from './isBrowser';

const isCurrentPathname = (...pathnames) =>
  pathnames.some(
    (pathname) => isBrowser() && pathname === window.location.pathname,
  );

export default isCurrentPathname;
