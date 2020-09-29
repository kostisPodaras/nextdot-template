import React from 'react';

type Props = {
  component: any,
  authenticated: boolean,
};

const ProtectedRoute = ({
  component: Component,
  authenticated,
  ...props
}: Props) => {
  if (!authenticated) {
    window.location = '/';

    return <div />;
  }

  return <Component {...props} />;
};

export default ProtectedRoute;
