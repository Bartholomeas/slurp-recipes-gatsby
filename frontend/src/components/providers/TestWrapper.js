import React from "react"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "../../styles/GlobalStyles"
import { theme } from "../../styles/theme"
import StateProvider from "../../context/StateContext"

const TestWrapper = ({ children }) => {
  return (
    <StateProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </StateProvider>
  )
}
export default TestWrapper
