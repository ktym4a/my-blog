import React from 'react'

import { MDXProvider } from '@mdx-js/react'

import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { useColorMode } from 'theme-ui'

const components = {
  // ...shortcodes,
  // img: ImageZoom,
  // a: Anchor,
  // blockquote: Blockquote,
  // h1: Headings.h2, // h1 reserved article title
  // h2: Headings.h2,
  // h3: Headings.h3,
  // h4: Headings.h4,
  // h5: Headings.h5,
  // h6: Headings.h6,
  // hr: HorizontalRule,
  // ul: Lists.ul,
  // ol: Lists.ol,
  // p: Paragraph,
  // code: Code.Prism,
  // pre: Code.Pre,
  // table: Tables.Table,
  // thead: Tables.Head,
  // th: Tables.HeadCell,
  // td: Tables.Cell,
  // figcaption: Figcaption,
  p: props => <p {...props} style={{ color: 'rebeccapurple' }} />,
}

interface MDXProps {
  content: React.ReactNode
}

const MDX: React.FC<MDXProps> = ({ content }) => {
  const [colorMode] = useColorMode()

  return (
    <MDXProvider components={components} isDark={colorMode === 'dark'}>
      <MDXBody>{content}</MDXBody>
    </MDXProvider>
  )
}

export default MDX

const IMAGE_WIDTHS = {
  regular: '680px',
  large: '1004px',
  full: '100vw',
}

const ARTICLE_WIDTH = css`
  width: 100%;
  max-width: 680px;
`

const HeadingsCSS = css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 auto;
  }
  h1,
  h1 *,
  h2,
  h2 * {
    margin: 25px auto 18px;
  }
  h3,
  h3 * {
    margin: 20px auto 10px;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    ${ARTICLE_WIDTH};
  }
`

// const PrismCSS = p => css`
//   .prism-code {
//     overflow: auto;
//     width: 100%;
//     max-width: 744px;
//     margin: 0 auto;
//     padding: 32px;
//     font-size: 13px;
//     margin: 15px auto 50px;
//     border-radius: 5px;
//     font-family: ${p.theme.fonts.monospace};
//     background: ${p.theme.colors.prism.background};
//     .token-line {
//       border-left: 3px solid transparent;
//       ${Object.keys(p.theme.colors.prism)
//         .map(key => {
//           return `.${toKebabCase(key)}{color:${p.theme.colors.prism[key]};}`
//         })
//         .reduce((curr, next) => curr + next, ``)};
//       & > span {
//       }
//     }
//     .number-line {
//       display: inline-block;
//       width: 32px;
//       user-select: none;
//       opacity: 0.3;
//       color: #dcd9e6;
//     }
//     .token-line.highlight-line {
//       margin: 0 -32px;
//       padding: 0 32px;
//       background: ${p.theme.colors.prism.highlight};
//       border-left: 3px solid ${p.theme.colors.prism.highlightBorder};
//     }
//     .operator + .maybe-class-name {
//       color: #ffcf74 !important;
//     }
//     .plain ~ .operator {
//       color: #5fa8aa !important;
//     }
//   }
// `

const ImageCSS = css`
  .gatsby-resp-image-background-image {
    display: none !important;
  }
  img {
    display: inline-block;
    position: relative;
    max-width: 100%;
    height: auto;
    z-index: 0;
    margin: 15px auto 50px;
    border-radius: 5px;
  }
  div.Image__Small {
    display: flex;
    flex-direction: column;
    position: relative;
    max-width: 100%;
    height: auto;
    z-index: 0;
    margin: 15px auto 50px;
    border-radius: 5px;
    width: 100%;
    max-width: 680px;
  }
  .Image__Container {
    text-align: center;
  }
  img.Image__With-Shadow {
    box-shadow: 0px 15px 60px rgba(0, 0, 0, 0.15);
  }
  div.Image__Medium {
    position: relative;
    margin: 15px auto 50px;
    width: 100%;
    max-width: ${IMAGE_WIDTHS.large};
  }
  div.Image__Large {
    position: relative;
    left: -68px;
    width: ${IMAGE_WIDTHS.full};
    margin: 25px auto 60px;
    pointer-events: none;
    /* To allow interaction for all external interactions: YouTube, Twitter, Gist */
    iframe {
      pointer-events: all;
    }
    img {
      border-radius: 0;
    }
  }
`

/**
 * MDXBody
 * Here we're applying "global" selectors to make sure we maintain an article
 * body type feel. We're also applying all the Prism selecotors and styles within
 * the MDXBody.
 */
const MDXBody = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${HeadingsCSS}
  /* ${PrismCSS} */
  ${ImageCSS}
`
