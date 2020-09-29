import React, { useState } from 'react';

function useAnchorElement() {
  const [anchorElement, setAnchorElement] = useState(null);

  return [anchorElement, setAnchorElement];
}

const withAnchorElement = (Component) => (props) => {
  const [anchorElement, setAnchorElement] = useAnchorElement();

  return (
    <Component
      {...props}
      anchorElement={anchorElement}
      setAnchorElement={setAnchorElement}
    />
  );
};

export { useAnchorElement, withAnchorElement };
