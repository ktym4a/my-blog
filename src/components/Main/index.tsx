import styled from '@emotion/styled'
import { commonWidth } from '@styles/index'

const Main = styled.main`
  ${commonWidth}
  color: ${p => p.theme.colors.textNormal};
  transition: ${p => p.theme.colors.colorModeTransition};
`

export default Main
