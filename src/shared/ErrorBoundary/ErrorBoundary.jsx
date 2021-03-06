import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './ErrorBoundary.scss';

class ErrorBoundary extends Component {
  state = {
    error: null,
    errorInfo: null
  };

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    const {className, children, details} = this.props;
    const {error, errorInfo} = this.state;

    if (errorInfo) {
      return (
        <div className={`error-boundary${className ? ` ${className}` : ''}`}>
          <h2 className='error-boundary__title'>Something went wrong!</h2>
          {details && (
            <details className='error-boundary__details'>
              <summary className='error-boundary__summary'>Details</summary>
              <div className='error-boundary__desc'>
                <div className='error-boundary__desc--inner'>
                  {error && error.toString()}
                  <br />
                  {errorInfo.componentStack}
                </div>
              </div>
            </details>
          )}
        </div>
      );
    }
    // Normally, just render children
    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  details: PropTypes.bool
};

export default ErrorBoundary;
