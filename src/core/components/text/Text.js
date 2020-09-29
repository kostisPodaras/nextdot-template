import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { v4 } from 'uuid';

import ViewMore from 'components/view-more';
import styles from './style';

type Props = {
  text?: string | Array,
  children?: HTMLElement | Object | [],
  fullWidth?: boolean,
  maxTextHeight?: number | string,
  classes: Object,
  gridClassName?: string,
  color?: string,
  variant: string,
};

const Text = ({
  text = '',
  children = null,
  fullWidth = false,
  maxTextHeight = 'none',
  gridClassName,
  color,
  classes,
  variant,
  ...rest
}: Props) => {
  if (!text || !text.length) {
    return null;
  }

  if (text instanceof Array && text.length > 4) {
    console.warn(
      '*** WARNING: Text Component - Max content text columns, allowed, is 4...',
    );
  }

  return text instanceof Array ? (
    <Grid
      container
      alignItems="flex-start"
      justify="flex-start"
      className={gridClassName}>
      {text.map((textItem) => (
        <Grid
          item
          key={v4()}
          xs={12}
          sm={fullWidth ? 12 : 6}
          lg={fullWidth ? 12 : Math.floor(12 / text.length)}
          className={classes.textCol}>
          <Typography
            color={color}
            variant={variant}
            dangerouslySetInnerHTML={{ __html: textItem }}
            {...rest}
          />
        </Grid>
      ))}
    </Grid>
  ) : (
    <Typography color={color} {...rest}>
      <span className={classes.textWrapper}>
        {children}
        <span
          dangerouslySetInnerHTML={{
            __html: text,
          }}
        />
        <ViewMore maxTextHeight={maxTextHeight} />
      </span>
    </Typography>
  );
};

Text.defaultProps = {
  text: '',
  children: null,
  fullWidth: false,
  maxTextHeight: 'none',
  gridClassName: '',
  color: 'initial',
};

export default withStyles(styles)(Text);
