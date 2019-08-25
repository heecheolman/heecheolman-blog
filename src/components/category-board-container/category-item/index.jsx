import React from 'react';
import './index.scss';
import { Link } from 'gatsby';

export const CategoryItem = ({data}) => {
  return (
    <Link className="category-item" to={data.fields.slug}>
      📖 <span className="category-item__text">{data.frontmatter.title}</span>
    </Link>
  );
};
