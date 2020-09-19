import React from 'react'

import styled from '@emotion/styled'

import BlogList from '@components/BlogList'
import Section from '@components/Section'
import Layout from '@components/Layout'

const ArticlesPage: React.FC<any> = (props: any) => {
  const articles = props.pathContext.articles

  return (
    <Layout>
      <Section>
        <BlogList articles={articles} />
      </Section>
    </Layout>
  )
}

export default ArticlesPage
