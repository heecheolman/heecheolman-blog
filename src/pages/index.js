import React from "react"
import { graphql } from "gatsby"

/** components */
import { Layout } from './../layout';
import { ProfileCard } from './../components/profile-card';
import { CategoryBoardContainer } from '../components/category-board-container'

const IndexPage = ({ data }) => {
  const { siteMetadata } = data.site;
  console.log(siteMetadata.github);
  const posts = data.allMarkdownRemark.edges;
  const categorize = [];
  // let categories = [];

  posts
  .filter(({ node }) => !!node.frontmatter.category)
  .map(({ node }) => {
    const { category } = node.frontmatter;
    if (!categorize.hasOwnProperty(category)) {
      categorize[category] = [];
    }
    categorize[category].push(node);
  });
  // categories = [...Object.keys(categorize)];

  return (
    <div>
      {/*@TODO 메타정보*/}
      <Layout title={siteMetadata.title} github={siteMetadata.github}>
        <ProfileCard profile={siteMetadata.profile} />
        <CategoryBoardContainer categorize={categorize} />
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
        github
        profile {
          author
          pr
        }
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
