const functionInvocator = (...funcs) => () =>
  funcs.filter((func) => typeof func === 'function').forEach((func) => func());

export default functionInvocator;
