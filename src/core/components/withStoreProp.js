import React from 'react';
import { useStore } from 'react-redux';

const withStoreProp = (Component) => (props) => {
  const store = useStore();

  return <Component {...props} store={store} />;
};

export default withStoreProp;
