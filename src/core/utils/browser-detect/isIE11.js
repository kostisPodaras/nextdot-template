import isBrowser from '../isBrowser';

const isIE11 = () =>
  isBrowser() && /Trident.*rv[ :]*11\./.test(navigator.userAgent);

export default isIE11;
