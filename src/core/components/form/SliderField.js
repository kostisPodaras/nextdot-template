import React from 'react';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';

import { withValue } from 'components/withValue';

type Props = {
  className?: string,
  labelClassName?: string,
  labelVariant?: string,
  value?: number,
  onDragEndOnly?: boolean,
  label: string,

  onChange?: () => void,
  handleValueChange: () => void,
};

let sliding = false;

const SliderField = ({
  className,
  labelClassName,
  labelVariant,
  value,
  label,
  onChange,
  onDragEndOnly,
  handleValueChange,
  ...rest
}: Props) => (
  <div className={className}>
    <Typography
      id="label"
      color="primary"
      variant={labelVariant}
      className={labelClassName}>
      {label}
    </Typography>
    <Slider
      value={value}
      aria-labelledby="label"
      onDragEnd={() => {
        sliding = false;
        onChange(value);
      }}
      onDragStart={() => {
        sliding = true;
      }}
      onChange={(event, value) => {
        handleValueChange(
          value,
          () => (!sliding || !onDragEndOnly) && onChange(value),
        );
      }}
      {...rest}
    />
  </div>
);

SliderField.defaultProps = {
  value: 0,
  className: '',
  labelClassName: '',
  labelVariant: 'body2',
  onDragEndOnly: false,
  onChange: () => {},
};

export default withValue(SliderField);
