import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import SpinkitSpinner from 'react-spinkit';

import styles from './styles';

type Props = {
  theme: Object,
  classes: Object,
};

export const Loading = ({ theme, classes }: Props) => (
  <Grid
    container
    direction="column"
    alignItems="center"
    justify="center"
    className={classes.spinner}>
    <Typography paragraph variant="body2" color="primary">
      Loading...
    </Typography>
    <SpinkitSpinner name="three-bounce" color={theme.palette.primary.main} />
  </Grid>
);

export default withStyles(styles, { withTheme: true })(Loading);
