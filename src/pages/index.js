import React from "react"
import { graphql } from "gatsby"

/** components */
import { Layout } from './../layout';
import { Header } from './../components/header';
import { ProfileCard } from './../components/profile-card';
import { CategoryBoardContainer } from '../components/category-board-container'

const IndexPage = ({ data }) => {
  const { siteMetadata } = data.site;
  const posts = data.allMarkdownRemark.edges;
  const categorize = {};
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
  // console.log(categorize);

  return (
    <div>
      {/*@TODO 메타정보*/}
      <Header />
      <Layout>
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
        profile {
          author
          pr
          githubLink
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
