import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import withModelProps from 'core/components/model-props';
import { compose } from 'core/utils';

import { increment, decrement, counter } from 'models/counter';

import styles from './styles';

type Props = {
  classes: Object,
  counter: number,

  increment: () => void,
  decrement: () => void,
};

const Header = ({ classes, counter, increment, decrement }: Props) => {
  return (
    <div className={classes.test}>
      <p>Welcome to our template setup.</p>
      <p>
        The Tech behind this framework is React, Redux, RXjs, Materia-UI, so you
        can start immediately your project with this framework without any
        configuration.
      </p>
      <p>
        Here is the most basic example but using our framework. You can start
        coding right away.
      </p>
      <button type="button" onClick={increment}>
        +
      </button>
      <button type="button" onClick={decrement}>
        -
      </button>
      <p>
        Increase the counter will change back after 2 sec and the value is:{' '}
        {counter}
      </p>
    </div>
  );
};

export default compose(
  withModelProps({ counter, increment, decrement }),
  withStyles(styles),
)(Header);
