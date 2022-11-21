import React from 'react';
import {useToggle} from '../../helpers/hooks';
import {ExampleLayout} from './Examples';
import {LoaderMUI, ButtonMUI} from '../../shared';

const LoaderMUIExample = () => {
  const [primary, togglePrimary] = useToggle(false);
  const [secondary, toggleSecondary] = useToggle(false);
  const [size, toggleSize] = useToggle(false);
  const [linear, toggleLinear] = useToggle(false);
  const [linear2, toggleLinear2] = useToggle(false);
  const [noBg, toggleNoBg] = useToggle(false);
  const [noBg2, toggleNoBg2] = useToggle(false);

  return (
    <ExampleLayout propsList='className, color, circleSize, linear, noBg, onClick'>
      <p className='mb-10 mt-25'>color="primary / secondary"</p>
      <div className='flex gap-25'>
        <ButtonMUI color='primary' onClick={togglePrimary}>
          Primary
        </ButtonMUI>
        {primary && <LoaderMUI onClick={togglePrimary} />}

        <ButtonMUI color='secondary' onClick={toggleSecondary}>
          Secondary
        </ButtonMUI>
        {secondary && <LoaderMUI color='secondary' onClick={toggleSecondary} />}
      </div>

      <p className='mb-10 mt-25'>circleSize={'{70}'}</p>
      <div className='flex gap-25'>
        <ButtonMUI onClick={toggleSize}>Circle size</ButtonMUI>
        {size && <LoaderMUI circleSize={70} onClick={toggleSize} />}
      </div>

      <p className='mb-10 mt-25'>linear</p>
      <div className='flex gap-25'>
        <ButtonMUI color='primary' onClick={toggleLinear}>
          Linear
        </ButtonMUI>
        <ButtonMUI color='secondary' onClick={toggleLinear2}>
          Linear
        </ButtonMUI>
      </div>

      <p className='mb-10 mt-25'>noBg</p>
      <div className='flex gap-25'>
        <ButtonMUI color='primary' onClick={toggleNoBg}>
          Without background
        </ButtonMUI>
        {noBg && <LoaderMUI noBg onClick={toggleNoBg} />}

        <ButtonMUI color='secondary' onClick={toggleNoBg2}>
          Without background
        </ButtonMUI>
        {noBg2 && <LoaderMUI color='secondary' noBg onClick={toggleNoBg2} />}
      </div>

      {linear && <LoaderMUI linear />}
      {linear2 && <LoaderMUI color='secondary' linear />}
    </ExampleLayout>
  );
};

export default LoaderMUIExample;
