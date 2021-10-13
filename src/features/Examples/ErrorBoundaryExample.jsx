import React from 'react';
import ErrorBoundary from '../../shared/ErrorBoundary';

const ErrorBoundaryExample = () => {
  return (
    <>
      <h2 className='mb-15'>ErrorBoundary</h2>

      <div className='card-wrap flex gap-25'>
        <ErrorBoundary>{error}</ErrorBoundary>
      </div>
    </>
  );
};

export default ErrorBoundaryExample;
