import React from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

export const SEO = ({ title, description, author }) => (
  <StaticQuery
    query={query}
    render={({
               site: {
                 siteMetadata: {
                   defaultTitle,
                   defaultDescription,
                   defaultAuthor,
                   // siteUrl,
                   // defaultImage,
                 },
               },
             }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        author: author || defaultAuthor,
        // image: `${siteUrl}${image || defaultImage}`,
        // url: `${siteUrl}${pathname || "/"}`,
      };
      return (
        <>
          <Helmet title={seo.title}>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            {/*{seo.url && <meta property="og:url" content={seo.url} />}*/}
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.author && <meta name="author" content={seo.author} />}
            {seo.description && (
              <meta property="og:description" content={seo.description} />
            )}
            {/*{seo.image && <meta property="og:image" content={seo.image} />}*/}
            <meta name="twitter:card" content="summary_large_image" />
            {seo.title && <meta name="twitter:title" content={seo.title} />}
            {seo.description && (
              <meta name="twitter:description" content={seo.description} />
            )}
            {/*{seo.image && <meta name="twitter:image" content={seo.image} />}*/}
          </Helmet>
        </>
      )
    }}
  />
);

const query = graphql`
  query SEO {
      site {
          siteMetadata {
              seo {
                  defaultTitle: title
                  defaultDescription: description
                  defaultAuthor: author
              }
          }
      }
  }
`;
