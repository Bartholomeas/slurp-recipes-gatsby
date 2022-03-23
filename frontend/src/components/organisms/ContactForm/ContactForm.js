import React from "react"
import emailjs from "emailjs-com"
import styled from "styled-components"
import Header from "../../atoms/Header/Header"
import Button from "../../atoms/Button/Button"
import FormField from "../../molecules/FormField/FormField"

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  padding: 0 2rem;
  box-shadow: 3px 2px 10px -3px ${({ theme }) => theme.colors.shadow};
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.secondaryColor};
`

const ContactFormBody = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media only screen and (min-width: 768px) {
  }
  max-width: 500px;
`

const Statement = styled.p`
  color: ${({ theme }) => theme.colors.secondaryColor};
  font-size: 1.6rem;
  padding: 2rem;
`

const ContactForm = () => {
  let statement = ""

  const sendEmail = e => {
    e.preventDefault()
    emailjs
      .sendForm(
        "gmail",
        "template_13f70rg",
        e.target,
        "user_YtL1kdHkWKGLr0UtEhpBK"
      )
      .then(
        result => {
          return (statement = "Pomyślnie wysłano wiadomość")
          console.log(result.text)
        },
        error => {
          console.log(error.text)
        }
      )
  }

  return (
    <ContactWrapper>
      <Header>Send recipe to us</Header>
      <ContactFormBody onSubmit={sendEmail}>
        <FormField nameId="from_name" content="Twój email" type="email" />
        <FormField nameId="title" content="Tytuł" />
        <FormField textarea={true} nameId="message" content="Wiadomość" />
        <Button isLong type="submit" value="send">
          Wyślij
        </Button>
        <Statement>{statement}</Statement>
      </ContactFormBody>
    </ContactWrapper>
  )
}

export default ContactForm
