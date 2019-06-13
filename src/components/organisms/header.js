import React from 'react';
import styles from './header.module.scss';
import { Link, graphql, StaticQuery } from "gatsby"

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className={styles.header}>
        <h1>{data.site.siteMetadata.title}</h1>
        <Link to="/">main</Link>
        <Link to="/about">about</Link>
      </div>
    )}
  />
);

export default Header;
