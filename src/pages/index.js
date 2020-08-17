import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const IndexPage = () => (
  <Layout>
    <p>Welcome to your new Gatsby site.</p>
    <Link to="/page-2/">Go to page 2</Link> <br />
  </Layout>
);

export default IndexPage;
