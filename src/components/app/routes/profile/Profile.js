import React from 'react';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import { navigate } from '@reach/router';

import { withModelProps } from 'core/components/model-props';
import { compose } from 'core/utils';
import { signOut } from 'models/user';

import styles from './styles';

type Props = {
  classes: Object,
  signOut: () => {},
};

const Profile = ({ classes, signOut }: Props) => (
  <Grid
    className={classes.container}
    container
    direction="column"
    justify="center"
    alignItems="center">
    <h1>Profile route</h1>
    <button
      onClick={() => {
        signOut();
        navigate('/');
      }}
      type="button">
      Logout
    </button>
  </Grid>
);

export default compose(
  withModelProps({ signOut }),
  withStyles(styles),
)(Profile);
