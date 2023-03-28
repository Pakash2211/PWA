import ThemeProvider from '../../theme'
import React from 'react'
import Header from '../header/Header'

const Layout = ({ children}) => {
  return (
    <ThemeProvider>
        <Header />
        <main>{children}</main>
        {/* <Footer /> */}
      </ThemeProvider>
  )
}

export default Layout