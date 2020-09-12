import { graphql, PageProps } from 'gatsby'
import React from 'react'

import BlogList from '@components/BlogList'
import Section from '@components/Section'
import Layout from '@components/Layout'

export default class IndexPage extends React.Component {
  public render() {
    return (
      <Layout>
        <Section>
          <BlogList />
        </Section>
      </Layout>
    )
  }
}
