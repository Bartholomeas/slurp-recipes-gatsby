import React from "react"
import styled, { css } from "styled-components"

const FooterWrapper = styled.footer`
  position: relative;
  width: 100%;
  height: auto;
  bottom: 0;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.fontColor};
  @media print {
    display: none;
  }
`
const FooterCopyright = styled.p`
  font-size: ${({ theme }) => theme.fontSize.normal};
  color: ${({ theme }) => theme.colors.darkGrey};
`

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <FooterWrapper>
      <FooterCopyright>Bartholomeas {year}&copy; </FooterCopyright>
    </FooterWrapper>
  )
}

export default Footer
