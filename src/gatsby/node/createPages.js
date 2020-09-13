const path = require(`path`)

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
                childImageSharp {
                  fluid {
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
