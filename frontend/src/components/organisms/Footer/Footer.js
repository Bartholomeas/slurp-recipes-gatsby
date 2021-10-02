import React from "react"
import styled from "styled-components"

const FooterWrapper = styled.footer`
  width: 100%;
  height: 8rem;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  color: ${({ theme }) => theme.colors.fontColor};

  @media print {
    position: absolute;
    height: 3rem;
    bottom: 0;
  }
`

const FooterContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 2rem;
`

const FooterCopyright = styled.p`
  color: ${({ theme }) => theme.colors.darkGrey};

  @media print {
    font-size: 1.2rem;
  }
`

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterCopyright>barth design {year}&copy; </FooterCopyright>
      </FooterContainer>
    </FooterWrapper>
  )
}

export default Footer
