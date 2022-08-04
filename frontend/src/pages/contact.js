import React from "react"
import styled from "styled-components"
import ContactForm from "../components/organisms/ContactForm/ContactForm"
import Logo from "../components/atoms/Logo/Logo"

const ContactPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  max-width: ${({ theme }) => theme.otherStyles.maxWidth};

  gap: 1rem;
  padding: 2rem 2rem 1rem 2rem;
  margin: 0 auto;
  margin-top: 7rem;

  & h2 {
    color: ${({ theme }) => theme.colors.fontColor};
    font-size: ${({ theme }) => theme.fontSize.big};
    padding: 2rem;
  }
`

const LogoWrapper = styled.div`
  height: 100px;
`

const Contact = () => {
  return (
    <ContactPageWrapper>
      <h2>Skontaktuj się z nami</h2>
      <ContactForm />
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
    </ContactPageWrapper>
  )
}

export default Contact
