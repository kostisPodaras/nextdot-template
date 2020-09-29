import React, { useState } from 'react';

function useValue(value) {
  const [initialValue, setInitialValue] = useState(value);
  const [currentValue, setCurrentValue] = useState(value);
  if (initialValue !== value) {
    setInitialValue(value);
    setCurrentValue(value);
  }
  const handleChange = (value, callback) => {
    setCurrentValue(value);
    callback?.(value);
  };
  return [currentValue, handleChange];
}

type Props = {
  value: any,
};

const withValue = (Component) =>
  function Value({ value, ...rest }: Props) {
    const [currentValue, handleChange] = useValue(value);
    return (
      <Component
        {...rest}
        value={currentValue}
        handleValueChange={handleChange}
      />
    );
  };

export { useValue, withValue };
