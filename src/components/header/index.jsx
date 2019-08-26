import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import HeadRoom from 'react-headroom';
import './index.scss';

export const Header = () => {
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
          </header>
        </HeadRoom>
      )}
    />

  );
}
