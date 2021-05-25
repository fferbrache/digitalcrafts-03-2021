import React from 'react';
import { useParams } from 'react-router-dom';

export default function Post(props) {
  const { id } = useParams();
  const post = props.posts[id];
  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </article>
  )
}
