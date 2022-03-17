import React from "react"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "../../styles/GlobalStyles"
import { theme } from "../../styles/theme"
import Navbar from "../organisms/Navbar/Navbar"
import Footer from "../organisms/Footer/Footer"
import styled from "styled-components"

const Wrapper = styled.div`
  left: 50%;
  transform:translateX(-50%)
  max-width: 1600px;
  /* background-color:rgb(250, 250, 250);
  z-index:-100; */
`

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
