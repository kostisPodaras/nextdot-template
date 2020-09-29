import React from 'react';
import SlickSlider from 'react-slick';
import withStyles from '@material-ui/core/styles/withStyles';

import config from './config';
import styles from './styles';

const Slider = (props) => <SlickSlider {...{ ...config, ...props }} />;

export default withStyles(styles)(Slider);
