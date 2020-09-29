import React, { useState, useEffect, createRef } from 'react';

function useDimensions() {
  const ref = createRef();
  const { clientHeight, clientWidth } = ref.current || {};

  const [dimensions, setDimensions] = useState({
    height: clientHeight,
    width: clientWidth,
  });

  useEffect(() => {
    const { clientHeight, clientWidth } = ref.current || {};

    if (
      clientHeight !== dimensions.height ||
      clientWidth !== dimensions.width
    ) {
      setDimensions({
        height: clientHeight,
        width: clientWidth,
      });
    }
  }, [ref, dimensions]);

  return [ref, dimensions];
}

const withDimensions = (Component) => (props) => {
  const [ref, dimensions] = useDimensions();

  return (
    <div ref={ref}>
      <Component {...props} dimensions={dimensions} />
    </div>
  );
};

export { useDimensions, withDimensions };
