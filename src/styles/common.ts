import { css } from '@emotion/core'

export const commonWidth = css`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 4rem;

  @media screen and (max-width: 767px) {
    padding: 0 1.5rem;
  }
`
