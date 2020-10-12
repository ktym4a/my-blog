import React from 'react'

import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'

import styled from '@emotion/styled'
import { jsx, css } from '@emotion/core'
import { useColorMode } from 'theme-ui'
import { articleCSS, prismCSS } from '@styles/index'

import { Mdx } from '~types/graphql-types'

const components = {
  img: articleCSS.articleImage,
  a: articleCSS.articleAnchor,
  blockquote: articleCSS.Blockquote,
  h1: articleCSS.h2,
  h2: articleCSS.h2,
  h3: articleCSS.h3,
  h4: articleCSS.h4,
  h5: articleCSS.h5,
  h6: articleCSS.h6,
  hr: articleCSS.HorizontalRule,
  ul: articleCSS.uList,
  ol: articleCSS.oList,
  p: articleCSS.Paragraph,
  table: articleCSS.Table,
  thead: articleCSS.TableHead,
  th: articleCSS.TableHeadCell,
  td: articleCSS.TableCell,
}

interface MDXProps {
  content: Mdx['body']
}

const MDX: React.FC<MDXProps> = ({ content }) => {
  const [colorMode] = useColorMode()

  return (
    <MDXBody>
      <MDXProvider components={components}>
        <MDXRenderer>{content}</MDXRenderer>
      </MDXProvider>
    </MDXBody>
  )
}

export default MDX

const MDXBody = styled.div`
  ${prismCSS}
`
