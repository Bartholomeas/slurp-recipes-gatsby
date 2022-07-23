import React from "react"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "../../styles/GlobalStyles"
import { theme } from "../../styles/theme"
import Navbar from "../organisms/Navbar/Navbar"
import Footer from "../organisms/Footer/Footer"
import styled from "styled-components"
import AddRecipeModal from "../organisms/AddRecipeModal/AddRecipeModal"

const Wrapper = styled.div`
  left: 50%;
  transform:translateX(-50%)
  max-width: 1600px;
  scroll-behavior: smooth;
`

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      <AddRecipeModal />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
