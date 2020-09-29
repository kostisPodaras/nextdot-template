import React from 'react';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import { v4 } from 'uuid';

import Slider from 'components/slider';

import Image from '../image';
import styles from './styles';

type Props = {
  className?: string,
  classes: Object,
  content: [],
  background?: boolean,
};

const ImageSlider = ({
  classes,
  className,
  content,
  background,
  ...rest
}: Props) => (
  <div
    className={classNames(classes.wrapper, background && classes.background)}>
    <Slider {...rest}>
      {content.map((image) => (
        <div className={classes.imageContainer} key={v4()}>
          <Image
            content={image}
            className={classNames(classes.image, className)}
          />
        </div>
      ))}
    </Slider>
  </div>
);

ImageSlider.defaultProps = {
  background: false,
  className: '',
};

export default withStyles(styles)(ImageSlider);
