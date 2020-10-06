import { graphql } from 'gatsby'
import React from 'react'

import styled from '@emotion/styled'

import Main from '@components/Main'
import Layout from '@components/Layout'
import MDXRenderer from '@components/MDXRenderer'
import { ArticlPagination } from '@components/Pagination'

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
  const { article, next, previous } = pageContext
  const article_data = article.node
  console.log(next, previous)
  return (
    <Layout>
      <Main>
        <TitleContainer>
          <ArticleTitle>{article_data.frontmatter.title}</ArticleTitle>
          <MetaData>
            {article_data.frontmatter.date} - {article_data.timeToRead} min read
          </MetaData>
        </TitleContainer>
        <ArticleContainer>
          <MDXRenderer content={article_data.body} />
        </ArticleContainer>
        <ArticlPagination pageContext={pageContext} />
      </Main>
    </Layout>
  )
}

const ArticleTitle = styled.h1`
  font-size: 5rem;
  font-weight: 900;
  font-family: ${p => p.theme.fonts.montserrat};
  color: ${p => p.theme.colors.textNormal};
  transition: ${p => p.theme.colors.colorModeTransition};
`

const ArticleContainer = styled.article`
  font-family: ${p => p.theme.fonts.serif};
  font-size: 1.7rem;
  line-height: 2.5rem;
  padding-bottom: 30px;

  & *:last-child {
    margin-bottom: 0;
  }
`

const MetaData = styled.div`
  font-size: 1.5rem;
  color: ${p => p.theme.colors.grey};
`

const TitleContainer = styled.div`
  margin-bottom: 3rem;
  font-family: ${p => p.theme.fonts.serif};
`

export default ArticlePage
