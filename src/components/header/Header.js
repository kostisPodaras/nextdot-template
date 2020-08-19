import React from 'react';

import withStyles from '@material-ui/core/styles/withStyles';

import styles from './styles';

type Props = {
  classes: Object,
};

const Header = ({ classes }: Props) => {
  return (
    <div className={classes.test}>
      <p>Welcome to our template setup.</p>
      <p>
        The Tech behind this framework is React, Redux, RXjs, Materia-UI, so you
        can start immediately your project with this framework without any
        configuration.
      </p>
    </div>
  );
};

export default withStyles(styles)(Header);
