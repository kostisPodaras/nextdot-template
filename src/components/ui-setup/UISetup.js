import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import withStyles from '@material-ui/core/styles/withStyles';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { Provider } from 'react-redux';

import store from 'store';
import theme from './theme';
import styles from './styles';

type UISetupStylesProps = {
  children: HTMLElement | Object | [],
};

const UISetupStyles = withStyles(styles)(({ children }: UISetupStylesProps) => (
  <>
    <CssBaseline />
    <div>{children}</div>
  </>
));

type UISetupProps = {
  children: HTMLElement | Object | [],
};

const UISetup = ({ children }: UISetupProps) => (
  <Provider store={store}>
    <ThemeProvider theme={theme()}>
      <UISetupStyles>{children}</UISetupStyles>
    </ThemeProvider>
  </Provider>
);

export default UISetup;
