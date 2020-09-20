import React from 'react'
import { useColorMode } from 'theme-ui'
import styled from '@emotion/styled'

const Header: React.FC = () => {
  const [colorMode, setColorMode] = useColorMode()

  return (
    <HeaderContainer>
      KTYM4a
      <button
        onClick={e => {
          setColorMode(colorMode === 'default' ? 'dark' : 'default')
        }}
      >
        Toggle {colorMode === 'default' ? 'Dark' : 'Light'}
      </button>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  color: #282c35;
  font-weight: blod;
  font-size: 5rem;
  text-align: center;
  padding: 20px;
`

export default Header
