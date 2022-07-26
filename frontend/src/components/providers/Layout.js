import React from "react"
import { ThemeProvider } from "styled-components"
import { Helmet } from "react-helmet"
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
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <html lang="en" />
        <title>Siorb przepisy</title>
        <meta
          name="description"
          content="Przepisy, które pokocha cała rodzina!"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navbar />
        <AddRecipeModal />
        <Wrapper>{children}</Wrapper>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default Layout
