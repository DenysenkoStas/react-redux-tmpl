import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './ErrorBoundary.module.scss';

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
        <div className={`${styles.root}${className ? ` ${className}` : ''}`}>
          <h2 className={styles.title}>Something went wrong!</h2>
          {details && (
            <details className={styles.details}>
              <summary className={styles.summary}>Details</summary>
              <div className={styles.desc}>
                <div className={styles.descInner}>
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
