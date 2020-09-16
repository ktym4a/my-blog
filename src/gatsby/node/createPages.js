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

module.exports = async ({ actions: { createPage }, graphql }) => {
  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              date
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
          }
        }
      }
    }
  `)

  const articlesTemplate = path.resolve('./src/templates/articles.template.tsx')
  const articleTemplate = path.resolve('./src/templates/article.template.tsx')

  createPage({
    component: articlesTemplate,
    path: '/',
    context: {
      articles: res.data.allMarkdownRemark.edges,
    },
  })

  res.data.allMarkdownRemark.edges.forEach(edge => {
    const slug = edge.node.fields.slug
    createPage({
      component: articleTemplate,
      path: `/blog/${slug}`,
      context: {
        slug,
      },
    })
  })
}
