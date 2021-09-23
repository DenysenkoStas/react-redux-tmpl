import React from 'react';
import LoaderMUI from '../../../shared/LoaderMUI';
import ButtonMUI from '../../../shared/ButtonMUI';
import {useToggle} from '../../../helpers/hooks';

const LoaderMUIExample = () => {
  const [primary, togglePrimary] = useToggle(false);
  const [secondary, toggleSecondary] = useToggle(false);
  const [size, toggleSize] = useToggle(false);
  const [linear, toggleLinear] = useToggle(false);
  const [linear2, toggleLinear2] = useToggle(false);
  const [noBg, toggleNoBg] = useToggle(false);
  const [noBg2, toggleNoBg2] = useToggle(false);

  return (
    <>
      <h2 className='mb-15'>LoaderMUI</h2>

      <section className='card-wrap'>
        <p>
          <b>Props:</b> className, color, circleSize, linear, noBg, onClick
        </p>

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
      </section>

      {linear && <LoaderMUI linear />}
      {linear2 && <LoaderMUI color='secondary' linear />}
    </>
  );
};

export default LoaderMUIExample;
