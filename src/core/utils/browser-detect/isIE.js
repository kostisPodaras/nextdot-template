import isBrowser from '../isBrowser';

const isIE = () =>
  isBrowser() && global.navigator.userAgent.indexOf('MSIE') > 0;

export default isIE;
