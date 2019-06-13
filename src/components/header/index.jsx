import React from 'react';
import { Link } from 'gatsby';

import './index.scss';

export const Header = ({ title }) => (
  <header className="header">
    <h1><Link to="/">{title || 'heecheolman 로그'} 또는 머리</Link></h1>
  </header>
);
