import React, { useEffect } from 'react'
import { Global } from '@emotion/core'
import styled from '@emotion/styled'
import { useColorMode } from 'theme-ui'

import Footer from '@components/Footer'
import Header from '@components/Header'

import { globalStyles } from '@styles/index'

const Layout: React.FC = ({ children }) => {
  const [colorMode] = useColorMode()

  useEffect(() => {
    parent.postMessage({ theme: colorMode }, '*')
  }, [colorMode])

  return (
    <Container>
      <Global styles={globalStyles} />
      <Header />
      {children}
      <Footer />
    </Container>
  )
}

export default Layout

const Container = styled.div`
  position: relative;
  background: ${(p: any) => p.theme.colors.background};
  transition: ${(p: any) => p.theme.colorModeTransition};
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`
