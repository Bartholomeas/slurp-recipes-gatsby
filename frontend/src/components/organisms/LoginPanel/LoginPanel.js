import React, { useState, useContext } from "react"
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
import ErrorText from "../../atoms/ErrorText/ErrorText"
import LoadingPopup from "../../molecules/LoadingPopup/LoadingPopup"

const LoginPanel = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isValid, setIsValid] = useState(true)
  const { setIsAuthenticated } = useContext(StateContext)
  const loginInput = React.createRef({})
  const passwordInput = React.createRef({})
  let errorInput

  const setErrorStatus = (inputName, remove = false) => {
    if (typeof window !== "undefined") {
      if (remove === true) {
        document
          .querySelector(`input[id='${inputName}']`)
          .classList.remove("invalid")
      } else {
        errorInput = document.querySelector(`input[id='${inputName}']`)
        errorInput.classList.add("invalid")
        errorInput.setAttribute("className", "invalid")
      }
    }
  }
  const authorizeUser = async e => {
    e.preventDefault()
    setIsLoading(true)
    await axios
      .post(`${process.env.STRAPI_URL}/auth/local`, {
        identifier: loginInput.current.value,
        password: passwordInput.current.value,
      })
      .then(data => {
        localStorage.setItem("token", JSON.stringify(data.data.jwt))
        localStorage.setItem("user", JSON.stringify(data.data.user.username))
        setIsLoading(false)
        setIsAuthenticated(true)
        navigate("/")
      })
      .catch(error => {
        setIsLoading(false)
        setErrorStatus("login")
        setErrorStatus("password")
        setIsValid(false)
        setIsAuthenticated(false)
      })
  }

  return (
    <>
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
          {!isValid ? <ErrorText>Niepoprawny login lub hasło</ErrorText> : null}
          <Button isLong type="submit" onClick={e => authorizeUser(e)}>
            Zaloguj się
          </Button>
        </JoinForm>
        <JoinLink to="/register">
          Nie masz konta? <ColoredText>Zarejestruj się.</ColoredText>
        </JoinLink>
      </JoinPanelWrapper>
      {isLoading ? <LoadingPopup /> : null}
    </>
  )
}

export default LoginPanel
