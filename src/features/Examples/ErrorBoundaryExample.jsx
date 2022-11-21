import React, {useState} from 'react';
import {ExampleLayout} from './Examples';
import ErrorBoundary from '../../shared/ErrorBoundary';
import {ButtonMUI} from '../../shared';

const BuggyCounter = ({title = 'Counter'}) => {
  const [counter, setCounter] = useState(0);
  const handleCounter = () => setCounter((prev) => prev + 1);

  if (counter === 3) throw new Error('I crashed!');

  return (
    <ButtonMUI onClick={handleCounter}>
      {title}: {counter}
    </ButtonMUI>
  );
};

const ErrorBoundaryExample = () => {
  return (
    <ExampleLayout propsList='children, className, details'>
      <div className='flex gap-25 mt-25'>
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>

        <ErrorBoundary details>
          <BuggyCounter title='With details' />
        </ErrorBoundary>
      </div>
    </ExampleLayout>
  );
};

export default ErrorBoundaryExample;
