import React, { useState } from "react"
import axios from "axios"
import { navigate } from "gatsby"
import Button from "../../atoms/Button/Button"
import {
  JoinPanelWrapper,
  JoinHeader,
  JoinForm,
  JoinLink,
  ColoredText,
} from "../../../styles/joinPanel.styles"
import FormField from "../../molecules/FormField/FormField"
import ErrorText from "../../atoms/ErrorText/ErrorText"
import LoadingPopup from "../../molecules/LoadingPopup/LoadingPopup"
import { setErrorStatus } from "../../utils/errorHelper"

const LoginPanel = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isValid, setIsValid] = useState(true)
  const loginInput = React.createRef("")
  const passwordInput = React.createRef("")
  // let errorInput

  const authorizeUser = async e => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const data = await axios.post(`${process.env.STRAPI_URL}/auth/local`, {
        identifier: loginInput.current.value,
        password: passwordInput.current.value,
      })
      localStorage.setItem("token", JSON.stringify(data.data.jwt))
      localStorage.setItem("user", JSON.stringify(data.data.user.username))
      setIsLoading(false)
      navigate("/")
    } catch {
      setIsLoading(false)
      setErrorStatus("login")
      setErrorStatus("password")
      setIsValid(false)
    }
  }

  return (
    <>
      <JoinPanelWrapper data-testid={"login-body"}>
        <JoinHeader>Zaloguj się.</JoinHeader>
        <JoinForm>
          <FormField nameId="login" content="Login" ref={loginInput} />
          <FormField
            nameId="password"
            type="password"
            content="Hasło"
            ref={passwordInput}
          />
          {!isValid && <ErrorText>Niepoprawny login lub hasło</ErrorText>}
          <Button isLong type="submit" onClick={e => authorizeUser(e)}>
            Zaloguj się
          </Button>
        </JoinForm>
        <JoinLink to="/register">
          Nie masz konta? <ColoredText>Zarejestruj się.</ColoredText>
        </JoinLink>
      </JoinPanelWrapper>
      {isLoading && <LoadingPopup />}
    </>
  )
}
export default LoginPanel
