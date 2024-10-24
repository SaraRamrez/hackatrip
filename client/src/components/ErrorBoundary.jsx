import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {

    return { hasError: true };
  }

  componentDidCatch(errorInfo) {

    console.log(errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Ups!!!... Algo salió mal, pero estamos trabajando en ello!</h1>;
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
