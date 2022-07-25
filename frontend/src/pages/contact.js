import React from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"
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

const ContactFormSection = styled.section`
  width: 100%;
`

const LogoWrapper = styled.div`
  height: 100px;
`

const Contact = ({ data }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <html lang="en" />
        <title>Contact s:urp!</title>
        <meta
          name="description"
          content="Przepisy, które pokocha cała rodzina!"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <ContactPageWrapper>
        <h2>Skontaktuj się z nami</h2>
        <ContactForm />
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
      </ContactPageWrapper>
    </>
  )
}

export default Contact
