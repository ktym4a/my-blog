import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

import { SitePageContext } from '~types/graphql-types'

interface ArticlsPaginationProps {
  pageContext: SitePageContext
}

interface pageContextProps {
  index?: SitePageContext['index']
  first?: SitePageContext['first']
  last?: SitePageContext['last']
  pageCount?: SitePageContext['pageCount']
  pathPrefix?: SitePageContext['pathPrefix']
}

interface pageProps {
  type: string
  to: SitePageContext['index']
  path: SitePageContext['pathPrefix']
  active: number
}

const ArticlsPagination: React.FC<ArticlsPaginationProps> = ({
  pageContext,
}) => {
  if (pageContext.pageCount && pageContext.pageCount <= 1) return null

  return (
    <PagerSection>
      <Pager {...pageContext} />
    </PagerSection>
  )
}

const Pager: React.FC<pageContextProps> = ({
  index,
  first,
  last,
  pageCount,
  pathPrefix,
}) => {
  return (
    <PaginationNav>
      <PagerLink
        type={'prev'}
        to={index ? index - 1 : 0}
        path={pathPrefix}
        active={first ? 1 : 0}
      />
      <PagerText>
        {index} / {pageCount}
      </PagerText>
      <PagerLink
        type={'next'}
        to={index ? index + 1 : 0}
        path={pathPrefix}
        active={last ? 1 : 0}
      />
    </PaginationNav>
  )
}

const PagerLink: React.FC<pageProps> = ({ to, type, path, active }) => {
  const link = to === 1 ? path : path + 'page/' + to
  return (
    <PagerUnit to={link ? link : ''} type={type} active={active ? 1 : 0}>
      <ArrowIcon
        icon={type === 'prev' ? faAngleLeft : faAngleRight}
        size="lg"
      />
    </PagerUnit>
  )
}

export default ArticlsPagination

const PagerSection = styled.section`
  padding-bottom: 30px;
`

const PaginationNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`

const PagerText = styled.span`
  color: ${p => p.theme.colors.textNormal};
  font-family: ${p => p.theme.fonts.serif};
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
    box-shadow: ${p => p.theme.colors.hoverNeumorphism};
  }
`

const NotActivePager = css`
  pointer-events: none;
  opacity: 0;
`

const ActivePager = p => css`
  background: ${p.theme.colors.background};
  box-shadow: ${p.theme.colors.neumorphism};
`

const ArrowIcon = styled(FontAwesomeIcon)`
  color: ${p => p.theme.colors.boldColor};
`
