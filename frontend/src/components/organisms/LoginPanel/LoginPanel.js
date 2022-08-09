import React, { useState } from "react"
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
import { useAuthorize } from "../../../hooks/useAuthorize"

const LoginPanel = () => {
  const { isLoading, isValid, passwordInput, loginInput, authorizeUser } =
    useAuthorize()

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
