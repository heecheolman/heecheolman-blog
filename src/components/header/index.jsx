import React from 'react';
import { Link } from 'gatsby';

import DoodleGithub from './../../assets/svg/doodle-github.svg';

import './index.scss';

export const Header = ({ title, github }) => (
  <header className="header flex justify-between-sort align-center">
    <div className="header__title flex justify-between-sort">
      <Link to="/" className="header__title__text">{title}</Link>
    </div>
    <div className="header__github flex flex-center-sort">
      <a href={github}><DoodleGithub className="header__github__icon" /></a>
    </div>
  </header>
);
