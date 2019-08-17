import React from "react"
import { graphql } from "gatsby"

import './index.scss'
import { Header } from './../components/header';
import { Utterences } from '../components/utterances';
import { Layout } from './../layout';
import { SEO } from './../components/seo';

export default function Template({ data }) {
  const {
    markdownRemark,
    site: {
      siteMetadata: {
        utterances
      }
    }
  } = data;
  const {
    frontmatter,
    html,
    tableOfContents
  } = markdownRemark;
  return (
    <>
      <SEO title={frontmatter.title}
           description={frontmatter.description}
           author={frontmatter.author}
      />
      <Header />
      <Layout>
        <div className="markdown-body">
          <div className="frontmatter">
            <h1>🚀 {frontmatter.title}</h1>
            <div>
              <h2>📌 목차</h2>
              <div dangerouslySetInnerHTML={{ __html: tableOfContents }} />
            </div>
          </div>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
        <Utterences repo={utterances} />
      </Layout>
    </>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        utterances 
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 280)
      html
      tableOfContents
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        author
      }
    }
  }
`;
