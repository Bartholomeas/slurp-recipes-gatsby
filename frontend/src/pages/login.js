import React from "react"
import styled from "styled-components"
import LoginPanel from "../components/organisms/LoginPanel/LoginPanel"

const RegisterPanel = styled.div`
  height: 500px;
  width: 100%;
  background-color: grey;

  @media only screen and (min-width: 768px) {
    width: 40%;
  }
`

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 3rem;
  min-height: 50vh;
  margin-top: 7rem;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`
const Login = () => {
  return (
    <LoginWrapper>
      <LoginPanel />
      <RegisterPanel />
    </LoginWrapper>
  )
}

export default Login
