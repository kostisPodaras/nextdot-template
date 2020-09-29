import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';

import TextField from './TextField';

type Props = {
  input: Object,
  content: HTMLElement,
};

const SelectField = ({
  content,
  input: { value, onChange, ...other },
  ...rest
}: Props) => (
  <TextField
    {...other}
    {...rest}
    select
    SelectProps={{
      ...other,
      ...rest,
      value,
      onChange,
    }}>
    {content || <MenuItem>No value</MenuItem>}
  </TextField>
);

export default SelectField;
