import React from 'react';
// import { Link } from '@reach/router';
import { Link } from 'gatsby';
import withStyles from '@material-ui/core/styles/withStyles';

import styles from './styles';

type Props = {
  classes: Object,
};

const Home = ({ classes }: Props) => {
  return (
    <div className={classes.container}>
      <p>This will stimulate Home Page</p>
      <p>
        Button below will stimulate Sign Up / Sign In, which will redirect us to
        app page
      </p>
      <button type="button">
        <Link to="app">Login</Link>
      </button>
    </div>
  );
};

export default withStyles(styles)(Home);
