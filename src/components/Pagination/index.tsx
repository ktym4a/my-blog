import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

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
      {index} / {pageCount}
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
      <FontAwesomeIcon icon={faAngleLeft} />
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

  &::before {
    ${p => (p.active === 1 ? NotActiveArrow : ActiveArrow)}
    ${p => (p.type === 'prev' ? PrevArrow : NextArrow)}
  }
`

const NotActivePager = p => css`
  pointer-events: none;
`

const ActivePager = p => css`
  background: ${p.theme.colors.background};
  box-shadow: ${p.theme.colors.neumorphism};
`

const NotActiveArrow = css`
  display: none;
`

const ActiveArrow = p => css`
  content: '';
  position: absolute;
  display: block;
  width: 15px;
  height: 15px;
  border-top: solid 3px ${p.theme.colors.boldColor};
  border-right: solid 3px ${p.theme.colors.boldColor};
`

const PrevArrow = p => css`
  -webkit-transform: rotate(225deg);
  transform: rotate(225deg);
`

const NextArrow = p => css`
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
`
