import React from 'react'

import styled from '@emotion/styled'

import BlogList from '@components/BlogList'
import Section from '@components/Section'
import Layout from '@components/Layout'

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

  const { group, index, first, last, pageCount } = pageContext
  const previousUrl = index - 1 == 1 ? '/' : (index - 1).toString()
  const nextUrl = (index + 1).toString()

  return (
    <Layout>
      <Section>
        <BlogList articles={group} />
      </Section>
      <div className="previousLink">
        <NavLink test={first} url={previousUrl} text="Go to Previous Page" />
      </div>
      <div className="nextLink">
        <NavLink test={last} url={nextUrl} text="Go to Next Page" />
      </div>
    </Layout>
  )
}

export default ArticlesPage
