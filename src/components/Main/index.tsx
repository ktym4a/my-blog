import styled from '@emotion/styled'
import { commonWidth } from '@styles/index'

const Main = styled.main`
  ${commonWidth}
  color: ${p => p.theme.colors.textNormal};
  transition: color 0.3s ease-in-out;
`

export default Main
