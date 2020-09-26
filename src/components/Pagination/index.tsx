import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngleLeft,
  faAngleRight,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons'

interface props {
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

const Pagination: React.FC<props> = ({
  index,
  first,
  last,
  pageCount,
  pathPrefix,
}) => {
  if (pageCount <= 1) return null

  return (
    <PagerContainer>
      <Pager
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
      />
    </PagerContainer>
  )
}

const Pager: React.FC<pageProps> = ({ to, type, path, active }) => {
  console.log(active)
  const link = to === 1 ? path : path + 'page/' + to
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

const PagerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 50px;
  font-family: ${p => p.theme.fonts.serif};
`

const PagerText = styled.span`
  color: ${p => p.theme.colors.textNormal};
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
  ${p => (p.type === 'prev' ? `margin-right: 10px;` : `margin-left: 10px;`)}
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
