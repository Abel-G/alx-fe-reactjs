import React, { useState } from 'react';
import { useQuery } from 'react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return response.json();
};

const PostsComponent = () => {
  const { isLoading, isError, error, data, refetch } = useQuery('posts', fetchPosts, {
    cacheTime: 1000 * 60 * 3,
    staleTime: 1000 * 60 * 1,
    refetchOnWindowFocus: true,
    keepPreviousData: true,
  });

  if (isLoading) return <p>Loading posts...</p>;

  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <button onClick={refetch}>Refetch Posts</button>
    </div>
  );
};

export default PostsComponent;