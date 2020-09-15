import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

import BlogList from '@components/BlogList'
import Section from '@components/Section'
import Layout from '@components/Layout'

const ArticlesPage = (props: any) => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              date
              thumbnail {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
              excerpt
            }
          }
        }
      }
    }
  `)

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
