import React, { useContext } from "react"
import axios from "axios"
import Button from "../../atoms/Button/Button"
import { navigate } from "gatsby"
import { StateContext } from "../../../context/StateContext"
import {
  LoginPanelWrapper,
  LoginHeader,
  LoginForm,
  RegisterLink,
  ColoredText,
} from "./LoginPanel.styles"
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
    <LoginPanelWrapper>
      <LoginHeader>log in.</LoginHeader>
      <LoginForm>
        <FormField label="login" id="login" name="login" ref={loginInput} />
        <FormField
          type="password"
          label="password"
          id="password"
          name="password"
          ref={passwordInput}
        />
        <Button
          isLong
          type="submit"
          content="log in"
          onClick={e => authorizeUser(e)}
        />
      </LoginForm>
      <RegisterLink to="/register">
        You dont have account? <ColoredText>Register now.</ColoredText>
      </RegisterLink>
    </LoginPanelWrapper>
  )
}

export default LoginPanel
