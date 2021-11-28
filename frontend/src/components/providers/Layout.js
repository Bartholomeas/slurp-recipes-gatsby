import React from "react"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "../../styles/GlobalStyles"
import { theme } from "../../styles/theme"
import Navbar from "../organisms/Navbar/Navbar"
import Footer from "../organisms/Footer/Footer"

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      {children}
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
