import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
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
  width: 50%;
`
export const RegisterLabel = styled.label``
export const RegisterCheckbox = styled.input``
export const RegisterInput = styled.input``
export const RegisterLink = styled(Link)``
const RegisterPanel = () => {
  return (
    <RegisterPanelWrapper>
      <RegisterHeader>log in.</RegisterHeader>
      <RegisterForm>
        <FormField label="username" id="username" />
        <FormField label="e-mail" id="register" type="email" />
        <FormField label="password" id="password" type="password" />
        <FormField
          width={50}
          label="confirm password"
          id="confirm_password"
          type="password"
        />
        {/* <RegisterLabel label="Register" htmlFor="Register">
          Register
        </RegisterLabel>
        <RegisterInput name="Register" id="Register"></RegisterInput>
        <RegisterLabel label="password" htmlFor="password">
          password
        </RegisterLabel>
        <RegisterInput
          type="password"
          name="password"
          id="password"
        ></RegisterInput> */}

        <Button type="submit" content="log in" />
      </RegisterForm>
      <RegisterLink to="/login">Dont have account? Log in.</RegisterLink>
    </RegisterPanelWrapper>
  )
}

export default RegisterPanel
