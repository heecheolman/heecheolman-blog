import React from 'react';
import styles from './header.module.scss';
import { Link } from 'gatsby';

const Header = () => (
  <div className={styles.header}>
    희철맨입니다.
    <Link to="/">main</Link>
    <Link to="/about">about</Link>
  </div>
);

export default Header;
