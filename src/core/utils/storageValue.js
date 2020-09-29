import isBrowser from './isBrowser';

const storageValue = (key, useSessionStorage) => {
  if (!isBrowser()) {
    return {
      get: () => ({}),
      set: () => {},
    };
  }

  const storage = useSessionStorage ? sessionStorage : localStorage;

  return {
    get: () => JSON.parse(storage.getItem(key)),
    set: (value) => {
      if (!value) {
        storage.clear();
      } else {
        storage.setItem(key, JSON.stringify(value));
      }
    },
  };
};

export default storageValue;
