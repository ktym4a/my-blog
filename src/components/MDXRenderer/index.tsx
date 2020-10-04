import React from 'react'

import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'

import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { useColorMode } from 'theme-ui'
import { articleCSS } from '@styles/index'

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
  // code: Code.Prism,
  // pre: Code.Pre,
  table: articleCSS.Table,
  thead: articleCSS.TableHead,
  th: articleCSS.TableHeadCell,
  td: articleCSS.TableCell,
  // p: props => <p {...props} style={{ color: 'rebeccapurple' }} />,
}

interface MDXProps {
  content: React.ReactNode
}

const MDX: React.FC<MDXProps> = ({ content }) => {
  const [colorMode] = useColorMode()

  return (
    <MDXProvider components={components}>
      <MDXRenderer>{content}</MDXRenderer>
    </MDXProvider>
  )
}

export default MDX
