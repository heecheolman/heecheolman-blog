import React from 'react';
import { Footer } from './../components/footer';
import './index.scss';
import { Helmet } from 'react-helmet'
import { graphql, StaticQuery } from 'gatsby';

export const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            seo {
              title
            }
          }
        }
      }
    `}
    render={data => {
      const {
        site: {
          siteMetadata: {
            seo: {
              title
            }
          }
        }
      } = data;
      return (
        <div className="layout">
          <Helmet>
            <title>{title}</title>
          </Helmet>
          { children }
          <Footer />
        </div>
      )
    }}
  />
);
