import React from 'react';
import { Location, Router as ReachRouter } from '@reach/router';

type Props = {
  children: HTMLElement | Object | [],
};

const Router = ({ children, ...props }: Props) => (
  <Location>
    {({ location }) => (
      <ReachRouter location={location} {...props}>
        {children}
      </ReachRouter>
    )}
  </Location>
);

export default Router;
