import React from 'react';
import LoaderMUI from '../../../shared/LoaderMUI';
import ButtonMUI from '../../../shared/ButtonMUI';
import {useToggle} from '../../../helpers/hooks';

const LoaderMUIExample = () => {
  const [loader, toggleLoader] = useToggle(false);
  const [secondLoader, toggleSecondLoader] = useToggle(false);
  const [linearLoader, toggleLinearLoader] = useToggle(false);

  return (
    <>
      <h2 className='mb-15'>LoaderMUI</h2>

      <section className='card-wrap flex gap-25'>
        <ButtonMUI onClick={toggleLoader}>Show loader</ButtonMUI>
        <ButtonMUI variant='outlined' onClick={toggleSecondLoader}>
          Without background
        </ButtonMUI>
        <ButtonMUI color='secondary' onClick={toggleLinearLoader}>
          Toggle linear loader
        </ButtonMUI>

        {loader && <LoaderMUI onClick={toggleLoader} />}
        {secondLoader && <LoaderMUI withBg={false} onClick={toggleSecondLoader} />}
      </section>

      {linearLoader && <LoaderMUI linear />}
    </>
  );
};

export default LoaderMUIExample;
