import React from 'react'

import { Link, Route, useRouteMatch } from 'react-router-dom';

import Post from './Post';

const blogPosts = [
  {
    title: 'Blog Post #1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    title: 'Blog Post #2',
    content: 'Maecenas consequat sagittis orci quis accumsan.'
  },
  {
    title: 'Blog Post #3',
    content: 'Curabitur fringilla, risus dignissim egestas elementum, leo sapien pretium est, quis imperdiet eros orci et ligula.'
  }
];

export default function Blog() {
  const { path, url } = useRouteMatch();
  return (
    <div>
      <h1>This is the Blog</h1>
      <nav>
        {
          blogPosts.map((post, index) => (
            <>
              <Link to={`/blog/${index}`}>
                {post.title}
              </Link>
              <br />
            </>
          ))
        }
      </nav>
      <Route exact path={path}>
        <h2>Please choose a blog post</h2>
      </Route>
      <Route path={`${url}/:id`}>
        <Post posts={blogPosts} />
      </Route>
    </div>
  );
};
