import React from 'react';

import { PostLink } from './../post-link';
import './index.scss';

export const PostList = ({ posts }) => {
  return (
    <div>
      <h2>에 적재된 포스트들</h2>
      <ul>
        {posts.map(({ node }, index) => (
          <li key={index}><PostLink link={node.fields.slug} linkTitle={node.frontmatter.title} /></li>
        ))}
      </ul>
    </div>
  )
}
