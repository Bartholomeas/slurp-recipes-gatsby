import React, { useState, useEffect } from "react"
import emailjs from "emailjs-com"
import styled from "styled-components"
import FormField from "../../molecules/FormField/FormField"
import { setErrorStatus } from "../../utils/errorHelper"
import {
  ContactWrapper,
  ContactFormBox,
  ContactFormBody,
  FormButton,
} from "./ContactForm.styles"
import LoadingPopup from "../../molecules/LoadingPopup/LoadingPopup"

const ContactForm = () => {
  const [contactData, setContactData] = useState({
    from_name: "",
    title: "",
    message: "",
  })
  const [inputsValid, setInputsValid] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const updateInput = e => {
    setContactData({ ...contactData, [e.target.name]: e.target.value })
  }

  const checkInputs = () => {
    for (const key in contactData) {
      if (contactData[key] === "") {
        setErrorStatus(key)
        setInputsValid(false)
      } else {
        setErrorStatus(key, true)
        setInputsValid(true)
      }
    }
  }

  const sendEmail = async e => {
    e.preventDefault()

    try {
      setIsLoading(true)
      checkInputs()
      if (inputsValid) {
        const data = await emailjs.sendForm(
          "gmail",
          "template_13f70rg",
          e.target,
          "user_YtL1kdHkWKGLr0UtEhpBK"
        )
        console.log(data)
      }
      setIsLoading(false)
    } catch {
      setIsLoading(false)
      throw new Error("Something went wrong :(")
    }
  }

  return (
    <ContactFormBody onSubmit={sendEmail}>
      {isLoading && <LoadingPopup />}
      <FormField
        nameId="from_name"
        content="Twój email"
        type="email"
        onChange={e => updateInput(e)}
      />
      <FormField
        nameId="title"
        content="Tytuł"
        onChange={e => updateInput(e)}
      />
      <FormField
        textarea={true}
        nameId="message"
        content="Wiadomość"
        onChange={e => updateInput(e)}
      />
      <FormButton isLong type="submit" value="send">
        Wyślij
      </FormButton>
      {/* <Statement>{statement}</Statement> */}
    </ContactFormBody>
  )
}

export default ContactForm
