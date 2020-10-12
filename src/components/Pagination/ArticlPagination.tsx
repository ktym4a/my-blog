import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

import { Mdx } from '~types/graphql-types'

interface paginationProps {
  next: Mdx | null | undefined
  previous: Mdx | null | undefined
}

interface pageProps {
  type: string
  to: Mdx | null | undefined
}

const ArticlPagination: React.FC<paginationProps> = ({ next, previous }) => {
  if (!next && !previous) return null

  return (
    <PagerSection>
      <PaginationNav>
        <PagerLink type={'prev'} to={previous} />
        <PagerLink type={'next'} to={next} />
      </PaginationNav>
    </PagerSection>
  )
}

const PagerLink: React.FC<pageProps> = ({ to, type }) => {
  const link = to ? `/${to.slug}` : '/'

  return (
    <PagerUnit to={link} type={type} active={!to ? 1 : 0}>
      <ArrowIcon
        icon={type === 'prev' ? faAngleLeft : faAngleRight}
        size="lg"
      />
    </PagerUnit>
  )
}

export default ArticlPagination

const PagerSection = styled.section`
  padding-bottom: 30px;
`

const PaginationNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`

const PagerUnit = styled(Link)<{ type: string; active: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  width: 33px;
  height: 33px;
  border-radius: 50%;
  transition: 0.3s ease-in-out;
  ${p => (p.type === 'prev' ? `margin-right: 15px;` : `margin-left: 15px;`)}
  ${p => (p.active === 1 ? NotActivePager : ActivePager)}

  &:hover {
    box-shadow: ${(p: any) => p.theme.colors.hoverNeumorphism};
  }
`

const NotActivePager = css`
  pointer-events: none;
  opacity: 0;
`

const ActivePager = (p: any) => css`
  background: ${p.theme.colors.background};
  box-shadow: ${p.theme.colors.neumorphism};
`

const ArrowIcon = styled(FontAwesomeIcon)`
  color: ${(p: any) => p.theme.colors.boldColor};
`
