import React from 'react';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';

import { Sidebar } from './components';
import styles from './styles';

type Props = {
  classes: Object,
  children: HTMLElement | Object | [],
};

const Layout = ({ children, classes }: Props) => (
  <div className={classes.project}>
    <Paper elevation={5} className={classes.container}>
      <Sidebar />
      <div className={classes.app}>{children}</div>
    </Paper>
  </div>
);

export default withStyles(styles)(Layout);
