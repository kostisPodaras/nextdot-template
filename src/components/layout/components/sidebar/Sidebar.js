import React from 'react';
import { Link } from '@reach/router';
import Grid from '@material-ui/core/Grid';
import SettingsIcon from '@material-ui/icons/Settings';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import withStyles from '@material-ui/core/styles/withStyles';

import styles from './styles';

type Props = {
  classes: Object,
};

const Sidebar = ({ classes }: Props) => (
  <Grid container className={classes.container}>
    <Grid justify="space-around" container>
      <Tooltip title="Edit Profile">
        <Link to="profile">
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </Link>
      </Tooltip>

      <p>Sidebar, something like slack sidebar</p>
    </Grid>
  </Grid>
);

export default withStyles(styles)(Sidebar);
