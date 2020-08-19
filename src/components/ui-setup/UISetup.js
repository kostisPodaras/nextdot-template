import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import withStyles from '@material-ui/core/styles/withStyles';
import ThemeProvider from '@material-ui/styles/ThemeProvider';

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
  // history: Object,
  children: HTMLElement | Object | [],
};

const UISetup = ({
  // history,
  children,
}: UISetupProps) => (
  //   <LocationProvider history={history}>
  <ThemeProvider theme={theme()}>
    <UISetupStyles>{children}</UISetupStyles>
  </ThemeProvider>
  //   </LocationProvider>
);

export default UISetup;
