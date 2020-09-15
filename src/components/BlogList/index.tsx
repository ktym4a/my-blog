import React from 'react'
import styled from '@emotion/styled'

import BlogItem from '@components/BlogItem'

const BlogList: React.FC = ({ articles }: any) => {
  return (
    <BlogListContainer>
      {articles.map((article: any, index: number) => {
        const frontmatter = article.node.frontmatter
        const slug = article.node.fields.slug
        return (
          <BlogItem key={index} article={frontmatter} slug={`blog/${slug}`} />
        )
      })}
    </BlogListContainer>
  )
}

export default BlogList

const BlogListContainer = styled.div`
  transition: opacity 0.25s;
`
