import isBrowser from '../isBrowser';

const isSafari = () =>
  isBrowser() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

export default isSafari;
