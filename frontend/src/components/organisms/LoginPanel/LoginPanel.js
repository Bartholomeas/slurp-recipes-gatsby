import React, { useContext } from "react"
import axios from "axios"
import Button from "../../atoms/Button/Button"
import { navigate } from "gatsby"
import { StateContext } from "../../../context/StateContext"
import {
  LoginPanelWrapper,
  LoginHeader,
  LoginForm,
  LoginLabel,
  LoginInput,
  RegisterLink,
} from "./LoginPanel.styles"

const LoginPanel = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(StateContext)

  const authorizeUser = async e => {
    e.preventDefault()
    const inputs = document.querySelectorAll("input")

    await axios
      .post("http://localhost:1337/auth/local", {
        identifier: inputs[0].value,
        password: inputs[1].value,
      })
      .then(data => {
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
    <LoginPanelWrapper>
      <LoginHeader>log in.</LoginHeader>
      <LoginForm>
        <LoginLabel label="login" htmlFor="login">
          login
        </LoginLabel>
        <LoginInput name="login" id="login"></LoginInput>
        <LoginLabel label="password" htmlFor="password">
          password
        </LoginLabel>
        <LoginInput type="password" name="password" id="password"></LoginInput>
        <Button
          type="submit"
          content="log in"
          onClick={e => authorizeUser(e)}
        />
      </LoginForm>
      <RegisterLink to="/register">
        You dont have account? Register now.
      </RegisterLink>
    </LoginPanelWrapper>
  )
}

export default LoginPanel
