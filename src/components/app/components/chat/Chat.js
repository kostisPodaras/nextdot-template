import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import { withModelProps } from 'core/components/model-props';
import { compose } from 'core/utils';
import { increment, decrement, counter } from 'models/counter';

import styles from './styles';

type Props = {
  classes: Object,
  counter: number,

  increment: () => void,
  decrement: () => void,
};

const Chat = ({ classes, counter, increment, decrement }: Props) => {
  return (
    <div className={classes.container}>
      <p>Lets imagine this is our chat container</p>
      <p>
        Bellow I have the simplest example which is enough to see that redux /
        reddux-observable works setup works.
      </p>
      <p>
        Component has access to state-actions with the use of withModelProps.
        Check
      </p>
      <p>
        Actions are dispatched correctly, redux-observable listen to them, so
        does redux. Check
      </p>
      <button type="button" onClick={increment}>
        +
      </button>
      <button type="button" onClick={decrement}>
        -
      </button>
      <p>
        Increase the counter will change back after 1 sec and the value is:
        {counter}
      </p>
    </div>
  );
};

export default compose(
  withModelProps({ counter, increment, decrement }),
  withStyles(styles),
)(Chat);
