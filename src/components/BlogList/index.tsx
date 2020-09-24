import React from 'react'
import styled from '@emotion/styled'

import BlogItem from '@components/BlogItem'

const BlogList: React.FC = ({ articles }: any) => {
  /**
   * We're taking the flat array of articles [{}, {}, {}...]
   * and turning it into an array of pairs of articles [[{}, {}], [{}, {}], [{}, {}]...]
   * This makes it simpler to create the grid we want
   */
  const articlePairs = articles.reduce((result, value, index, array) => {
    if (index % 2 === 0) {
      result.push(array.slice(index, index + 2))
    }
    return result
  }, [])

  return (
    <BlogListContainer>
      {articlePairs.map((article: any, index: number) => {
        return (
          <BlogListRow key={index}>
            <BlogItem article={article[0]} />
            <BlogItem article={article[1]} />
          </BlogListRow>
        )
      })}
    </BlogListContainer>
  )
}

export default BlogList

const BlogListContainer = styled.div`
  transition: opacity 0.25s;
  padding-bottom: 45px;
`

const BlogListRow = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2;
  column-gap: 30px;

  &:not(:last-child) {
    margin-bottom: 45px;
  }
`
