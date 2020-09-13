import React from 'react'
import styled from '@emotion/styled'

import BlogItem from '@components/BlogItem'

const BlogList: React.FC = ({ articles }) => {
  return (
    <BlogListContainer>
      {articles.map((article, index) => {
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
