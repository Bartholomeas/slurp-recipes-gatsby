import React, { useState } from "react"
import axios from "axios"
import { navigate } from "gatsby"
import useAuth from "../../../hooks/useAuth"
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
import useLogin from "../../../hooks/useLogin"

const LoginPanel = () => {
const {loginInput, passwordInput, isValid, authorizeUser, isLoading} = useLogin();

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
      {isLoading && <LoadingPopup /> }
    </>
  )
}

export default LoginPanel
