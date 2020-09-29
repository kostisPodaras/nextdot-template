const mapProps = ({ meta: { touched, error, warning } = {}, input, ...rest }) =>
  touched && (error || warning)
    ? {
        ...rest,
        ...input,
        error: Boolean(error || warning),
        helperText: error || warning,
      }
    : {
        ...rest,
        ...input,
        // helperText: ' ', TODO this solve the issue with helperText position. DO we need it here?
      };

export default mapProps;
