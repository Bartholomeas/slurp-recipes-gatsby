import React, { useState } from "react"
import axios from "axios"
import FormField from "../../molecules/FormField/FormField"
import Button from "../../atoms/Button/Button"
import {
  JoinPanelWrapper,
  JoinHeader,
  JoinForm,
  JoinLink,
  ColoredText,
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
    console.log(registerInfo)
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
      .post(`${process.env.STRAPI_URL}/auth/local/register`, {
        username: "testowe",
        email: "test@test.com",
        password: "testtest",
      })
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

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
