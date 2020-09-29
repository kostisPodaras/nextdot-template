import React, { useState, useEffect, createRef } from 'react';

function useHeight() {
  const ref = createRef();
  const { clientHeight } = ref.current || {};

  const [height, setHeight] = useState(clientHeight);

  useEffect(() => {
    const { clientHeight } = ref.current || {};

    if (clientHeight !== height) {
      setHeight(clientHeight);
    }
  }, [ref, height]);

  return [ref, height];
}

const withHeight = (Component) => (props) => {
  const [ref, height] = useHeight();
  return (
    <div ref={ref}>
      <Component {...props} height={height} />
    </div>
  );
};

export { useHeight, withHeight };
