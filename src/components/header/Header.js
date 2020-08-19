import React from 'react';

import withStyles from '@material-ui/core/styles/withStyles';

import styles from './styles';

type Props = {
  classes: Object,
};

const Header = ({ classes }: Props) => {
  return <p className={classes.test}>test component</p>;
};

export default withStyles(styles)(Header);
