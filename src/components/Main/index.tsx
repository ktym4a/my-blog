import styled from '@emotion/styled'
import { commonWidth } from '@styles/index'

const Main = styled.main`
  ${commonWidth}
  color: ${(p: any) => p.theme.colors.textNormal};
  transition: ${(p: any) => p.theme.colors.colorModeTransition};
`

export default Main
