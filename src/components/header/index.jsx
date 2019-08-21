import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import HeadRoom from 'react-headroom';
import './index.scss';



export const Header = () => {
  let isDarkMode = false;

  const toggleDarMode = () => {
    // window.__THEME_MODE = 'light';
    console.log('window.__THEME_MOMDE :: ', window.__THEME_MODE);
    console.log('window.matchMedia :: ', window.matchMedia("(prefers-color-scheme: dark)"));
    window.__THEME_MODE = window.__THEME_MODE === 'dark' ? 'light' : 'dark';
    document.getElementsByTagName('html')[0].classList[window.__THEME_MODE === 'dark' ? 'add' : 'remove']('darkmode');
  };

  return (
    <StaticQuery
      query={graphql`
      query HeaderQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
      render={data => (
        <HeadRoom>
          <header className="header">
            <div className="header__title flex justify-between-sort">
              <Link to="/" className="header__title__text hee-labeled">🎒{data.site.siteMetadata.title}</Link>
            </div>
            <div onClick={() => toggleDarMode()}>
              darkmode
            </div>
          </header>
        </HeadRoom>
      )}
    />

  );
}
