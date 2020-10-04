import { graphql } from 'gatsby'
import React from 'react'

import styled from '@emotion/styled'

import Main from '@components/Main'
import Layout from '@components/Layout'
import MDXRenderer from '@components/MDXRenderer'
import Image from '@components/Image'

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
  const article_data = article.node
  return (
    <Layout>
      <Main>
        <TitleContainer>
          <ArticleTitle>{article_data.frontmatter.title}</ArticleTitle>
          <MetaData>
            {article_data.frontmatter.date} - {article_data.timeToRead} min read
          </MetaData>
        </TitleContainer>
        <ArticleImageContainer>
          <Image src={article_data.frontmatter.post_img.list.fluid} />
        </ArticleImageContainer>
        <MDXRenderer content={article_data.body} />
      </Main>
    </Layout>
  )
}

const ArticleTitle = styled.h1`
  font-size: 5rem;
  font-weight: 900;
  font-family: ${p => p.theme.fonts.montserrat};
  color: ${p => p.theme.colors.textNormal};
  transition: color 0.3s ease-in-out;
`

const MetaData = styled.div`
  font-size: 1.5rem;
  color: ${p => p.theme.colors.grey};
`

const TitleContainer = styled.div`
  margin-bottom: 3rem;
`

const ArticleImageContainer = styled.div`
  width: 100%;
`

export default ArticlePage
