import React, { useContext } from "react"
import styled from "styled-components"
import Button from "../../atoms/Button/Button"
import axios from "axios"
import { StateContext } from "../../../context/StateContext"

export const LoginPanelWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 3rem 0;

  @media only screen and (min-width: 768px) {
    margin-right: 3rem;
  }
`
export const LoginHeader = styled.h1`
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.fontColor};
`

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`

export const LoginLabel = styled.label`
  margin-bottom: 1rem;
  font-size: 1.6rem;
`

export const LoginInput = styled.input`
  padding: 1.4rem 1rem;
  margin-bottom: 2rem;
`

const LoginPanel = () => {
  const { isAuthenticated, setIsAuthenticated, token, setToken } =
    useContext(StateContext)

  const authorizeUser = async e => {
    e.preventDefault()
    const inputs = document.querySelectorAll("input")

    const data = await axios
      .post("http://localhost:1337/auth/local", {
        identifier: inputs[0].value,
        password: inputs[1].value,
      })
      .then(data => {
        localStorage.setItem("token", JSON.stringify(data.data.jwt))
        console.log(data)
        setIsAuthenticated(data.data.user)
        setToken(data.data.jwt)
      })
      .catch(error => {
        alert("Wrong password or login")
        setIsAuthenticated({})
      })
    // await axios
    //   .post("http://localhost:1337/recipes", {
    //     body: {
    //       title: "tytuuul",
    //       time: "125",
    //       preparation: "just prepare",
    //       ingredients: "love ",
    //     },
    //     headers: {
    //       authorization: `Bearer ${token}`,
    //     },
    //   })
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err))
    console.log(isAuthenticated)
  }

  return (
    <LoginPanelWrapper>
      <LoginHeader>log in</LoginHeader>
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
          content="Sign in"
          onClick={e => authorizeUser(e)}
        />
      </LoginForm>
    </LoginPanelWrapper>
  )
}

export default LoginPanel
