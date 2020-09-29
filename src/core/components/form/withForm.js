import React from 'react';

const withForm = (mapProps) => (MUIComponent) => (props) => (
  <MUIComponent {...mapProps(props)} />
);

export default withForm;
