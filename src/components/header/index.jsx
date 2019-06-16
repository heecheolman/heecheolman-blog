import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import HeadRoom from 'react-headroom';
import './index.scss';

export const Header = () => (
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
          {/*<div className="header__github flex flex-center-sort">*/}
            {/*<a href={data.site.siteMetadata.github}><Github className="header__github__icon" /></a>*/}
          {/*</div>*/}
        </header>
      </HeadRoom>
    )}
  />

);
