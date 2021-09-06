import React from 'react';
import Pagination from '../../../shared/Pagination';

const PaginationExample = () => {
  return (
    <>
      <h2 className='mb-15'>Pagination</h2>

      <section className='card-wrap'>
        <Pagination pageCount={10} />
      </section>
    </>
  );
};

export default PaginationExample;
