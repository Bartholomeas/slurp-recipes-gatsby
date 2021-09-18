import React from "react"
import styled from "styled-components"

const FooterWrapper = styled.footer`
  position: fixed;
  width: 100%;
  height: 8rem;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  color: ${({ theme }) => theme.colors.fontColor};
`

const FooterContainer = styled.div`
  height: 100%;
  max-width: 1920px;
  margin: 0 auto;
`

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <p>BARTH DESIGN</p>
        <p>2021</p>
      </FooterContainer>
    </FooterWrapper>
  )
}

export default Footer
