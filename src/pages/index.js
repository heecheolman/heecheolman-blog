import React from "react"
import { graphql } from "gatsby"

/** components */
import { Layout } from './../layout'
import { PostList } from './../components/post-list';

const IndexPage = ({ data }) => {
  const { siteMetadata } = data.site;
  const posts = data.allMarkdownRemark.edges;

  return (
    <div>
      <Layout title={siteMetadata.title}>
        <PostList posts={posts} />
      </Layout>
    </div>
  )
}
export default IndexPage;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { ne: null } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 200, truncate: true)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            category
          }
        }
      }
    }
  }
`
