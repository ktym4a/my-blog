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
      allMdx(sort: {fields: [frontmatter___date], order: DESC}) {
        edges {
          node {
            frontmatter {
              date(formatString: "MMMM D, YYYY")
              post_img {
                full: childImageSharp {
                  fluid(maxWidth: 800, quality: 100) {
                    ${GatsbyFluid_withWebp}
                  }
                }
                list: childImageSharp {
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
              title
            }
            id
            slug
            body
            timeToRead
          }
        }
      }
    }
  `)

  const articlesTemplate = path.resolve('./src/templates/articles.template.tsx')
  const articleTemplate = path.resolve('./src/templates/article.template.tsx')

  createPaginatedPages({
    edges: res.data.allMdx.edges,
    createPage,
    pageTemplate: articlesTemplate,
    pageLength: 6,
    pathPrefix: '/',
    buildPath: (index, pathPrefix) => (index > 1 ? `/page/${index}` : '/'),
    context: {},
  })

  res.data.allMdx.edges.forEach(edge => {
    const slug = edge.node.slug
    createPage({
      component: articleTemplate,
      path: `${slug}`,
      context: {
        article: edge,
      },
    })
  })
}
