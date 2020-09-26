const path = require(`path`)

const GatsbyFluid_withWebp = `
  base64
  aspectRatio
  src
  srcSet
  srcWebp
  srcSetWebp
  sizes
`

const createPaginatedPages = require('gatsby-paginate')

module.exports = async ({ actions: { createPage }, graphql }) => {
  const res = await graphql(`
    query {
      allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              date(formatString: "MMMM D, YYYY")
              thumbnail {
                full: childImageSharp {
                  fluid(maxWidth: 800, quality: 100) {
                    ${GatsbyFluid_withWebp}
                  }
                }
                regular: childImageSharp {
                  fluid(maxWidth: 653, quality: 100) {
                    ${GatsbyFluid_withWebp}
                  }
                }
                narrow: childImageSharp {
                  fluid(maxWidth: 457, quality: 100) {
                    ${GatsbyFluid_withWebp}
                  }
                }
                seo: childImageSharp {
                  fixed(width: 800, quality: 100) {
                    src
                  }
                }
              }
              excerpt
            }
            timeToRead
          }
        }
      }
    }
  `)

  const articlesTemplate = path.resolve('./src/templates/articles.template.tsx')
  const articleTemplate = path.resolve('./src/templates/article.template.tsx')

  // createPage({
  //   component: articlesTemplate,
  //   path: '/',
  //   context: {
  //     articles: res.data.allMarkdownRemark.edges,
  //   },
  // })

  createPaginatedPages({
    edges: res.data.allMarkdownRemark.edges,
    createPage,
    pageTemplate: articlesTemplate,
    pageLength: 2,
    pathPrefix: '/',
    buildPath: (index, pathPrefix) => (index > 1 ? `/${index}` : '/'),
    context: {},
  })

  res.data.allMarkdownRemark.edges.forEach(edge => {
    const slug = edge.node.fields.slug
    createPage({
      component: articleTemplate,
      path: `${slug}`,
      context: {
        slug,
      },
    })
  })
}
