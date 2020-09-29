const changeMonitor = (previousValue) => (value) => {
  const result = previousValue !== value;
  previousValue = value;
  return result;
};

export default changeMonitor;
