import React from 'react'
import styled from '@emotion/styled'

import BlogItem from '@components/BlogItem'

const BlogList: React.FC = ({ articles }: any) => {
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
`
