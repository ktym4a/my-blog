import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

interface paginationProps {
  pageContext: pageContextProps
}

interface pageContextProps {
  index: number
  first: boolean
  last: boolean
  pageCount: number
  pathPrefix: string
}

interface pageProps {
  type: string
  to: number
  path: string
  active: number
}

const Pagination: React.FC<paginationProps> = ({ pageContext }) => {
  if (pageContext.pageCount <= 1) return null

  return (
    <PagerSection>
      <Pager {...pageContext} />
      {/* <Pager
        type={'prev'}
        to={index - 1}
        path={pathPrefix}
        active={first ? 1 : 0}
      />
      <PagerText>
        {index} / {pageCount}
      </PagerText>
      <Pager
        type={'next'}
        to={index + 1}
        path={pathPrefix}
        active={last ? 1 : 0}
      /> */}
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
        to={index - 1}
        path={pathPrefix}
        active={first ? 1 : 0}
      />
      <PagerText>
        {index} / {pageCount}
      </PagerText>
      <PagerLink
        type={'next'}
        to={index + 1}
        path={pathPrefix}
        active={last ? 1 : 0}
      />
    </PaginationNav>
  )
}

const PagerLink: React.FC<pageProps> = ({ to, type, path, active }) => {
  const link = to === 1 ? path : path + to
  return (
    <PagerUnit to={link} type={type} active={active ? 1 : 0}>
      <ArrowIcon
        icon={type === 'prev' ? faAngleLeft : faAngleRight}
        size="lg"
      />
    </PagerUnit>
  )
}

export default Pagination

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

const NotActivePager = p => css`
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
