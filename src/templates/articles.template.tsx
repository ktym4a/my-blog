import React from 'react'

import styled from '@emotion/styled'

import BlogList from '@components/BlogList'
import Section from '@components/Section'
import Layout from '@components/Layout'
import Pagination from '@components/Pagination'

import Link from 'gatsby-link'

const NavLink = props => {
  if (!props.test) {
    return <Link to={`/page/${props.url}`}>{props.text}</Link>
  } else {
    return <span>{props.text}</span>
  }
}

const ArticlesPage: React.FC<any> = ({ pageContext }) => {
  // const articles = props.pathContext.articles
  const articles = pageContext.group

  return (
    <Layout>
      <Section>
        <BlogList articles={articles} />
      </Section>
      <Pagination {...pageContext} />
    </Layout>
  )
}

export default ArticlesPage
