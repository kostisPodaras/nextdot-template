import React, { useRef, useState, lazy, Suspense } from 'react';

import { isBrowser } from 'utils';

import Loading from './loading';

const lazyLoad = (componentUrl, WhileWaiting = Loading) => (props) => {
  if (!isBrowser()) {
    return null;
  }

  const componentRef = useRef();
  const [init] = useState(() => {
    componentRef.current = lazy(componentUrl);

    return true;
  });

  const { current: Component } = init && componentRef;

  return (
    <Suspense fallback={<WhileWaiting />}>
      <Component {...props} />
    </Suspense>
  );
};

export default lazyLoad;
