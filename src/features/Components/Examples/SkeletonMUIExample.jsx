import React, {useEffect, useState} from 'react';
import SkeletonMUI from '../../../shared/SkeletonMUI';

import {ReactComponent as LogoIcon} from '../../../assets/images/logo.svg';

const SkeletonMUIExample = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => setLoading(false), 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <h2 className='mb-15'>SkeletonMUI</h2>

      <section className='card-wrap'>
        <p>
          <b>Props:</b> animation, children, className, component, height, loading, variant, width
        </p>

        <p className='mb-10 mt-25'>animation="pulse / wave / false"</p>
        <div className='flex gap-25'>
          <SkeletonMUI height={70} width={100} loading />
          <SkeletonMUI animation='wave' height={70} width={100} loading />
          <SkeletonMUI animation={false} height={70} width={100} loading />
        </div>

        <p className='mb-10 mt-25'>children</p>
        <SkeletonMUI variant='rect' loading={loading}>
          <LogoIcon />
        </SkeletonMUI>
        <SkeletonMUI loading={loading}>
          <h3>Some loaded title</h3>
        </SkeletonMUI>
        <SkeletonMUI loading={loading}>
          <h4>Some loaded subtitle</h4>
        </SkeletonMUI>

        <p className='mb-10 mt-25'>
          height={'{70}'} width={'{100}'}
        </p>
        <SkeletonMUI variant='rect' height={70} width={100} loading />

        <p className='mb-10 mt-25'>variant="text / circle / rect"</p>
        <div className='flex flex--column'>
          <SkeletonMUI variant='text' width={210} loading />
          <SkeletonMUI className='mb-4' variant='circle' width={40} height={40} loading />
          <SkeletonMUI variant='rect' width={210} height={118} loading />
        </div>
      </section>
    </>
  );
};

export default SkeletonMUIExample;
