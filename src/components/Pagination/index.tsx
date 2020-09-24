import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

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
      {!first && <Pager type={'prev'} to={index - 1} path={pathPrefix} />}
      {index} / {pageCount}
      {!last && <Pager type={'next'} to={index + 1} path={pathPrefix} />}
    </PagerContainer>
  )
}

const Pager: React.FC<pageProps> = ({ to, type, path }) => {
  const link = to === 1 ? path : path + 'page/' + to
  return <PagerUnit to={link} type={type} />
}

export default Pagination

const PagerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 50px;
  font-family: ${p => p.theme.fonts.serif};
`

const PagerUnit = styled(Link)<{ type: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  width: 33px;
  height: 33px;
  border-radius: 50%;
  background: ${p => p.theme.colors.background};
  box-shadow: ${p => p.theme.colors.neumorphism};
  transition: 0.3s ease-in-out;

  &:hover {
    box-shadow: ${p => p.theme.colors.hoverNeumorphism};
  }

  &::before {
    content: '';
    position: absolute;
    display: block;
    width: 15px;
    height: 15px;
    border-top: solid 3px ${p => p.theme.colors.boldColor};
    border-right: solid 3px ${p => p.theme.colors.boldColor};
    ${p =>
      p.type === 'prev'
        ? `
    -webkit-transform: rotate(225deg);
    transform: rotate(225deg);
  `
        : `
  -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  `}
  }
`
