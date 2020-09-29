import React from 'react';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import withWidth from '@material-ui/core/withWidth';
import SVGInline from 'react-svg-inline';

import isBrowser from 'utils/isBrowser';
import isSvg from 'utils/isSvg';
import compose from 'utils/compose';

import { defaultImage } from './images';
import styles from './styles';

type Props = {
  content?: string | Object,
  classes: Object,
  theme: Object,
  style?: Object,
  imgStyle?: Object,
  width: string,
  className?: string,
  background?: boolean,
  backgroundColor?: string,
};

const Image = ({
  classes,
  theme,
  style,
  imgStyle,
  width,
  className,
  background,
  backgroundColor,
  content,
  ...rest
}: Props) => {
  let image;

  if (
    content instanceof Object &&
    (!isBrowser() || (isBrowser() && !(content instanceof File)))
  ) {
    image = do {
      if (width === 'xs') {
        content.xs;
      } else if (width === 'sm') {
        content.sm || content.xs;
      } else if (width === 'md') {
        content.md || content.sm || content.xs;
      } else if (width === 'lg') {
        content.lg || content.md || content.sm || content.xs;
      } else {
        content.xl || content.lg || content.md || content.sm || content.xs;
      }
    };
  } else {
    image = content;
  }

  if (!image) {
    console.warn(
      `*** WARNING: Image Component - image not provided. Default is used.`,
    );

    image = defaultImage;
  }

  const svg = isSvg(image);
  const ImageComponent = do {
    if (svg) {
      <SVGInline
        svg={image}
        style={style}
        className={classNames(
          classes.image,
          background && classes.backgroundImage,
          className,
        )}
        {...rest}
      />;
    } else {
      <img
        src={image}
        style={style}
        alt=""
        className={classNames(
          classes.image,
          background && classes.backgroundImage,
          className,
        )}
        {...rest}
      />;
    }
  };

  return ImageComponent;
};

Image.defaultProps = {
  content: '',
  background: false,
  backgroundColor: '',
  className: '',
  style: {},
  imgStyle: {},
};

export default compose(
  withWidth(),
  withStyles(styles, { withTheme: true }),
)(Image);
