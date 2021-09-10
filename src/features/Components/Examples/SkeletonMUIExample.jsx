import React from 'react';
import SkeletonMUI from '../../../shared/SkeletonMUI';

const SkeletonMUIExample = () => {
  return (
    <>
      <h2 className='mb-15'>SkeletonMUI</h2>

      <section className='card-wrap flex gap-25'>
        <div>
          <SkeletonMUI variant='text' loading />
          <SkeletonMUI variant='circle' width={40} height={40} loading />
          <SkeletonMUI variant='rect' width={210} height={118} loading />
        </div>

        <SkeletonMUI variant='text' width={210} height={50} loading>
          <p>Text</p>
        </SkeletonMUI>

        <SkeletonMUI variant='rect' width={210} height={50} loading>
          <div>Rectangle</div>
        </SkeletonMUI>

        <SkeletonMUI variant='circle' width={50} height={50} loading>
          <div>Circle</div>
        </SkeletonMUI>
      </section>
    </>
  );
};

export default SkeletonMUIExample;
