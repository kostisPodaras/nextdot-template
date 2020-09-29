import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from './TextField';

type Props = {
  id: string,
  label: string,
  placeholder: string,
  helperText: string,
  input: Object,
  meta: Object,
  multiple: Boolean,
  required: Boolean,
  options: Array,
};

const AutocompleteField = ({
  id,
  label,
  placeholder,
  helperText,
  input,
  meta,
  multiple,
  required,
  options,
  ...rest
}: Props) => (
  <Autocomplete
    multiple={multiple}
    value={multiple ? input.value || [] : input.value}
    onChange={(event, values) => input.onChange(values)}
    options={options}
    renderInput={({ InputLabelProps, ...restParams }) => (
      <TextField
        id={id}
        required={required}
        label={label}
        placeholder={placeholder}
        helperText={helperText}
        meta={meta}
        InputLabelProps={rest.InputLabelProps}
        {...restParams}
      />
    )}
    {...rest}
  />
);
export default AutocompleteField;
