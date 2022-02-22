import React, { useContext, useRef } from "react"
import axios from "axios"
import Button from "../../atoms/Button/Button"
import { navigate } from "gatsby"
import { StateContext } from "../../../context/StateContext"
import {
  LoginPanelWrapper,
  LoginHeader,
  LoginForm,
  RegisterLink,
} from "./LoginPanel.styles"
import FormField from "../../molecules/FormField/FormField"

const LoginPanel = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(StateContext)
  const inputs = document.querySelectorAll("input")
  const inputsValue = useRef({})
  console.log(inputsValue)
  console.log(inputs)

  const authorizeUser = async e => {
    e.preventDefault()
    await axios
      .post(`${process.env.GATSBY_STRAPI_URL}/auth/local`, {
        identifier: inputs[0].value,
        password: inputs[1].value,
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
    <LoginPanelWrapper>
      <LoginHeader>log in.</LoginHeader>
      <LoginForm>
        <FormField
          label="login"
          id="login"
          name="login"
          className="loginInput"
        />
        <FormField
          type="password"
          label="password"
          id="password"
          name="password"
          className="loginInput"
        />
        <Button
          isLong
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
