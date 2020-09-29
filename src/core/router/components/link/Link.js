import React from 'react';
import classNames from 'classnames';
import { Link as GatsbyLink } from 'gatsby';
import { Link as ReachLink } from '@reach/router';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import styles from './style';

type Props = {
  classes: Object,
  className?: string,
  to?: string,
  text?: string,
  children?: HTMLElement | Object | [],

  onClick?: () => void,
};

const Link = ({
  classes,
  className = '',
  to = '',
  text = '',
  children = null,
  onClick = () => {},
  ...rest
}: Props) => {
  const withText = text ? (
    <Typography
      className={classes.linkText}
      onClick={() => {
        onClick && onClick();
      }}
      {...rest}>
      {children}
      {text}
    </Typography>
  ) : null;

  const onlyChildren = children ? (
    <Grid
      container
      justify="center"
      onClick={() => {
        onClick && onClick();
      }}
      className={classNames(classes.link, className)}
      {...rest}>
      {children}
    </Grid>
  ) : null;

  // eslint-disable-next-line no-nested-ternary
  return to?.startsWith('/') ? (
    to.match(/app\/.+/g) ? (
      <ReachLink
        to={to}
        className={classNames(classes.link, className)}
        {...rest}>
        {withText || onlyChildren}
      </ReachLink>
    ) : (
      <GatsbyLink
        rel="prefetch"
        to={to}
        className={classNames(classes.link, className)}
        {...rest}>
        {withText || onlyChildren}
      </GatsbyLink>
    )
  ) : link !== '#' ? (
    <OutboundLink
      href={link}
      target="_blank"
      rel="noreferrer"
      className={classNames(classes.link, className)}
      {...rest}>
      {withText || onlyChildren}
    </OutboundLink>
  ) : (
    withText || onlyChildren
  );
};

Link.defaultProps = {
  className: '',
  to: '',
  text: '',
  children: null,
  onClick: () => {},
};

export default withStyles(styles)(Link);
