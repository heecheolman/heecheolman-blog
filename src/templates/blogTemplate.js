import React from "react"
import { graphql } from "gatsby"

import './index.scss'
import { Header } from './../components/header';
import { Layout } from './../layout';

export default function Template({ data }) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html, tableOfContents } = markdownRemark;
  return (
    <>
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
      </Layout>
    </>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
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
      }
    }
  }
`
