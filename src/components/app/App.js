import React from 'react';
import { Router } from '@reach/router';
import withStyles from '@material-ui/core/styles/withStyles';

import { Chat } from 'components/app/components';

import { Profile } from './routes';
import styles from './styles';

const App = () => {
  return (
    <div>
      <Router basepath="/app">
        <Chat path="/" />
        <Profile path="/profile" />
      </Router>
    </div>
  );
};

export default withStyles(styles)(App);
