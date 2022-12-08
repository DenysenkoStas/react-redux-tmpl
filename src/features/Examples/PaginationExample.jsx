import React, {useEffect, useState} from 'react';
import {ExampleLayout} from './Examples';
import Pagination from '../../shared/Pagination';
import { capitalize } from "../../helpers/functions";

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
    <ExampleLayout propsList='active, className, marginPagesDisplayed, onChange, pageCount, pageRangeDisplayed, position'>
      {posts &&
        posts.map(({id, title, body}) => (
          <article key={id} className='demo-article mb-10 p-8'>
            <h3 className='truncated'>{id}. {capitalize(title)}</h3>
            <p className='truncated'>{capitalize(body)}</p>
          </article>
        ))}

      <Pagination pageCount={totalPages} onChange={handlePageClick} />
    </ExampleLayout>
  );
};

export default PaginationExample;
