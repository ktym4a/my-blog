import styled from '@emotion/styled'
import { css } from '@emotion/core'

const articleMarginBottom = css`
  margin-bottom: 2.5rem;
`

const hProps = css`
  font-weight: bolder;
  margin: 5rem 0 2.5rem;
`

const ListStyle = css`
  list-style: none;
  counter-reset: list 0;
  position: relative;
  padding-left: 30px;
  ${articleMarginBottom};
  & > li {
    position: relative;
    padding-bottom: 1rem;
  }
  & > li > ul {
    padding-top: 1rem;
  }
  & > li:last-child {
    padding-bottom: 0;
  }
`

const articleImage = styled.img`
  max-width: 100%;
  ${articleMarginBottom};
`

const articleAnchor = styled.a`
  transition: ${p => p.theme.colorModeTransition};
  color: ${p => p.theme.colors.textColor};
  text-decoration: underline;
  &:visited {
    color: ${p => p.theme.colors.textColor};
    opacity: 0.85;
  }
`

const Blockquote = styled.blockquote`
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 1.3rem;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.75rem;
  font-style: italic;
  border-left: 0.3rem solid ${p => p.theme.colors.textColor};
`

const h2 = styled.h2`
  font-size: 2em;
  ${hProps};
`

const h3 = styled.h3`
  font-size: 1.5em;
  ${hProps};
`

const h4 = styled.h4`
  font-size: 1em;
  ${hProps};
`

const h5 = styled.h5`
  font-size: 0.83em;
  ${hProps};
`

const h6 = styled.h6`
  font-size: 0.67em;
  ${hProps};
`

const HorizontalRule = styled.hr<{ isDark: boolean }>`
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    ${p => p.theme.colors.background},
    ${p => p.theme.colors.textColor},
    ${p => p.theme.colors.textColor},
    ${p => p.theme.colors.background}
  );
  margin: 3rem;
`

const uList = styled.ul`
  ${ListStyle};
  & > li:before {
    content: '';
    position: absolute;
    left: -30px;
    top: 8px;
    height: 8px;
    width: 8px;
    border-radius: 50%;
    background: ${p => p.theme.colors.textColor};
  }
`

const oList = styled.ul`
  ${ListStyle};
  & > li:before {
    counter-increment: list 1;
    content: counter(list) '.';
    font-weight: 600;
    position: absolute;
    left: -3rem;
    top: -0.3rem;
    font-size: 2rem;
    color: ${p => p.theme.colors.textColor};
  }
`

const Paragraph = styled.p`
  ${articleMarginBottom};
`

const Table = styled.table`
  margin-bottom: 2.5rem;
  position: relative;
  line-height: 1.65;
  color: ${p => p.theme.colors.grey};
  transition: ${p => p.theme.colorModeTransition};
  background: ${p => p.theme.colors.card};
  width: 100%;
  border: 1px solid ${p => p.theme.colors.horizontalRule};
  border-radius: 5px;
  overflow: hidden;
  border-collapse: separate;
`

const TableHead = styled.thead`
  border-collapse: collapse;
  position: relative;
  line-height: 1.756;
  font-weight: 600;
  color: ${p => p.theme.colors.primary};
  transition: ${p => p.theme.colorModeTransition};
`

const TableHeadCell = styled.th`
  padding: 10px;
  font-size: 1.2em;
  background: ${p => p.theme.colors.card};
`

const TableCell = styled.td`
  border-top: 1px solid ${p => p.theme.colors.horizontalRule};
  padding: 10px;
  font-size: 1em;
  background: ${p => p.theme.colors.card};
`

export const articleCSS = {
  articleImage,
  articleAnchor,
  Blockquote,
  h2,
  h3,
  h4,
  h5,
  h6,
  HorizontalRule,
  uList,
  oList,
  Paragraph,
  Table,
  TableHead,
  TableHeadCell,
  TableCell,
}