import React from 'react';
import { Link } from 'gatsby';

import { UISetup } from 'components';

const SecondPage = () => (
  <UISetup>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </UISetup>
);

export default SecondPage;
