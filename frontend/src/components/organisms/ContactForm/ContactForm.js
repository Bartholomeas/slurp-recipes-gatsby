import React from "react"
import emailjs from "emailjs-com"
import styled, { keyframes } from "styled-components"
import Button from "../../atoms/Button/Button"
import FormField from "../../molecules/FormField/FormField"

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 3px 2px 10px -3px ${({ theme }) => theme.otherStyles.shadow};
  border-radius: ${({ theme }) => theme.otherStyles.smallRadius};
`
const ContactFormBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0;
  background-color: orange;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
  }
`

const ContactFormBody = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2rem 2rem 0 2rem;
  gap: 0.8rem;
  border-radius: ${({ theme }) => theme.otherStyles.smallRadius};
  color: ${({ theme }) => theme.colors.lightGrey};
  @media only screen and (min-width: 768px) {
    height: 100%;
    max-width: 500px;
  }
`

const Statement = styled.p`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 1.6rem;
  padding: 2rem;
`

const FormButton = styled(Button)`
  color: ${({ theme }) => theme.colors.white};
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
      .then(result => {
        console.log(result.text)
        return (statement = "Pomyślnie wysłano wiadomość")
      })
      .catch(err => console.log(err))
  }

  return (
    <ContactFormBody onSubmit={sendEmail}>
      <FormField nameId="from_name" content="Twój email" type="email" />
      <FormField nameId="title" content="Tytuł" />
      <FormField textarea={true} nameId="message" content="Wiadomość" />
      <FormButton isLong type="submit" value="send">
        Wyślij
      </FormButton>
      <Statement>{statement}</Statement>
    </ContactFormBody>
  )
}

export default ContactForm
