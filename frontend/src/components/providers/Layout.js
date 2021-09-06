import React from "react"
import styled from "styled-components"
import { GlobalStyle } from "../../styles/globalStyles"

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`

const Layout = ({ children }) => {
  return (
    <div>
      <GlobalStyle />
      {children}
    </div>
  )
}

export default Layout
