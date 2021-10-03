import React from "react"
import emailjs from "emailjs-com"
import styled from "styled-components"
import Header from "../../atoms/Header/Header"
import Button from "../../atoms/Button/Button"

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
`

const ContactFormBody = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const ContactItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 2rem;
  margin-bottom: 3rem;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    width: 50%;
  }
`

const ContactFormLabel = styled.label`
  color: ${({ theme }) => theme.colors.fontColor};
  font-size: 2.6rem;
  align-content: flex-end;
  margin-bottom: 1.6rem;

  @media only screen and (min-width: 768px) {
    margin: 0;
  }
`

const ContactFormInput = styled.input`
  height: 3rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.darkerGrey};
  border: none;

  @media only screen and (min-width: 768px) {
    width: 60%;
  }
`
const ContactFormTextarea = styled.textarea`
  height: 8rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.darkerGrey};
  border: none;
  resize: vertical;

  @media only screen and (min-width: 768px) {
    width: 60%;
  }
`

const ContactForm = () => {
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
          console.log(result.text)
        },
        error => {
          console.log(error.text)
        }
      )
  }

  return (
    <ContactWrapper>
      <Header content="send recipe to us!" />
      <ContactFormBody onSubmit={sendEmail}>
        <ContactItemsContainer>
          <ContactFormLabel htmlFor="email">your e-mail</ContactFormLabel>
          <ContactFormInput id="email" type="email" name="from_name" />
        </ContactItemsContainer>
        <ContactItemsContainer>
          <ContactFormLabel htmlFor="title">title</ContactFormLabel>
          <ContactFormInput id="title" type="title  " name="title" />
        </ContactItemsContainer>
        <ContactItemsContainer>
          <ContactFormLabel htmlFzr="message">message</ContactFormLabel>
          <ContactFormTextarea id="message" name="message" />
        </ContactItemsContainer>
        <Button content="send" type="submit" value="Send" />
      </ContactFormBody>
    </ContactWrapper>
  )
}

export default ContactForm
