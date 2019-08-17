module.exports = {
  siteMetadata: {
    title: `heecheolman`,
    description: '개발 및 일상관련해 로그를 남기고 싶습니다.',
    utterances: 'heecheolman/heecheolman-blog',
    profile: {
      author: `heecheolman`,
      pr: '계속해서 배움을 이어 나가는것을 좋아합니다. 공부한 것, 경험한 것들을 글로 남겨 다른 사람들에게도 도움이 되었으면 좋겠습니다. 🙏',
      githubLink: `https://github.com/heecheolman`,
    },
    seo: {
      title: 'heecheolman의 백팩',
      description: '개발 및 일상관련해 로그를 남기고 싶습니다.',
      author: 'HeeCheolKim',
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,

    /**
     * node sass
     */
    `gatsby-plugin-sass`,

    /**
     * file system
     */
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/content/images`,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${ __dirname }/src/content/blog`,
        name: `blog`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/src/content/about`,
    //     name: `about`,
    //   },
    // },
    /**
     * svg-icon
     */

    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/ // See below to configure properly
        }
      }
    },

    /**
     * remark
     */
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        tableOfContents: {
          heading: null,
          maxDepth: 3,
        },
        // Plugins configs
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-emoji`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              inlineCodeMarker: '%',
            },
          },
        ],
      },
    },
    /** google fonts */
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Noto Sans KR`,
          },
          {
            family: `Nanum Gothic`,
          }
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
