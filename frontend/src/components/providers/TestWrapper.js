import React from "react"
import { Provider } from "react-redux"
import store from "../../store/store"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "../../styles/GlobalStyles"
import { theme } from "../../styles/theme"

const TestWrapper = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </Provider>
  )
}
export default TestWrapper
