import React, {useEffect, useState} from 'react';
import Pagination from '../../shared/Pagination';

const PaginationExample = () => {
  const [posts, setPosts] = useState([]);
  const totalPages = 20;

  const getPost = (page = 1) => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`)
      .then((res) => res.json())
      .then((json) => setPosts(json));
  };

  useEffect(() => {
    getPost();
  }, []);

  const handlePageClick = (e) => getPost(e.selected + 1);

  return (
    <>
      <h2 className='mb-15'>Pagination</h2>

      <section className='card-wrap'>
        <p className='mb-25'>
          <b>Props:</b> active, className, marginPagesDisplayed, onChange, pageCount, pageRangeDisplayed, position
        </p>

        {posts &&
          posts.map(({id, title, body}) => (
            <article key={id} className='demo-article mb-10 p-8'>
              <h3>
                <span>{id}. </span>
                <span className='demo-article__title'>{title}</span>
              </h3>
              <p className='demo-article__text'>{body}</p>
            </article>
          ))}

        <Pagination pageCount={totalPages} onChange={handlePageClick} />
      </section>
    </>
  );
};

export default PaginationExample;
