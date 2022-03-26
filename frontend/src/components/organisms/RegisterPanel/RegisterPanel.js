import React, { useState } from "react"
import axios from "axios"
import { navigate } from "gatsby"
import FormField from "../../molecules/FormField/FormField"
import Button from "../../atoms/Button/Button"
import {
  JoinPanelWrapper,
  JoinHeader,
  JoinForm,
  JoinLink,
  ColoredText,
  PasswordInfoText,
} from "../../../styles/joinPanel.styles"

const RegisterPanel = () => {
  const [registerInfo, setRegisterInfo] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  })

  const updateInput = e => {
    setRegisterInfo({ ...registerInfo, [e.target.name]: e.target.value })
  }

  const registerUser = async e => {
    if (
      registerInfo.password === registerInfo.confirm_password &&
      registerInfo.password !== ""
    ) {
      console.log("PASUJO ZE HEJ")
    }
    e.preventDefault()
    await axios
      .post(`${process.env.STRAPI_URL}/auth/local/register`, registerInfo)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  const emailInput = document.querySelector("#email")
  const passwordInput = document.querySelector("#password")
  const confirmPasswordInput = document.querySelector("#confirm_password")
  const mailRegex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  )
  const passwordRegex = new RegExp("(?=.*[A-Z])(?=.*[a-z])(?=.*?[0-9])")

  const validateForm = (() => {
    // const regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}")
    if (emailInput && mailRegex.test(emailInput.value)) {
      console.log("jest gut")
    }

    if (passwordInput && passwordRegex.test(passwordInput.value)) {
      if (passwordInput.value === confirmPasswordInput.value) {
        console.log("Dziaua haslo")
        console.log(passwordInput.value, confirmPasswordInput.value)
      } else {
        console.log("Hasla nie pasują")
        return false
      }
    } else {
      console.log("Haslo za krotkie")
      return false
    }

    return true
  })()

  return (
    <JoinPanelWrapper>
      <JoinHeader>Zarejestruj się.</JoinHeader>
      <JoinForm>
        <FormField
          onChange={e => updateInput(e)}
          nameId="username"
          content="Nazwa użytkownika"
        />
        <FormField
          onChange={e => updateInput(e)}
          nameId="email"
          type="email"
          content="E-mail"
        />
        <FormField
          onChange={e => updateInput(e)}
          nameId="password"
          type="password"
          content="Hasło"
        />
        <FormField
          onChange={e => updateInput(e)}
          nameId="confirm_password"
          type="password"
          content="Powtórz hasło"
        />
        <PasswordInfoText>
          Hasło musi zawierać conajmniej 8 znaków w tym przynajmniej jedną
          cyfrę i wielką literę
        </PasswordInfoText>

        <Button onClick={e => registerUser(e)} type="submit" isLong>
          Zarejestruj
        </Button>
      </JoinForm>
      <JoinLink to="/login">
        Masz konto? <ColoredText>Zaloguj się.</ColoredText>
      </JoinLink>
    </JoinPanelWrapper>
  )
}

export default RegisterPanel
