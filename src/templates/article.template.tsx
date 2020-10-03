import { graphql } from 'gatsby'
import React from 'react'

import Main from '@components/Main'
import Layout from '@components/Layout'
import MDXRenderer from '@components/MDXRenderer'

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }
// `

const ArticlePage = ({ pageContext }) => {
  const { article } = pageContext
  return (
    <Layout>
      <Main>
        <h1>{article.node.frontmatter.title}</h1>
        <p>{article.node.frontmatter.date}</p>
        <MDXRenderer content={article.node.body} />
      </Main>
    </Layout>
  )
}

export default ArticlePage
