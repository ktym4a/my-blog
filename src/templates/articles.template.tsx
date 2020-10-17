import React from 'react'

import BlogList from '@components/BlogList'
import Main from '@components/Main'
import Layout from '@components/Layout'
import { ArticlsPagination } from '@components/Pagination'

import { SitePageContext } from '~types/graphql-types'
import SEO from '@components/SEO'

interface ArticlesPageProps {
  pageContext: SitePageContext
}

const ArticlesPage: React.FC<ArticlesPageProps> = ({ pageContext }) => {
  const articles = pageContext.group

  return (
    <Layout>
      <SEO />
      <Main>
        <BlogList articles={articles} />
        <ArticlsPagination pageContext={pageContext} />
      </Main>
    </Layout>
  )
}

export default ArticlesPage
