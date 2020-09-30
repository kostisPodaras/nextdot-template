import React from 'react';
import { Link } from 'gatsby';
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
        <Link to="/app/profile">
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </Link>
      </Tooltip>

      <p>Lets say its something like Slack sidebar</p>
      <p>Press the icon to change route to Profile editing</p>
    </Grid>
  </Grid>
);

export default withStyles(styles)(Sidebar);
