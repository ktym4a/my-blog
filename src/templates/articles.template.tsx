import React from 'react'

import BlogList from '@components/BlogList'
import Main from '@components/Main'
import Layout from '@components/Layout'
import Pagination from '@components/Pagination'

const ArticlesPage: React.FC<any> = ({ pageContext }) => {
  const articles = pageContext.group

  return (
    <Layout>
      <Main>
        <BlogList articles={articles} />
        <Pagination pageContext={pageContext} />
      </Main>
    </Layout>
  )
}

export default ArticlesPage
