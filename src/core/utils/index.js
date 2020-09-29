import { isSafari, isEdge, isIE11, isIE } from './browser-detect';
import isBrowser from './isBrowser';
import prepareBackgroundSvg from './prepareBackgroundSvg';
import compose from './compose';
import remToPx from './remToPx';
import isSvg from './isSvg';
import isCurrentPathname from './isCurrentPathname';
import changeMonitor from './changeMonitor';
import { removeCookies, removeCookie, addCookie } from './cookies';
import queryParamsExist from './queryParamsExist';
import storageValue from './storageValue';

export {
  prepareBackgroundSvg,
  compose,
  remToPx,
  isSvg,
  isBrowser,
  isSafari,
  isEdge,
  isIE11,
  isIE,
  isCurrentPathname,
  changeMonitor,
  removeCookies,
  removeCookie,
  addCookie,
  queryParamsExist,
  storageValue,
};
