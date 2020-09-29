import React, { useRef, createRef, useEffect, useState } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { remToPx } from 'utils';

import styles from './style';
import content from './content';

type Props = {
  classes: Object,
  theme: Object,
  maxTextHeight: number | string,
};

function ViewMore(props: Props) {
  const containerRef = useRef(null);
  const containerHeightRef = useRef();
  const refRef = useRef();
  useState(() => {
    refRef.current = createRef();
    return true;
  });

  useEffect(() => {
    if (!refRef.current.current) {
      return;
    }

    const node = refRef.current.current;
    const container = node.parentNode;

    const maxTextHeight = props.theme.typography.pxToRem(props.maxTextHeight);

    if (container.offsetHeight > remToPx(maxTextHeight)) {
      node.style.display = 'block';
    }

    if (container !== containerRef.current) {
      const parentStyle = container.style;
      containerHeightRef.current = container.offsetHeight;

      parentStyle.maxHeight = maxTextHeight;
      containerRef.current = container;
    }
  });

  const onClick = () => {
    const selfStyle = refRef.current.current.style;
    const parentStyle = containerRef.current.style;

    parentStyle.maxHeight = `${containerHeightRef.current}px`;
    selfStyle.display = 'none';
  };

  const { classes, maxTextHeight } = props;

  return Number.isInteger(maxTextHeight) ? (
    <span className={classes.viewMore} ref={refRef.current}>
      <Button
        size="small"
        color="primary"
        onClick={onClick}
        className={classes.button}>
        <Typography variant="caption" color="inherit" className={classes.label}>
          {content.text}
        </Typography>
      </Button>
    </span>
  ) : null;
}

export default withStyles(styles, { withTheme: true })(ViewMore);
