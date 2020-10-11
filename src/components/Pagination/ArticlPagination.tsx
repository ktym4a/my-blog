import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

interface paginationProps {
  pager: pageContextProps
}

interface pageContextProps {
  next: { slug: string } | false
  prev: { slug: string } | false
}

interface pageProps {
  type: string
  to: string | false
}

const ArticlPagination: React.FC<paginationProps> = ({ pager }) => {
  if (!pager.next && !pager.prev) return null

  return (
    <PagerSection>
      <Pager {...pager} />
    </PagerSection>
  )
}

const Pager: React.FC<pageContextProps> = ({ next, prev }) => {
  const to_next = next ? next.slug : next
  const to_prev = prev ? prev.slug : prev

  return (
    <PaginationNav>
      <PagerLink type={'prev'} to={to_prev} />
      <PagerLink type={'next'} to={to_next} />
    </PaginationNav>
  )
}

const PagerLink: React.FC<pageProps> = ({ to, type }) => {
  const link = to ? `/${to}` : '/'

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

const PagerText = styled.span`
  color: ${(p: any) => p.theme.colors.textNormal};
  font-family: ${(p: any) => p.theme.fonts.serif};
  font-size: 1.4rem;
  line-height: 1.4rem;
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
