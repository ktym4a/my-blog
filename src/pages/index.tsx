import { graphql, PageProps } from 'gatsby'
import * as React from 'react'

import Layout from '@components/Layout'

interface IndexPageProps extends PageProps {
  data: {
    site: {
      siteMetadata: {
        siteName: string
      }
    }
  }
}

export default class IndexPage extends React.Component<IndexPageProps> {
  readonly hello = `Hello`
  public render() {
    return (
      <Layout>
        <h1>{this.hello} TypeScript world!</h1>
        <p>
          This site is named <strong></strong>
        </p>
      </Layout>
    )
  }
}
