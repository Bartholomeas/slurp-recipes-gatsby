import React, { useContext } from "react"
import axios from "axios"
import Button from "../../atoms/Button/Button"
import { navigate } from "gatsby"
import { StateContext } from "../../../context/StateContext"

import {
  JoinPanelWrapper,
  JoinHeader,
  JoinForm,
  JoinLink,
  ColoredText,
} from "../../../styles/joinPanel.styles"
import FormField from "../../molecules/FormField/FormField"

const LoginPanel = () => {
  const { setIsAuthenticated } = useContext(StateContext)
  const loginInput = React.createRef({})
  const passwordInput = React.createRef({})

  const authorizeUser = async e => {
    e.preventDefault()
    await axios
      .post(`${process.env.STRAPI_URL}/auth/local`, {
        identifier: loginInput.current.value,
        password: passwordInput.current.value,
      })
      .then(data => {
        console.log(data)
        localStorage.setItem("token", JSON.stringify(data.data.jwt))
        localStorage.setItem("user", JSON.stringify(data.data.user.username))
        setIsAuthenticated(true)
        navigate("/")
      })
      .catch(error => {
        alert("Wrong password or login")
        setIsAuthenticated(false)
      })
  }

  return (
    <JoinPanelWrapper>
      <JoinHeader>Zaloguj się.</JoinHeader>
      <JoinForm>
        <FormField nameId="login" content="Login" ref={loginInput} />
        <FormField
          nameId="password"
          type="password"
          content="Hasło"
          ref={passwordInput}
        />
        <Button isLong type="submit" onClick={e => authorizeUser(e)}>
          Zaloguj się
        </Button>
      </JoinForm>
      <JoinLink to="/register">
        Nie masz konta? <ColoredText>Zarejestruj się.</ColoredText>
      </JoinLink>
    </JoinPanelWrapper>
  )
}

export default LoginPanel
