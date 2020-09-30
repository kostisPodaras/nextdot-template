import React from 'react';
import { navigate } from '@reach/router';
import withStyles from '@material-ui/core/styles/withStyles';

import { withModelProps } from 'core/components/model-props';
import { compose } from 'core/utils';
import { signIn } from 'models/user';

import styles from './styles';

type Props = {
  classes: Object,

  signIn: () => {},
};

const Home = ({ classes, signIn }: Props) => {
  return (
    <div className={classes.container}>
      <p>This will stimulate Home Page</p>
      <p>
        Button below will stimulate Sign Up / Sign In, which will redirect us to
        app page
      </p>
      <button
        onClick={() => {
          signIn();
          navigate('app');
        }}
        type="button">
        Login
      </button>
    </div>
  );
};

export default compose(withModelProps({ signIn }), withStyles(styles))(Home);
