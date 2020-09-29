import isBrowser from '../isBrowser';

const isEdge = () => isBrowser() && /Edge/.test(navigator.userAgent);

export default isEdge;
