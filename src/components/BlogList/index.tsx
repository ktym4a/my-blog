import React from 'react'
import styled from '@emotion/styled'

import BlogItem from '@components/BlogItem'

import { SitePageContext } from '~types/graphql-types'

interface BlogListProps {
  articles: SitePageContext['group']
}

const BlogList: React.FC<BlogListProps> = ({ articles }: any) => {
  return (
    <ArticleSection>
      {articles.map((article: any, index: number) => {
        return <BlogItem article={article} key={article.node.id} />
      })}
    </ArticleSection>
  )
}

export default BlogList

const ArticleSection = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2;
  grid-row-gap: 30px;
  grid-column-gap: 30px;
  padding-bottom: 60px;

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1;
  }
`
