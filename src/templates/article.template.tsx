import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

import BlogList from '@components/BlogList'
import Section from '@components/Section'
import Layout from '@components/Layout'

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

const ArticlePage = props => {
  const data = props.data.markdownRemark
  return (
    <Layout>
      <Section>
        <h1>{data.frontmatter.title}</h1>
        <p>{data.frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{ __html: data.html }}></div>
      </Section>
    </Layout>
  )
}

export default ArticlePage