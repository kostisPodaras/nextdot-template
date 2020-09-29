import React from 'react';

type State = {
  hasError: boolean,
};

const withErrorBoundary = (errorMessage) => (Component) =>
  class ErrorBoundary extends React.Component<*, State> {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }

    componentDidCatch(error, info) {
      this.setState({ hasError: true });
      log(error, info);
    }

    render() {
      // eslint-disable-next-line react/destructuring-assignment
      return this?.state?.hasError ? (
        <span style={{ color: 'red', margin: 'auto' }}>{errorMessage}</span>
      ) : (
        <Component {...this.props} />
      );
    }
  };

export default withErrorBoundary;
