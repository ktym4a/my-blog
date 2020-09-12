import React from 'react'
import styled from '@emotion/styled'

import BlogItem from '@components/BlogItem'

const articles = [
  {
    title: 'Blog title',
    image:
      'https://novela.narative.co/static/dea82e6ca7a739a3c78dd518f40fcae7/4bbaa/hero-5.jpg',
    excerpt: 'this is excerpt.',
    date: '2020 10 10',
  },
  {
    title: 'Blog title',
    image:
      'https://novela.narative.co/static/dea82e6ca7a739a3c78dd518f40fcae7/4bbaa/hero-5.jpg',
    excerpt: 'this is excerpt.',
    date: '2020 10 10',
  },
  {
    title: 'Blog title',
    image:
      'https://novela.narative.co/static/dea82e6ca7a739a3c78dd518f40fcae7/4bbaa/hero-5.jpg',
    excerpt: 'this is excerpt.',
    date: '2020 10 10',
  },
]

const BlogList: React.FC = () => {
  return (
    <BlogListContainer>
      {articles.map((article, index) => {
        return <BlogItem key={index} article={article} />
      })}
    </BlogListContainer>
  )
}

export default BlogList

const BlogListContainer = styled.div`
  transition: opacity 0.25s;
`
