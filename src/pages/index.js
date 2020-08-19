import React from 'react';
import { Link } from 'gatsby';

import { UISetup, Header } from 'components';

const IndexPage = () => (
  <UISetup>
    <Header />
    <Link to="/page-2/">Go to page 2</Link>
  </UISetup>
);

export default IndexPage;
