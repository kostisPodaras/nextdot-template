import React from 'react';
import ChipInput from 'material-ui-chip-input';

import TextField from './TextField';

type Props = {
  input: Object,
  label?: string,
};

const ChipsField = ({
  label,
  input: { value, onChange, ...other },
  ...rest
}: Props) => (
  <TextField
    {...other}
    {...rest}
    label={label}
    value={value}
    InputProps={{
      inputComponent: ChipInput,
      inputProps: {
        className: 'react-chip-input',
        fullWidth: true,
        disableUnderline: true,
        helperText: undefined,
        value: undefined,
        defaultValue: value || undefined,
        blurBehavior: 'add',
        onChange: (value) => onChange(value.length ? value : undefined),
      },
    }}
  />
);

ChipsField.defaultProps = {
  label: '',
};

export default ChipsField;
