import React, { useRef, useEffect } from 'react';

import { withModelProps } from 'components/model-props';
import { routerSelector as router } from 'router';
import { compose, changeMonitor } from 'utils';

const useScrollToTop = (router) => {
  const isLocationChangedRef = useRef(false);
  const elementRef = useRef(null);

  // TODO: *** Refactoring *** Fix location..

  useEffect(() => {
    isLocationChangedRef.current = changeMonitor(router?.location?.pathname);
  }, [router]);

  useEffect(() => {
    if (isLocationChangedRef.current(router?.location?.pathname)) {
      elementRef.current?.scrollToTop();
    }
  });

  const refScrollToTopElement = (element) => {
    elementRef.current = element;
  };

  return refScrollToTopElement;
};

type Props = {
  router: Object,
};

const withScrollToTop = (Component) => ({ router, ...restProps }: Props) => {
  const refScrollToTopElement = useScrollToTop(router);

  return (
    <Component
      router={router}
      {...restProps}
      refScrollToTopElement={refScrollToTopElement}
    />
  );
};

export default compose(withModelProps({ router }), withScrollToTop);
