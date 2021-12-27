import React from "react"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "../../styles/globalStyles"
import { theme } from "../../styles/theme"

const TestWrapper = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}

export default TestWrapper
