import React, { useState } from 'react';

const useTabsIndex = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const onChangeTab = (event, newTabIndex) => setTabIndex(newTabIndex);
  return [tabIndex, onChangeTab];
};

const withTabsIndex = (Component) => (props) => {
  const [tabIndex, onChangeTab] = useTabsIndex();

  return <Component {...props} tabIndex={tabIndex} onChangeTab={onChangeTab} />;
};

export { useTabsIndex, withTabsIndex };
