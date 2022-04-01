import React from "react"
import emailjs from "emailjs-com"
import styled, { keyframes } from "styled-components"
import Header from "../../atoms/Header/Header"
import Button from "../../atoms/Button/Button"
import FormField from "../../molecules/FormField/FormField"
import { IoFastFood } from "react-icons/io5"

const wiggle = keyframes`
from {
  transform:rotate(-5deg)
}
to{
  transform:rotate(5deg)

}`

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  /* padding: 0 2rem; */
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  box-shadow: 3px 2px 10px -3px ${({ theme }) => theme.colors.shadow};
  border-radius: 6px;
`
const ContactFormBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 3rem 0;

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
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.darkerSecondary};
  color: ${({ theme }) => theme.colors.lightGrey};
  @media only screen and (min-width: 768px) {
    height: 100%;
    max-width: 500px;
  }
`
const FastfoodIcon = styled(IoFastFood)`
  font-size: 30rem;
  color: ${({ theme }) => theme.colors.darkerSecondary};
  animation: 1s ${wiggle} infinite alternate-reverse;
`

const Statement = styled.p`
  color: ${({ theme }) => theme.colors.secondaryColor};
  font-size: 1.6rem;
  padding: 2rem;
`

const FormButton = styled(Button)`
  color: ${({ theme }) => theme.colors.lightGrey};
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
      <ContactFormBox>
        <ContactFormBody onSubmit={sendEmail}>
          <FormField nameId="from_name" content="Twój email" type="email" />
          <FormField nameId="title" content="Tytuł" />
          <FormField textarea={true} nameId="message" content="Wiadomość" />
          <FormButton isLong type="submit" value="send">
            Wyślij
          </FormButton>
          <Statement>{statement}</Statement>
        </ContactFormBody>
        <FastfoodIcon />
      </ContactFormBox>
    </ContactWrapper>
  )
}

export default ContactForm
