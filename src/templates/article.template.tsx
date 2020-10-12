import { graphql } from 'gatsby'
import React from 'react'

import styled from '@emotion/styled'

import Main from '@components/Main'
import Layout from '@components/Layout'
import MDXRenderer from '@components/MDXRenderer'
import { ArticlPagination } from '@components/Pagination'

import { MdxEdge, ArticlsQuery } from '~types/graphql-types'

interface ArticlePageProps {
  pageContext: {
    article: MdxEdge
  }
}

const ArticlePage: React.FC<ArticlePageProps> = ({ pageContext }) => {
  const { node, next, previous } = pageContext.article

  return (
    <Layout>
      {node?.frontmatter && (
        <Main>
          <TitleContainer>
            <ArticleTitle>{node.frontmatter.title}</ArticleTitle>
            <MetaData>
              {node.frontmatter.date} - {node.timeToRead} min read
            </MetaData>
          </TitleContainer>
          <ArticleContainer>
            <MDXRenderer content={node.body} />
          </ArticleContainer>
          <ArticlPagination next={next} previous={previous} />
        </Main>
      )}
    </Layout>
  )
}

const ArticleTitle = styled.h1`
  font-size: 5rem;
  font-weight: 900;
  font-family: ${(p: any) => p.theme.fonts.montserrat};
  color: ${(p: any) => p.theme.colors.textNormal};
  transition: ${(p: any) => p.theme.colors.colorModeTransition};
`

const ArticleContainer = styled.article`
  font-family: ${(p: any) => p.theme.fonts.serif};
  font-size: 1.7rem;
  line-height: 2.5rem;
  padding-bottom: 60px;

  & *:last-child {
    margin-bottom: 0;
  }
`

const MetaData = styled.div`
  font-size: 1.5rem;
  color: ${(p: any) => p.theme.colors.grey};
`

const TitleContainer = styled.div`
  margin-bottom: 3rem;
  font-family: ${(p: any) => p.theme.fonts.serif};
`

export default ArticlePage
