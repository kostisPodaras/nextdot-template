import React, { useState } from 'react';

function useToggleValue() {
  const [on, setOn] = useState(false);
  const onToggle = () => setOn(!on);
  return [on, onToggle];
}

const withToggleValue = (Component) => (props) => {
  const [on, onToggle] = useToggleValue();

  return <Component {...props} toggleValue={on} onToggle={onToggle} />;
};

export { useToggleValue, withToggleValue };
