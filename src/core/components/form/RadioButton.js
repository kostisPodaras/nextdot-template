import React from 'react';
import Radio from '@material-ui/core/Radio';

type Props = {
  input: Object,
  meta: Object,
};

const RadioButton = ({
  input: { checked, value, name, onChange, ...restInput },
  meta,
  ...rest
}: Props) => (
  <Radio
    {...rest}
    name={name}
    InputProps={restInput}
    onChange={onChange}
    checked={!!checked}
    value={value}
  />
);

export default RadioButton;
