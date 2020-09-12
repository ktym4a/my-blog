import React from 'react'
import { Global } from '@emotion/core'

import Footer from '@components/Footer'
import Header from '@components/Header'

import { globalStyles } from '@styles/index'

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Global styles={globalStyles} />
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
