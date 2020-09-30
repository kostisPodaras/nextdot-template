import React from 'react';
import { Link } from '@reach/router';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';

import styles from './styles';

type Props = {
  classes: Object,
};

const Profile = ({ classes }: Props) => {
  return (
    <Grid
      className={classes.container}
      container
      direction="column"
      justify="center"
      alignItems="center">
      <h1>Profile route</h1>
      <button type="button">
        <Link to="/">Stimulate log-out</Link>
      </button>
    </Grid>
  );
};

export default withStyles(styles)(Profile);
