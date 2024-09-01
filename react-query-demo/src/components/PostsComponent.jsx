import React, { useState } from 'react';
import { isError, useQuery } from 'react-query';

export const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return response.json();
};

export const PostsComponent = () => {
    const { isLoading, error, data, refetch } = useQuery('posts', fetchPosts);
  
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
