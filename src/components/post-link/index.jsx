import React from 'react';
import { Link } from 'gatsby';

import './index.scss';

export const PostLink = ({ link, linkTitle }) => (
  <Link to={link}>{linkTitle}</Link>
)
