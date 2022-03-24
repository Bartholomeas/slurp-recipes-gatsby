import React from "react"
import styled, { css } from "styled-components"
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai"

const IconStyles = css`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: 3.2rem;
  cursor: pointer;
`

const FooterWrapper = styled.footer`
  position: relative;
  width: 100%;
  height: auto;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.fontColor};
  @media only screen and (min-width: 768px) {
    height: 15rem;
  }
  @media print {
    display: none;
  }
`

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  height: 100%;
  width: 100%;
  max-width: 1200px;
  padding: 4rem 2rem;
  margin: 0 auto;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`
const LocationBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;

  @media only screen and (min-width: 768px) {
    align-items: flex-end;
    text-align: right;
  }
`
const LocationHeader = styled.h3`
  color: ${({ theme }) => theme.colors.darkGrey};
`
const LocationTextBox = styled.div``
const LocationText = styled.p`
  color: ${({ theme }) => theme.colors.darkGrey};
`

const FacebookIcon = styled(AiFillFacebook)`
  ${IconStyles}
`
const InstagramIcon = styled(AiFillInstagram)`
  ${IconStyles}
`
const TwitterIcon = styled(AiFillTwitterSquare)`
  ${IconStyles}
`

const FooterCopyright = styled.p`
  color: ${({ theme }) => theme.colors.darkGrey};
`

const IconBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterCopyright>barth design {year}&copy; </FooterCopyright>
        <IconBox>
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
        </IconBox>
        <LocationBox>
          <LocationHeader>Dane kontaktowe:</LocationHeader>
          <LocationTextBox>
            <LocationText>Bazylea 21-370</LocationText>
            <LocationText>ul. Mariusza Pudzianowskiego 13/37</LocationText>
            <LocationText>kontakt@slurp.pl</LocationText>
            <LocationText>+48 623 456 789</LocationText>
          </LocationTextBox>
        </LocationBox>
      </FooterContainer>
    </FooterWrapper>
  )
}

export default Footer
