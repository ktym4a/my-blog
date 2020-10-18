import * as React from 'react'
import SEO from '@components/SEO'
import Layout from '@components/Layout'
import styled from '@emotion/styled'
import Main from '@components/Main'

const NotFoundPage: React.FC = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Main>
      <Title>NOT FOUND</Title>
    </Main>
  </Layout>
)

const Title = styled.h1`
  font-size: 5rem;
  font-weight: 900;
  font-family: ${(p: any) => p.theme.fonts.montserrat};
  color: ${(p: any) => p.theme.colors.textNormal};
  transition: ${(p: any) => p.theme.colors.colorModeTransition};
  text-align: center;
  @media screen and (max-width: 767px) {
    font-size: 3.5rem;
  }
`

export default NotFoundPage
