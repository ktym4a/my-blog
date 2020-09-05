import React from 'react'
import Footer from '@components/Footer'
import Header from '@components/Header'

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
