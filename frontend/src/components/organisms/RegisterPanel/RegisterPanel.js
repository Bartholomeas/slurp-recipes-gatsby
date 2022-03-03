import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import axios from "axios"
import FormField from "../../molecules/FormField/FormField"
import Button from "../../atoms/Button/Button"

export const RegisterPanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`
export const RegisterHeader = styled.p`
  font-weight: 300;
  font-size: 5rem;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.fontColor};
`
export const RegisterForm = styled.form`
  width: 100%;

  @media only screen and (min-width: 768px) {
    width: 50%;
  }
`

export const RegisterLabel = styled.label``
export const RegisterInput = styled.input``
export const RegisterLink = styled(Link)`
  text-decoration: none;
  margin-top: 2.2rem;
  color: ${({ theme }) => theme.colors.darkGrey};
`

const RegisterPanel = () => {
  const [registerInfo, setRegisterInfo] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  })

  const updateInput = e => {
    setRegisterInfo({ ...registerInfo, [e.target.name]: e.target.value })
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
      .post(`${process.env.STRAPI_URL}auth/local/register`, {
        username: "testowe",
        email: "test@test.com",
        password: "testtest",
      })
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  return (
    <RegisterPanelWrapper>
      <RegisterHeader>register.</RegisterHeader>
      <RegisterForm>
        <FormField
          onChange={e => updateInput(e)}
          label="username"
          id="username"
          name="username"
        />
        <FormField
          onChange={e => updateInput(e)}
          label="e-mail"
          id="register"
          type="email"
          name="email"
        />
        <FormField
          onChange={e => updateInput(e)}
          label="password"
          id="password"
          type="password"
          name="password"
        />
        <FormField
          onChange={e => updateInput(e)}
          label="confirm password"
          id="confirm_password"
          type="password"
          name="confirm_password"
        />

        <Button
          onClick={e => registerUser(e)}
          type="submit"
          content="register"
          isLong
        />
      </RegisterForm>
      <RegisterLink to="/login">Dont have account? Log in.</RegisterLink>
    </RegisterPanelWrapper>
  )
}

export default RegisterPanel
