import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

export const MarginWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}
